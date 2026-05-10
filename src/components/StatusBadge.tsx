import styles from "./StatusBadge.module.css";

type StatusBadgeProps = {
	label: string;
	value: string;
};

export default function StatusBadge({ label, value }: StatusBadgeProps) {
	return (
		<div className={styles.badge}>
			<span className={styles.label}>{label}</span>
			<span className={styles.value}>{value}</span>
		</div>
	);
}
