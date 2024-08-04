import { useMemo } from 'react';
import { Text } from '@react-three/drei';

export default function TextRing({ radius = 1.5, text = "Data Analytics", segments = 32 }) {
  const textArray = useMemo(() => text.split(''), [text]);

  return (
    <>
      {textArray.map((char, index) => {
        const angle = (index / segments) * Math.PI * 2;
        return (
          <Text
            key={index}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * radius,
              0
            ]}
            rotation={[0, 0, angle + Math.PI / 2]}
            fontSize={0.1}
            color="#FFFFFF"
          >
            {char}
          </Text>
        );
      })}
    </>
  );
}
