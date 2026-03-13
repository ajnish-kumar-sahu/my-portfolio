import React from 'react';

interface SkillRadarProps {
  skills: Array<{ name: string; level: number }>;
  size?: number;
}

const SkillRadar: React.FC<SkillRadarProps> = ({ skills, size = 280 }) => {
  const radius = size / 2 - 20;
  const centerX = size / 2;
  const centerY = size / 2;
  const levelsCount = 5;

  const angleSlice = (Math.PI * 2) / skills.length;

  const getCoordinates = (index: number, level: number) => {
    const angle = angleSlice * index - Math.PI / 2;
    const r = (radius * level) / 100;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  const getBackgroundCoordinates = (index: number, levelNum: number) => {
    const angle = angleSlice * index - Math.PI / 2;
    const r = (radius * (levelNum * 20)) / 100;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  const backgroundPolygons = Array.from({ length: levelsCount }).map(
    (_, levelNum) => {
      const points = skills
        .map((_, i) => getBackgroundCoordinates(i, levelNum + 1))
        .map((p) => `${p.x},${p.y}`)
        .join(' ');
      return points;
    }
  );

  const dataPolygonPoints = skills
    .map((skill, i) => getCoordinates(i, skill.level))
    .map((p) => `${p.x},${p.y}`)
    .join(' ');

  const labelCoordinates = skills.map((skill, i) => {
    const angle = angleSlice * i - Math.PI / 2;
    const r = radius + 30;
    return {
      name: skill.name,
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {backgroundPolygons.map((points, i) => (
        <polygon
          key={`bg-${i}`}
          points={points}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
          opacity="0.5"
        />
      ))}

      {skills.map((_, i) => {
        const start = getBackgroundCoordinates(i, levelsCount);
        return (
          <line
            key={`line-${i}`}
            x1={centerX}
            y1={centerY}
            x2={start.x}
            y2={start.y}
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity="0.5"
          />
        );
      })}

      <polygon
        points={dataPolygonPoints}
        fill="url(#radarGradient)"
        stroke="#3b82f6"
        strokeWidth="2"
      />

      {labelCoordinates.map((label, i) => (
        <g key={`label-${i}`}>
          <text
            x={label.x}
            y={label.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm font-semibold fill-gray-700 dark:fill-gray-300"
          >
            {label.name}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default SkillRadar;
