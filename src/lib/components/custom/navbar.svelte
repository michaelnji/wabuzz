<script lang="ts">
	import { page } from '$app/stores';
  import { MenuIcon, XIcon } from 'lucide-svelte';
	import { fade, fly, scale } from 'svelte/transition';
  import Button from '../ui/button/button.svelte';
	let closeModal: boolean = false;
	
	$: currentSection = $page.url.pathname;
</script>

<div class="navbar-wrapper !z-10 md:top-4">
	<Button variant='default' class='rounded-full shadow-lg z-10 p-4 md:p-8' size='icon'
		on:click={() => {
			closeModal = !closeModal;
		}}
	>
		{#key closeModal}
			{#if !closeModal}
				<div in:scale={{ duration: 300 }}>
					<MenuIcon
						class="focus:!outline-none hidden md:block"
						size="32"
						
						
					/>
					<MenuIcon
						class="focus:!outline-none md:hidden"
						size="26"
						
						
					/>
				</div>
			{:else}
				<div in:scale={{ duration: 300 }}>
					<XIcon
						class="focus:!outline-none hidden md:block"
						size="32"
						
						
					/>
					<XIcon
						class="focus:!outline-none md:hidden"
						size="26"
						
						
					/>
				</div>
			{/if}
		{/key}
	</Button>
	{#if closeModal}
		<div
			class="navbar-container "
			in:fly={{ y: -200 }}
			out:fade={{ duration: 100 }}
			on:blur={() => {
				closeModal = !closeModal;
			}}
		>
			<div class="nav-start justify-between flex items-center w-full">
				<div>
					<a href="/" class="logo font-extrabold "><span class="text-primary">WA</span>BUZZ</a>
				</div>
				
			</div>
			<div class="w-full border border-gray-700 border-opacity-10" />
			<nav class="nav-center">
				<ul>
					<li>
						<a
							href="/"
							class="nav-item"
							class:!bg-primary={currentSection === '/'}
							class:!bg-opacity-30={currentSection === '/'}
							class:text-white={currentSection === '/'}
							class:rounded-full={currentSection === '/'}
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							HOME
						</a>
					</li>
					<li>
						<a
							class:bg-primary={currentSection === '/add'}
							class:!bg-opacity-30={currentSection === '/add'}
							class:text-white={currentSection === '/add'}
							class:rounded-full={currentSection === '/add'}
							href="/add"
							class="nav-item"
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							SUBMIT CONTACT
						</a>
					</li>
					<li>
						<a
							class:bg-primary={currentSection === '/download'}
							class:bg-opacity-30={currentSection === '/download'}
							class:text-white={currentSection === '/download'}
							class:rounded-full={currentSection === '/download'}
							href="/download"
							class="nav-item"
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							DOWNLOAD FILE
						</a>
					</li>
					<li>
						<a
							class:bg-primary={currentSection === '/privacy-policy'}
							class:bg-opacity-30={currentSection === '/privacy-policy'}
							class:text-white={currentSection === '/privacy-policy'}
							class:rounded-full={currentSection === '/privacy-policy'}
							href="/privacy-policy"
							class="nav-item"
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							PRIVACY POLICY
						</a>
					</li>
					<li>
						<a
							class:bg-primary={currentSection === '/terms'}
							class:bg-opacity-30={currentSection === '/terms'}
							class:text-white={currentSection === '/terms'}
							class:rounded-full={currentSection === '/terms'}
							href="/terms"
							class="nav-item"
							on:click={() => {
								closeModal = !closeModal;
							}}
						>
							TERMS
						</a>
					</li>
					
					<!-- <li>
						<a href="/" class="nav-item"> BLOG </a>
					</li>
					<li>
						<a href="/" class="nav-item"> RESUME </a>
					</li> -->
				</ul>
			</nav>
			<div class="w-full border border-gray-700 border-opacity-10 dark:!border-base-100" />
			<div class="nav-end">
				<p class="text-xs px-3 opacity-70">Designed and developed in CMR with 💻 & 🎧</p>
			</div>
		</div>
	{/if}
	
</div>

<style lang="postcss">
	.navbar-wrapper {
		@apply fixed top-8 flex flex-col   items-end gap-y-4  right-4;
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
		@apply bg-gray-300 text-muted-foreground bg-opacity-10;
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
