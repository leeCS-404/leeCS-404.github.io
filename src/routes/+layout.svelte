<!-- svelte-ignore script_context_deprecated -->
<!-- prerender all routes-->

<script module>
  export const prerender = true;
</script>

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!--Navigation bar-->
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/Blog">Blog</a>
			</li>
			<li>
				<a href="/Projects">Projects</a>
			</li>
			<li>
				<a href="/Contact">Contact</a>
			</li>
		</ul>
	</nav>
</svelte:head>

{@render children?.()}
