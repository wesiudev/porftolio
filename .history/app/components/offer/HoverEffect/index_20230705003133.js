"use client";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";

export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
    disp: undefined,
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform sampler2D disp;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;
    void main() {
      vec2 uv = vUv;
      vec4 disp = texture2D(disp, uv);
      vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <encodings_fragment>
    }`
);

extend({ ImageFadeMaterial });
extend({ Text });

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function FadingImage({ heroImage, secondaryImage }) {
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Philosopher",
    fontSize: 12,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });
  const onMouseMove = (e) => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0,
    ]);
  };
  const [hovered, setHover] = useState(false);

  const ref = useRef();
  const [texture1, texture2, dispTexture] = useTexture([
    `${
      heroImage
        ? heroImage
        : "https://raw.githubusercontent.com/wesiudev/decocanva/f4744f078c16e43bf623acbbd80781ec71feb98d/public/displacement1.png"
    }`,
    `https://raw.githubusercontent.com/wesiudev/decocanva/f4744f078c16e43bf623acbbd80781ec71feb98d/public/displacement1.png`,
    `https://raw.githubusercontent.com/wesiudev/decocanva/f4744f078c16e43bf623acbbd80781ec71feb98d/public/displacement1.png`,
  ]);
  useFrame(() => {
    if (ref.current) {
      ref.current.dispFactor = THREE.MathUtils.lerp(
        ref.current.dispFactor,
        hovered ? 1 : 0,
        0.075
      );
    }
  });
  function handleFirstImage() {
    setHover(true);
  }
  function handleSecondImage() {
    setHover(false);
  }
  return (
    <div>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        pixelRatio={window.devicePixelRatio}
        onMouseMove={onMouseMove}
      >
        <text
          position-z={-180}
          rotation={rotation}
          {...opts}
          text={text}
          font={fonts[opts.font]}
          anchorX="center"
          anchorY="middle"
        >
          {opts.materialType === "MeshPhongMaterial" ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>

        <pointLight position={[-100, 0, -160]} />
        <pointLight position={[0, 0, -170]} />
        <pointLight position={[100, 0, -160]} />
      </Canvas>

      <DatGui data={opts} onUpdate={setOpts}>
        <DatSelect path="font" options={Object.keys(fonts)} />
        <DatNumber path="fontSize" min={1} max={50} step={1} />
        <DatNumber path="maxWidth" min={50} max={500} step={1} />
        <DatNumber path="lineHeight" min={0.5} max={2} step={0.1} />
        <DatNumber path="letterSpacing" min={-0.1} max={0.5} step={0.01} />
        <DatSelect
          path="textAlign"
          options={["left", "center", "right", "justify"]}
        />
        <DatSelect
          path="materialType"
          label="material"
          options={["MeshBasicMaterial", "MeshPhongMaterial"]}
        />
        <DatColor path="color" />
      </DatGui>
      <mesh
        onPointerOver={() => handleFirstImage()}
        onPointerOut={() => handleSecondImage()}
      >
        <planeGeometry />
        <imageFadeMaterial
          ref={ref}
          tex={texture1}
          tex2={texture2}
          disp={dispTexture}
          toneMapped={false}
        />
      </mesh>
    </div>
  );
}
