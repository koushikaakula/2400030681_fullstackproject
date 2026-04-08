import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async (engine) => {
      await loadSlim(engine);
    };
    setInit(true);
  }, []);

  return init ? (
    <Particles
      options={{
        background: { color: "#ffffff" },
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { enable: true },
        },
      }}
    />
  ) : null;
}