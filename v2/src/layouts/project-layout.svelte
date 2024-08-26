<script>
    import "./layout.css";
    import DateProvider from "../utilities/DateProvider.js";
	export let title
	export let date
	export let summary

    const publish_date = new DateProvider(date);
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<div id="md-container">
    <article>
        <h1>{title}</h1>
        <date>{publish_date.toReadableDate()}</date>
        <summary>{summary}</summary>
        <slot />
    </article>
</div>
