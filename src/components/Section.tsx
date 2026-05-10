import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
	id?: string;
	title: string;
	children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
	return (
		<section id={id} className={styles.section}>
			<div className={styles.marker}>§</div>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.content}>{children}</div>
		</section>
	);
}
