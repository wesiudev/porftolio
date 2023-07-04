"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";
import displacement from "./displacement.png";
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

export default function FadingImage({
  heroImage,
  notHeroImage,
}: {
  firstImage: string;
  secondImage: string;
}) {
  const [firstImage, setFirstImage] = useState(heroImage);
  const [secondImage, setSecondImage] = useState(notHeroImage);
  const ref = useRef();

  const [texture1, texture2, dispTexture] = useTexture([
    "https://decocanva.com/_ipx/w_640,q_75/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdecocanva-408fb.appspot.com%2Fo%2Fimage-706131%3Falt%3Dmedia%26token%3Dbed4c979-638d-4ddb-925b-96b9a31cb7ce?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdecocanva-408fb.appspot.com%2Fo%2Fimage-706131%3Falt%3Dmedia%26token%3Dbed4c979-638d-4ddb-925b-96b9a31cb7ce&w=640&q=75",
    "https://decocanva.com/_ipx/w_640,q_75/https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdecocanva-408fb.appspot.com%2Fo%2Fimage-706131%3Falt%3Dmedia%26token%3Dbed4c979-638d-4ddb-925b-96b9a31cb7ce?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdecocanva-408fb.appspot.com%2Fo%2Fimage-706131%3Falt%3Dmedia%26token%3Dbed4c979-638d-4ddb-925b-96b9a31cb7ce&w=640&q=75",
    "./displacement.png",
  ]);
  const [hovered, setHover] = useState(false);
  useFrame(() => {
    ref.current.dispFactor = THREE.MathUtils.lerp(
      ref.current.dispFactor,
      hovered ? 1 : 0,
      0.075
    );
  });
  const handleFirstImage = () => setHover(true);
  return (
    <mesh onPointerOver={handleFirstImage}>
      <planeGeometry />
      <ImageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
        toneMapped={false}
      />
    </mesh>
  );
}