import { createFileRoute } from "@tanstack/react-router";

import styles from "./index.module.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className={styles.wrapper}>
			<h1>Black Atom Industries</h1>
		</div>
	);
}
