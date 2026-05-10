type SunburstMarkProps = {
	size?: number;
	rays?: number;
	ink?: string;
	coreRatio?: number;
	className?: string;
};

export default function SunburstMark({
	size = 28,
	rays = 48,
	ink = "#0a0a0a",
	coreRatio = 0.18,
	className,
}: SunburstMarkProps) {
	const cx = size / 2;
	const cy = size / 2;
	const coreR = size * coreRatio;
	const innerR = coreR + 0.5;
	const outerR = Math.hypot(size, size) * 0.7;

	const lineData = Array.from({ length: rays }, (_, i) => {
		const angle = (i / rays) * Math.PI * 2;
		return {
			key: angle.toFixed(6),
			x1: (cx + Math.cos(angle) * innerR).toFixed(2),
			y1: (cy + Math.sin(angle) * innerR).toFixed(2),
			x2: (cx + Math.cos(angle) * outerR).toFixed(2),
			y2: (cy + Math.sin(angle) * outerR).toFixed(2),
		};
	});

	return (
		<svg
			viewBox={`0 0 ${size} ${size}`}
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className={className}
			style={{ display: "block", overflow: "hidden", flexShrink: 0 }}
		>
			{lineData.map(({ key, x1, y1, x2, y2 }) => (
				<line
					key={key}
					x1={x1}
					y1={y1}
					x2={x2}
					y2={y2}
					stroke={ink}
					strokeWidth={1}
				/>
			))}
			<circle cx={cx} cy={cy} r={coreR} fill={ink} />
		</svg>
	);
}
