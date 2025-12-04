import { Html, PerspectiveCamera, useGLTF, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useRef } from "react";
import { type Object3D } from "three";
import { DRACOLoader, KTX2Loader } from "three-stdlib";

function LogoModel() {
  const ktx2Loader = new KTX2Loader();
  ktx2Loader.setTranscoderPath(
    `https://unpkg.com/three@0.168.0/examples/jsm/libs/basis/`
  );

  const draco = new DRACOLoader();
  draco.setDecoderConfig({ type: 'js' });
  draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

  const { gl } = useThree();

  const { scene } = useGLTF("/logo_draco_optimal_text.glb", true, undefined, (loader) => {
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
    loader.setDRACOLoader(draco);
  });

  scene.castShadow = false;
  scene.receiveShadow = false;

  const ref = useRef<Object3D | null>(null);

  useGSAP(() => {
    if (!ref.current) return;

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
  }, { scope: ref });

  return <primitive object={scene} scale={1} ref={ref} />;
}

function LogoCanvas() {
  const { progress } = useProgress();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas frameloop="always" performance={{ min: 0.5 }} dpr={[1, 1.5]}>
        <PerspectiveCamera
          makeDefault
          position={[0, 2.5, 10.0]}
          lookAt={[0.0, 0.0, 0.0]}
          fov={45}
          far={15}
        />

        <directionalLight
          position={[-5, 5, 1]}
          intensity={3.0}
          castShadow={false}
        />
        <directionalLight
          position={[5, 5, 1]}
          intensity={1.5}
          castShadow={false}
        />
        <directionalLight
          position={[0, -5, 1]}
          castShadow={false}
          intensity={0.5}
        />

        <Suspense fallback={
          <Html center>
            {progress}% Chargé
          </Html>
        }>
          <LogoModel />
        </Suspense>

        {/* <Environment preset="apartment" environmentIntensity={0.4} background={false} /> */}
        <EffectComposer multisampling={0}>
          <ToneMapping />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default LogoCanvas;