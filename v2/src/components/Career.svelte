<script>
    export let career;
</script>

<div class="career">
    <div class="career-header">
        <p>{career.date}</p>
        <h4>{career.name}</h4>
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
    summary {
        color : var(--color-blue-shading);
    }

</style>
