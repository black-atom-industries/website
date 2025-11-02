import styles from "./Header.module.css";

type HeaderProps = {
	title: string;
	subtitle?: string;
	meta?: string;
};

export default function Header({ title, subtitle, meta }: HeaderProps) {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>{title}</h1>
			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
			{meta && <p className={styles.subtitle}>{meta}</p>}
		</header>
	);
}
