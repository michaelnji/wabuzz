<script lang="ts">
	import { page } from '$app/stores';
	import { setItemValue } from '$lib/scripts/dbManager';
	import theme from '$lib/stores/theme';
	import { IconMini, IconOutline, IconSolid } from 'svelte-heros-v2';
	import { fade, fly, scale } from 'svelte/transition';
	let closeModal: boolean = false;
	function toggleTheme(): void {
		if ($theme === 'dark') {
			$theme = setItemValue('theme', 'light');
			return;
		}
		$theme = setItemValue('theme', 'dark');
	}
	$: currentSection = $page.url.pathname;
</script>

<div class="navbar-wrapper !z-10">
	{#if closeModal}
		<div
			class="navbar-container dark:!border-base-100 dark:!bg-base-300 dark:!text-gray-50"
			in:fly={{ y: 200 }}
			out:fade={{ duration: 100 }}
			on:blur={() => {
				closeModal = !closeModal;
			}}
		>
			<div class="nav-start justify-between flex items-center w-full">
				<div>
					<a href="/" class="logo"><span class="font-extrabold text-primary">マイケル</span> Nji</a>
				</div>
				<button
					class="btn btn-ghost dark:!text-gray-50 shadow-lg overflow-hidden !rounded-full dark:hover:!bg-gray-50 dark:hover:!bg-opacity-5"
					on:click={toggleTheme}
				>
					{#key $theme}
						{#if $theme == 'light'}
							<div in:scale={{ duration: 400 }}>
								<IconSolid
									name="moon-solid"
									class="focus:!outline-none"
									width="24"
									height="24"
									tabindex="-1"
								/>
							</div>
						{:else}
							<div in:scale={{ duration: 400 }}>
								<IconSolid
									name="sun-solid"
									class="focus:!outline-none"
									width="24"
									height="24"
									tabindex="-1"
								/>
							</div>
						{/if}
					{/key}
				</button>
			</div>
			<div class="divider dark:!border-base-100" />
			<nav class="nav-center">
				<ul>
					<li>
						<a
							href="/#about"
							class="nav-item"
							class:!bg-primary={currentSection === '/#about'}
							class:!bg-opacity-30={currentSection === '/#about'}
							class:!text-primary={currentSection === '/#about'}
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							ABOUT
						</a>
					</li>
					<li>
						<a
							class:bg-primary={currentSection === '/#projects'}
							class:bg-opacity-30={currentSection === '/#projects'}
							class:text-primary={currentSection === '/#projects'}
							href="/#projects"
							class="nav-item"
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							PROJECTS
						</a>
					</li>
					<li>
						<a href="https://github.com/michaelnji" class="nav-item"> GITHUB </a>
					</li>
					<!-- <li>
						<a href="/" class="nav-item"> BLOG </a>
					</li>
					<li>
						<a href="/" class="nav-item"> RESUME </a>
					</li> -->
				</ul>
			</nav>
			<div class="divider dark:!border-base-100" />
			<div class="nav-end">
				<p class="text-xs px-3 opacity-70">Designed and developed in CMR with 💻 & 🎧</p>
			</div>
		</div>
	{/if}
	<button
		class="btn !z-20 md:btn-lg btn-primary shadow-lg overflow-hidden !rounded-full"
		on:click={() => {
			closeModal = !closeModal;
		}}
	>
		{#key closeModal}
			{#if !closeModal}
				<div in:scale={{ duration: 400 }}>
					<IconSolid
						name="bars-3-solid"
						class="focus:!outline-none hidden md:block"
						width="48"
						height="48"
						tabindex="-1"
					/>
					<IconSolid
						name="bars-3-solid"
						class="focus:!outline-none md:hidden"
						width="36"
						height="36"
						tabindex="-1"
					/>
				</div>
			{:else}
				<div in:scale={{ duration: 400 }}>
					<IconSolid
						name="x-mark-solid"
						class="focus:!outline-none hidden md:block"
						width="48"
						height="48"
						tabindex="-1"
					/>
					<IconSolid
						name="x-mark-solid"
						class="focus:!outline-none md:hidden"
						width="36"
						height="36"
						tabindex="-1"
					/>
				</div>
			{/if}
		{/key}
	</button>
</div>

<style lang="postcss">
	.navbar-wrapper {
		@apply fixed bottom-4 flex flex-col   items-end gap-y-4  right-4;
	}
	.navbar-container {
		@apply bg-white border shadow-lg border-gray-200 py-6 px-3 rounded-2xl w-full flex flex-col items-start gap-y-2;
	}
	.logo {
		@apply font-head text-xl;
	}
	.nav-center ul {
		@apply flex flex-col gap-1 w-full;
	}
	.nav-center ul li a {
		@apply flex items-center gap-x-3 p-3 w-full;
	}
	.nav-center ul li {
		@apply rounded-full p-1 cursor-pointer;
	}

	.nav-center ul li:hover {
		@apply bg-base-300 text-base-300 bg-opacity-10;
	}
	.dark .nav-center ul li:hover {
		@apply bg-gray-50 text-gray-50 bg-opacity-10;
	}
	.nav-center {
		@apply mt-4 w-full;
	}
	.nav-end {
		@apply mt-4 w-full;
	}
</style>
