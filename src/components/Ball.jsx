import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
  useProgress,
} from "@react-three/drei";
import PropTypes from "prop-types";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}
        </p>
      </span>
    </Html>
  );
};

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl], () => {
    console.log(`Successfully loaded texture: ${props.imgUrl}`);
  }, (error) => {
    console.error(`Failed to load texture: ${props.imgUrl}`, error);
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight />
      <directionalLight />
      <mesh scale={2.75}>
        <icosahedronGeometry />
        <meshStandardMaterial color="#fff8eb" />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, label }) => {
  const imgUrl = `skills/${icon}.png`;
  
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls enablePan={false} enableZoom={false} />
          <Ball imgUrl={imgUrl} />
          </Suspense>
        <Preload all />
      </Canvas>

      <div
        style={{
          position: "absolute",
          bottom: "0px", 
          width: "100%",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          color: "var(--color-text)",
          fontFamily: "var(--font-body)",
        }}
      >
        {label}
      </div>
    </div>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired, 
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default BallCanvas;
