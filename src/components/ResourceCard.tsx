import styles from "./ResourceCard.module.css";

type ResourceCardProps = {
	label: string;
	title: string;
	url: string;
	href: string;
};

export default function ResourceCard({
	label,
	title,
	url,
	href,
}: ResourceCardProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.card}
		>
			<div className={styles.label}>{label}</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.url}>{url}</div>
		</a>
	);
}
