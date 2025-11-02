import { cva, type VariantProps } from "cva";
import type { ReactNode } from "react";
import styles from "./Section.module.css";

const sectionVariants = cva(styles.section, {
	variants: {
		spacing: {
			normal: styles.spacingNormal,
			compact: styles.spacingCompact,
		},
	},
	defaultVariants: {
		spacing: "normal",
	},
});

type SectionProps = {
	children: ReactNode;
	title?: string;
} & VariantProps<typeof sectionVariants>;

export default function Section({ children, title, spacing }: SectionProps) {
	return (
		<section className={sectionVariants({ spacing })}>
			{title && <h2 className={styles.sectionHeader}>{title}</h2>}
			{children}
		</section>
	);
}
