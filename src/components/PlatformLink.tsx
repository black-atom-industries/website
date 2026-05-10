import styles from "./PlatformLink.module.css";

type PlatformLinkProps = {
	name: string;
	url: string;
};

export default function PlatformLink({ name, url }: PlatformLinkProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.link}
		>
			<span>{name}</span>
			<span className={styles.arrow}>→</span>
		</a>
	);
}
