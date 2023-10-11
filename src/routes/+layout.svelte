<script lang='ts'>
  import "../app.postcss";
  import "@fontsource-variable/raleway";
  import "@fontsource/kanit";
  import "@fontsource/martian-mono";
  import "@fontsource-variable/open-sans";
  import { Toaster } from "svelte-french-toast";
    import { ProgressBar } from '@prgm/sveltekit-progress-bar'
    import NavBar from '$lib/components/custom/navbar.svelte'
</script>
<ProgressBar class="text-green-500" />
<Toaster />
<NavBar/>
<slot />
