import styles from "./Nav.module.css";
import SunburstMark from "./SunburstMark";

const NAV_ITEMS = [
	{ label: "OVERVIEW", href: "#overview" },
	{ label: "PLATFORMS", href: "#platforms" },
	{ label: "RESOURCES", href: "#resources" },
];

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<div className={styles.brand}>
				<SunburstMark size={28} rays={48} coreRatio={0.18} />
				<span className={styles.brandName}>BLACK ATOM</span>
			</div>
			<ul className={styles.links}>
				{NAV_ITEMS.map(({ label, href }) => (
					<li key={label}>
						<a href={href} className={styles.link}>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
