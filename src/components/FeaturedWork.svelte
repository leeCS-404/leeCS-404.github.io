<script lang="ts">
	import type { FeaturedWorkEntry } from '../types/featured-work';

	export let projects: FeaturedWorkEntry[] = [];
	export let limit: number | undefined;
	export let showSeeAll = true;
	export let basePath = '/work';

	function inview(node: HTMLElement) {
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						node.dataset.inview = 'true';
						io.unobserve(node);
					}
				});
			},
			{ threshold: 0.15 }
		);
		io.observe(node);
		return {
			destroy() {
				io.disconnect();
			}
		};
	}

	const byOrder = (entry: FeaturedWorkEntry) =>
		entry.data.order ?? Number.MAX_SAFE_INTEGER;

	$: sorted = [...projects].sort((a, b) => {
		const diff = byOrder(a) - byOrder(b);
		return diff === 0 ? a.slug.localeCompare(b.slug) : diff;
	});
	$: list = limit ? sorted.slice(0, limit) : sorted;
	$: firstThree = list.slice(0, 3);
	$: remaining = list.slice(3);
</script>

<section aria-labelledby="featured-work-heading" class="featured-work">
	<header class="header">
		<h2 id="featured-work-heading" class="title">Featured Work ↓</h2>
		<p class="subtitle">
			I create innovative and purposeful designs that not only capture attention but also drive meaningful results.
		</p>
	</header>

	<ul class="stack" role="list">
		{#each firstThree as project (project.id)}
			<li class="feature" role="listitem" use:inview>
				<a class="feature-link" href={`${basePath}/${project.slug ?? project.id}/`}>
					<div class="feature-inner">
						<div class="media">
							{#if project.data.video}
								<div class="video-wrap">
									<video class="thumb" muted playsinline preload="metadata" src={project.data.video}></video>
									<div class="play-overlay" aria-hidden="true">▶</div>
								</div>
							{:else if project.data.image}
								<img class="thumb" src={project.data.image.src} alt="" loading="lazy" />
							{:else}
								<div class="thumb placeholder" aria-hidden="true"></div>
							{/if}
						</div>
						<div class="content">
							<h3 class="name">{project.data.title}</h3>
							<div class="tags">
								{#each project.data.tags as tag}
									<span class="chip">{tag}</span>
								{/each}
							</div>
							<p class="desc">{project.data.description}</p>
							{#if project.data.link}
								<a class="primary" href={project.data.link} target="_blank" rel="noopener noreferrer" on:click|stopPropagation>
									Visit Site
								</a>
							{/if}
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>

	{#if remaining.length}
		<ul class="grid-2" role="list">
			{#each remaining as project (project.id)}
				<li class="feature small" role="listitem" use:inview>
					<a class="feature-link" href={`${basePath}/${project.slug ?? project.id}/`}>
						<div class="feature-inner">
							<div class="media">
								{#if project.data.video}
									<div class="video-wrap">
										<video class="thumb" muted playsinline preload="metadata" src={project.data.video}></video>
										<div class="play-overlay" aria-hidden="true">▶</div>
									</div>
								{:else if project.data.image}
									<img class="thumb" src={project.data.image.src} alt="" loading="lazy" />
								{:else}
									<div class="thumb placeholder" aria-hidden="true"></div>
								{/if}
							</div>
							<div class="content">
								<h3 class="name">{project.data.title}</h3>
								<div class="tags">
									{#each project.data.tags as tag}
										<span class="chip">{tag}</span>
									{/each}
								</div>
								<p class="desc">{project.data.description}</p>
								{#if project.data.link}
									<a class="primary" href={project.data.link} target="_blank" rel="noopener noreferrer" on:click|stopPropagation>
										Visit Site
									</a>
								{/if}
							</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	{/if}

	{#if showSeeAll}
		<div class="see-all">
			<a href="/work" class="see-all-btn">See All Works</a>
		</div>
	{/if}
</section>

<style>
	.featured-work {
		margin-top: 2.5rem;
		margin-bottom: 2.5rem;
	}
	.header {
		text-align: left;
		margin-bottom: 1rem;
	}
	.title { margin: 0 0 0.25rem 0; }
	.subtitle { margin: 0; color: var(--text-secondary, #6b6f72); }

	.stack {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.grid-2 {
		list-style: none;
		margin: 1rem 0 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	@media (min-width: 1024px) {
		.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
	}

	.feature {
		border-radius: 14px;
		background: var(--background-card, var(--background-body));
		box-shadow: 0 0 0 rgba(0,0,0,0);
		overflow: hidden;
		transform: translateY(0);
		opacity: 1; /* keep placeholders visible even before JS runs */
		transition: transform 220ms ease, box-shadow 220ms ease, background 300ms ease, color 300ms ease, opacity 300ms ease;
	}
	.feature[data-inview="true"] {
		transform: translateY(-3px);
	}
	.feature:hover,
	.feature:focus-within {
		transform: translateY(-3px);
		box-shadow: 0 12px 28px rgba(0,0,0,0.12), 0 6px 12px rgba(0,0,0,0.06);
	}
	.theme-dark .feature:hover,
	.theme-dark .feature:focus-within {
		box-shadow: 0 12px 28px rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.3);
	}

	.feature-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.feature-inner {
		display: grid;
		gap: 0.75rem;
		padding: 0.9rem;
	}
	.media {
		border-radius: 12px;
		overflow: hidden;
	}
	.thumb {
		display: block;
		width: 100%;
		height: auto;
		filter: brightness(0.98);
		transition: transform 250ms ease, filter 250ms ease;
	}
	.thumb.placeholder {
		background: rgba(84,142,155,0.12);
		padding-top: 56%;
	}
	.feature:hover .thumb,
	.feature:focus-within .thumb {
		transform: scale(1.01);
		filter: brightness(1.05);
	}
	.theme-dark .feature:hover .thumb,
	.theme-dark .feature:focus-within .thumb {
		filter: brightness(1.15);
	}

	.video-wrap {
		position: relative;
	}
	.play-overlay {
		position: absolute;
		right: 0.75rem;
		bottom: 0.6rem;
		background: rgba(0,0,0,0.6);
		color: #fff;
		padding: 0.25rem 0.4rem;
		border-radius: 9999px;
		font-size: 0.8rem;
	}

	.content { display: grid; gap: 0.4rem; }
	.name { margin: 0; line-height: 1.25; font-size: 1.2rem; color: var(--text-main, #111); }
	.desc { margin: 0; color: var(--text-secondary, #6b6f72); }
	.tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
	.chip {
		display: inline-block;
		padding: 0.15rem 0.5rem;
		font-size: 0.8rem;
		border-radius: 9999px;
		background: rgba(84,142,155,0.12);
		color: var(--primary-color, #548e9b);
		white-space: nowrap;
	}
	.primary {
		color: #fff;
		text-decoration: none;
		padding: 0.5rem 0.8rem;
		border-radius: 8px;
		background: var(--primary-color, #548e9b);
		width: fit-content;
	}

	.see-all { display: flex; justify-content: center; margin-top: 1rem; }
	.see-all-btn {
		display: inline-block;
		padding: 0.6rem 1rem;
		border-radius: 10px;
		text-decoration: none;
		background: rgba(84,142,155,0.12);
		color: var(--primary-color, #548e9b);
		transition: background 200ms ease, transform 200ms ease, box-shadow 200ms ease;
	}
	.see-all-btn:hover, .see-all-btn:focus-visible {
		transform: translateY(-2px);
		box-shadow: 0 8px 16px rgba(0,0,0,0.12);
	}
	.theme-dark .see-all-btn:hover, .theme-dark .see-all-btn:focus-visible {
		box-shadow: 0 8px 16px rgba(0,0,0,0.32);
	}
</style>
