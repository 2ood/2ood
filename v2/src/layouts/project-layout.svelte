<script>
    import "./layout.css";
    import DateProvider from "../utilities/DateProvider.js";
	export let title
	export let date
	export let summary
    import MdArrowBack from 'svelte-icons/md/MdArrowBack.svelte'

    const publish_date = new DateProvider(date);
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<div id="md-container">
    <button id="back-button" onclick={() => history.back()}>
        <MdArrowBack />
    </button>
    <article>
        <h1>{title}</h1>
        <date>{publish_date.toReadableDate()}</date>
        <summary>{summary}</summary>
        <slot />
    </article>
</div>

<style>
    #md-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width : 100%;
    }

    summary {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--color-gray-primary);
    }
</style>
