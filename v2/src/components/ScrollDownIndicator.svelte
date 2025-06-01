<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let y = 0;
	let outerHeight = 0;
	let arrowContainer: HTMLElement | null = null;
	let timeout: ReturnType<typeof setTimeout> | null = null;

	onMount(() => {
		const doc = document.documentElement;

		timeout = setTimeout(() => {
			arrowContainer?.classList.remove('end');
		}, 3000);

		const handleScroll = () => {
			arrowContainer?.classList.add('end');
			y = window.scrollY;
			outerHeight = window.innerHeight;
		};

		const handleScrollEnd = () => {
			if (!arrowContainer) return;

			if (y + outerHeight >= doc.scrollHeight) {
				arrowContainer.classList.add('end');
			} else {
				if (timeout) clearTimeout(timeout);
				timeout = setTimeout(() => {
					arrowContainer?.classList.remove('end');
				}, 4000);
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('scrollend', handleScrollEnd);

		onDestroy(() => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('scrollend', handleScrollEnd);
			if (timeout) clearTimeout(timeout);
		});
	});
</script>


<div class="arrow-container end" bind:this={arrowContainer}>
    <div class="arrow"></div>
</div>

<svelte:window bind:scrollY={y} bind:outerHeight={outerHeight}/>

<style>
.arrow {
    position: fixed;
    bottom: 200px;
    right: 100px;
    height: 40px;
    width: 6px;
    background: var(--color-blue-primary);
    animation: animate 6s infinite;
}
.arrow:before
{
    content: '';
    position: absolute;
    bottom: 0;
    left: -10px;
    width: 20px;
    height: 20px;
    border-bottom: 6px solid var(--color-blue-primary);
    border-right: 6px solid var(--color-blue-primary);
    transform: rotate(45deg);
}

@keyframes animate
{
    0% {
        transform: translateY(0);
        opacity: 0.5;
    }
    25% {
        transform: translateY(80px);
        opacity: 1;
    }
    50% {
        transform: translateY(160px);
        opacity: 0;
    }
    100% {
        transform: translateY(160px);
        opacity: 0;
    }
}

:global(.end .arrow){
    display :none;
}

@media (prefers-color-scheme: dark) {
    .arrow {
        background: var(--color-text);
    }
    .arrow:before {
        border-bottom: 6px solid var(--color-text);
        border-right: 6px solid var(--color-text);
    }
}
</style>