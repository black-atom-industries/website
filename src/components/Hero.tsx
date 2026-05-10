import styles from "./Hero.module.css";
import SunburstMark from "./SunburstMark";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.markWrapper}>
				<SunburstMark
					size={320}
					rays={96}
					coreRatio={0.09}
					className={styles.mark}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.eyebrow}>EST. 2025 · MATERIAL SCIENCES</div>
				<h1 className={styles.title}>
					BLACK ATOM
					<br />
					INDUSTRIES
				</h1>
				<div className={styles.tagline}>THEMES TO FORGET</div>
				<div className={styles.rule} />
			</div>
		</section>
	);
}
