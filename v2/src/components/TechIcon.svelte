<script>
    import Icon from "@iconify/svelte";

    export let tech;

</script>

<techs>
    {#if tech === "js"}
        <Icon icon="devicon:javascript" />
    {:else if tech === "python"}
        <Icon icon="devicon:python" />
    {:else if tech === "react"}
        <Icon icon="devicon:react" />
    {:else if tech === "svelte"}
        <Icon icon="devicon:svelte" />
    {:else if tech === "express"}
        <Icon icon="devicon:express" />
    {:else if tech === "django"}
        <Icon icon="devicon:django" />
    {:else if tech === "flask"}
        <Icon icon="devicon:flask" />
    {:else if tech === "gcp"}
        <Icon icon="devicon:googlecloud" />
    {:else if tech === "mysql"}
        <Icon icon="devicon:mysql" />
    {:else if tech === "mongodb"}
        <Icon icon="devicon:mongodb" />
    {:else if tech === "git"}
        <Icon icon="devicon:git" />
    {:else if tech === "github"}
        <Icon icon="devicon:github" />
    {:else if tech === "flutter"}
        <Icon icon="devicon:flutter" />
    {:else if tech === "dart"}
        <Icon icon="devicon:dart" />
    {:else if tech === "java"}
        <Icon icon="devicon:java" />
    {:else if tech === "php"}
        <Icon icon="devicon:php" />
    {:else if tech === "netlify"}
        <Icon icon="devicon:netlify" />   
    {:else if tech === "vercel"}
        <Icon icon="devicon:vercel" />
    {/if}   
</techs>

<style>
    techs {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>