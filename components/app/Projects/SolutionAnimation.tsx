import React, { useEffect, useState } from 'react'

const SolutionAnimation = ({ isActive }: { isActive: boolean }) => {
  const [hash, setHash] = useState("XXXXXXXXXXXXXXXXXXXX");
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setHash(
        Array.from(
          { length: 20 },
          () => CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join("")
      );
    }, 100); // Change characters every 100ms

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <h2 className="text-3xl text-center font-mono font-normal tracking-wider">
      {hash}
    </h2>
  );
};

export default SolutionAnimation