<script>
    import { onMount } from "svelte";
    let y = 0;
    let outerHeight = 0;
    let arrowContainer = null;
    let timeout = null;


    onMount(() => {
        const doc = document.documentElement;
        timeout =setTimeout(() => {
            arrowContainer.classList.remove("end");
        }, 3000);
        
        window.addEventListener("scroll", () => {
            arrowContainer.classList.add("end");
        });

        window.addEventListener("scrollend", () => {
            if(arrowContainer!=null) {
            if (y + outerHeight >= doc.scrollHeight) {
                arrowContainer.classList.add("end");
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    arrowContainer.classList.remove("end");
                }, 4000);
                }
            }
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
    animation: animate 3s infinite;
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
    50% {
        transform: translateY(80px);
        opacity: 1;
    }
    100% {
        transform: translateY(160px);
        opacity: 0;
    }
}

:global(.end .arrow){
    display :none;
}
</style>