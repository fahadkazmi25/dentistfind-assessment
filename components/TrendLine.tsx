
"use client"
import React, { useState } from 'react';

type TrendLineProps = {
    data: number[];
    color?: string;
};

export const TrendLine: React.FC<TrendLineProps> = ({ data, color = "#10b981" }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const max = Math.max(...data, 1);
    const height = 40;
    const width = 120;
    const padding = 4;
    const horizontalPadding = 12;

    const points = data.map((val, i) => ({
        x: horizontalPadding + (i / (data.length - 1)) * (width - horizontalPadding * 2),
        y: height - ((val / max) * (height - padding * 2) + padding)
    }));

    const pathData = points.reduce((acc, point, i, a) => {
        if (i === 0) return `M ${point.x},${point.y}`;
        const prev = a[i - 1];
        const cx = (prev.x + point.x) / 2;
        return `${acc} C ${cx},${prev.y} ${cx},${point.y} ${point.x},${point.y}`;
    }, "");

    const fillPath = `${pathData} V ${height} H 0 Z`;

    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const svg = e.currentTarget;
        const rect = svg.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * width;
        const index = Math.min(Math.max(Math.round((x / width) * (data.length - 1)), 0), data.length - 1);
        setHoveredIndex(index);
    };

    return (
        <div className="relative w-full h-full group/trend">
            <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-full overflow-visible drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                preserveAspectRatio="none"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <defs>
                    <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path
                    d={fillPath}
                    fill="url(#line-gradient)"
                    className="transition-all duration-700"
                />
                <path
                    d={pathData}
                    fill="none"
                    stroke={color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-700"
                />

                {hoveredIndex !== null && (
                    <g className="transition-opacity duration-200">
                        <line
                            x1={points[hoveredIndex].x}
                            y1={0}
                            x2={points[hoveredIndex].x}
                            y2={height}
                            stroke={color}
                            strokeWidth="1"
                            strokeDasharray="2,2"
                            opacity="0.4"
                        />
                        <circle
                            cx={points[hoveredIndex].x}
                            cy={points[hoveredIndex].y}
                            r="3"
                            fill="white"
                            stroke={color}
                            strokeWidth="2"
                        />
                        <rect
                            x={points[hoveredIndex].x - 12}
                            y={points[hoveredIndex].y - 18}
                            width="24"
                            height="12"
                            rx="4"
                            fill={color}
                        />
                        <text
                            x={points[hoveredIndex].x}
                            y={points[hoveredIndex].y - 9.5}
                            textAnchor="middle"
                            fill="white"
                            fontSize="7"
                            fontWeight="bold"
                            className="pointer-events-none"
                        >
                            {data[hoveredIndex]}
                        </text>
                    </g>
                )}

                {/* <rect
                    width={width}
                    height={height}
                    fill="transparent"
                    className="cursor-crosshair"
                /> */}
            </svg>
        </div>
    );
};


