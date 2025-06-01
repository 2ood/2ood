<script>
    export let career;
</script>

<div class="career">
    <div class="career-header">
        <p>{career.date}</p>
        {#if career.href}
            <a href={career.href} target="_blank"><h4>{career.name}</h4></a>
        {:else}
            <h4>{career.name}</h4>
        {/if}
    </div>
    
    <summary>{career.summary}</summary>
</div>

<style>
    .career {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: .3rem;
        margin-bottom: 2rem;
        border-left: 5px solid var(--color-blue-shading);
        padding-left : 20px;
    }

    .career-header {
        display: inline-flex;
        width :100%;
        flex-direction: column;
        gap : 0;
        justify-content: space-between;
    }

    .career-header h4 {
        margin : 0;
    }

    a:hover {
        text-decoration: underline;
    }

    summary {
        color : var(--color-blue-shading);
    }


</style>
