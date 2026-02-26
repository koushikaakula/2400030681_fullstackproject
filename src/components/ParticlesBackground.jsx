import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
          },
        },
        background: { color: "transparent" },
      }}
    />
  );
}