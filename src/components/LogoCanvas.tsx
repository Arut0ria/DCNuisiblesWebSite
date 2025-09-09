import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { type Object3D } from "three";

function LogoModel() {
  const { scene } = useGLTF("/logo.glb");
  const ref = useRef<Object3D | null>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.rotation, {
        y: Math.PI * 2,
        duration: 4,
        ease: "back.inOut(1.7)",
        repeat: -1, // infini
      });

      gsap.to(ref.current.position, {
        y: 0.5,
        duration: 2,
        yoyo: true,
        ease: "bounce.in",
        repeat: -1,
      });
    }
  }, []);

  return <primitive object={scene} scale={1} ref={ref} />;
}

function LogoCanvas() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[0, 2.5, 10.0]}
          lookAt={[0.0, 0.0, 0.0]}
          fov={45}
        />

        <directionalLight
          position={[-5, 5, 1]}
          intensity={5.0}
          castShadow
        />

        <LogoModel />

        <Environment preset="apartment" environmentIntensity={0.4} background={false} />
      </Canvas>
    </div>
  );
}

export default LogoCanvas;