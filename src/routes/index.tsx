import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/Header";
import { Link } from "@/components/Link";
import Section from "@/components/Section";
import styles from "./index.module.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className={styles.wrapper}>
			<Header
				title="BLACK ATOM INDUSTRIES"
				subtitle="COHESIVE THEME SYSTEMS"
				meta="EST. 2025"
			/>

			<main>
				<Section title="OVERVIEW">
					<p>
						A collection of cohesive, elegant dark/light themes for various
						applications and platforms.
					</p>
					<p>
						The themes are organized into collections, each with distinctive
						visual styles and color palettes. All themes are generated from a
						central source of truth using an adapter pattern for
						platform-specific implementations.
					</p>
					<p>
						Maintained as open source with a focus on consistency, quality, and
						developer experience across all supported platforms.
					</p>
				</Section>

				<Section title="DEVELOPMENT STATUS">
					<p>
						Pre-v1.0 Development - Core system operational with active expansion
						in progress.
					</p>

					<p>
						<strong>Current State:</strong> 27 themes across 5 collections built
						with OKLCH color space. 6 production-ready platform adapters
						(Neovim, Zed, Ghostty, WezTerm, Tmux) generated from centralized
						core using adapter pattern.
					</p>

					<p>
						<strong>Pre-v1.0 Gaps:</strong> Missing VSCode adapter and complete
						Obsidian support. No automated release infrastructure or language
						packages (CSS, SCSS, JSON/YAML) for web-based theming.
					</p>

					<p>
						<strong>v1.0 Goals:</strong> Implement semantic-release system for
						automated versioning across repositories. Complete VSCode and
						Obsidian adapters. Create language packages for web integration.
						Comprehensive documentation for contributors.
					</p>

					<p>
						<strong>Future Vision:</strong> Expand to 20+ platforms including
						additional editors (Sublime, Emacs), terminal emulators (Kitty,
						Alacritty, iTerm2), and development tools (Zellij, Starship, Delta,
						Bat). Build infrastructure to support community contributions.
					</p>
				</Section>

				<Section title="SUPPORTED PLATFORMS">
					<ul className={styles.platformList}>
						<li>
							<a href="https://github.com/black-atom-industries/nvim">NEOVIM</a>
						</li>
						<li>
							<a href="https://github.com/black-atom-industries/zed">
								ZED EDITOR
							</a>
						</li>
						<li>
							<a href="https://github.com/black-atom-industries/wezterm">
								WEZTERM
							</a>
						</li>
						<li>
							<a href="https://github.com/black-atom-industries/ghostty">
								GHOSTTY
							</a>
						</li>
						<li>
							<a href="https://github.com/black-atom-industries/tmux">TMUX</a>
						</li>
						<li>...</li>
					</ul>
				</Section>

				<Section title="RESOURCES">
					<div className={styles.resourceList}>
						<div className={styles.resource}>
							<div className={styles.resourceLabel}>GITHUB ORGANIZATION</div>
							<a
								href="https://github.com/black-atom-industries"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.resourceLink}
							>
								github.com/black-atom-industries
							</a>
						</div>

						<div className={styles.resource}>
							<div className={styles.resourceLabel}>CORE REPOSITORY</div>
							<a
								href="https://github.com/black-atom-industries/core"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.resourceLink}
							>
								github.com/black-atom-industries
							</a>
						</div>

						<div className={styles.resource}>
							<div className={styles.resourceLabel}>LINEAR TEAM</div>
							<a
								href="https://linear.app/black-atom-industries/settings/teams/DEV"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.resourceLink}
							>
								linear.app/black-atom-industries
							</a>
						</div>
					</div>
				</Section>
			</main>

			<footer className={styles.footer}>
				<p>BLACK ATOM INDUSTRIES - EST. 2025</p>
			</footer>
		</div>
	);
}
