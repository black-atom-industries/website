import styles from "./Hero.module.css";
import SunburstMark from "./SunburstMark";

const PAPER = "oklch(92% 0.032 89)";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.markWrapper}>
				<SunburstMark
					size={360}
					rays={96}
					coreRatio={0.09}
					ink={PAPER}
					className={styles.mark}
				/>
			</div>
			<div className={styles.content}>
				<h1 className={styles.titleMain}>BLACK ATOM</h1>
				<div className={styles.titleSub}>INDUSTRIES</div>
				<div className={styles.rule} />
				<div className={styles.tagline}>EST. MMXXVI · MATERIAL SCIENCES</div>
			</div>
		</section>
	);
}
