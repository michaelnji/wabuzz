<script>
	export let borderColor = '!border-gray-700 dark:!border-gray-400';
	export let size = `w-[24px] h-[24px]`;
</script>

<span class={`loader ${borderColor} ${size}`} />

<style>
	.loader {
		border: 3.5px dotted;
		border-radius: 50%;
		display: inline-block;
		position: relative;
		box-sizing: border-box;
		animation: rotation 0.7s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
