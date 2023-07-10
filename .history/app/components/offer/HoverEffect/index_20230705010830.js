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

export default function FadingImage({ heroImage, secondaryImage }) {
  const [hovered, setHover] = useState(false);
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useTexture([
    `${heroImage}`,
    `${secondaryImage}`,
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
    <mesh
      onPointerEnter={() => handleFirstImage()}
      onPointerLeave={() => handleSecondImage()}
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
  );
}
