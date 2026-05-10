import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import PlatformLink from "@/components/PlatformLink";
import ResourceCard from "@/components/ResourceCard";
import Section from "@/components/Section";
import StatusBadge from "@/components/StatusBadge";
import { PLATFORMS, RESOURCES } from "@/config";
import styles from "./index.module.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className={styles.wrapper}>
			<Nav />
			<Hero />

			{/* biome-ignore lint/correctness/useUniqueElementIds: page-level nav anchor */}
			<Section id="overview" title="COHESIVE THEME SYSTEMS">
				<p>
					A collection of cohesive, elegant dark/light themes for various
					applications and platforms.
				</p>
				<p>
					The themes are organized into collections, each with distinctive
					visual styles and color palettes. All themes are generated from a
					central source of truth using an adapter pattern for platform-specific
					implementations.
				</p>
				<p>
					Maintained as open source with a focus on consistency, quality, and
					developer experience across all supported platforms.
				</p>
			</Section>

			{/* biome-ignore lint/correctness/useUniqueElementIds: page-level nav anchor */}
			<Section id="status" title="DEVELOPMENT STATUS">
				<div className={styles.statusBadges}>
					<StatusBadge label="STATE" value="PRE-V1.0" />
					<StatusBadge label="THEMES" value="27" />
					<StatusBadge label="COLLECTIONS" value="5" />
					<StatusBadge label="ADAPTERS" value="6" />
				</div>
				<p>
					Pre-v1.0 Development — Core system operational with active expansion
					in progress.
				</p>
				<p>
					<strong>Current State:</strong> 27 themes across 5 collections built
					with OKLCH color space. 6 production-ready platform adapters generated
					from centralized core using adapter pattern.
				</p>
				<p>
					<strong>Pre-v1.0 Gaps:</strong> Missing VSCode adapter and complete
					Obsidian support. No automated release infrastructure or language
					packages for web-based theming.
				</p>
				<p>
					<strong>v1.0 Goals:</strong> Implement semantic-release system,
					complete VSCode and Obsidian adapters, create language packages for
					web integration.
				</p>
			</Section>

			{/* biome-ignore lint/correctness/useUniqueElementIds: page-level nav anchor */}
			<Section id="platforms" title="SUPPORTED PLATFORMS">
				<div className={styles.platformList}>
					{PLATFORMS.map((p) => (
						<PlatformLink key={p.name} name={p.name} url={p.url} />
					))}
				</div>
			</Section>

			{/* biome-ignore lint/correctness/useUniqueElementIds: page-level nav anchor */}
			<Section id="resources" title="RESOURCES">
				<div className={styles.resourceGrid}>
					{RESOURCES.map((r) => (
						<ResourceCard key={r.label} {...r} />
					))}
				</div>
			</Section>

			<footer className={styles.footer}>
				<span>BLACK ATOM INDUSTRIES</span>
				<span>EST. 2025</span>
			</footer>
		</div>
	);
}
