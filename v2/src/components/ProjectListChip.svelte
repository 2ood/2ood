<script>
    export let project;
    import Button from "./Button.svelte";
    import Tag from "./Tag.svelte";
    import TechIcon from "./TechIcon.svelte";
    import ListChip from "./ListChip.svelte";
</script>

<ListChip>
    <div class="header">
        <h4>{project.name}</h4>
        <p>{project.timestamp}</p>
    </div>
    <summary>{project.summary}</summary>
    <div class="tags">
        {#each project.tags as tag}
        <Tag label={tag} />
        {/each}
    </div>
    <div class="techs">
        {#each project.techs as tech}
            <TechIcon tech={tech} />
        {/each}
    </div>
    <div class="button-container">
        {#if project.demo}
        <a href={project.demo} target="_blank"><Button algin_self="flex-end">demo</Button></a>
        {/if}
        {#if project.repo}
        <a href={project.repo} target="_blank"><Button algin_self="flex-end">repo</Button></a>
        {/if}
        {#if project.docs}
        <a href={project.docs} target="_blank"><Button algin_self="flex-end">docs</Button></a>
        {/if}
        {#if project.paper}
        <a href={project.paper} target="_blank"><Button algin_self="flex-end">paper</Button></a>
        {/if}
        {#if project.website}
        <a href={project.website} target="_blank"><Button algin_self="flex-end">website</Button></a>
        {/if}
        {#if project.dataset}
        <a href={project.dataset} target="_blank"><Button algin_self="flex-end">dataset</Button></a>
        {/if}
    </div>
</ListChip>


<style>
    div.header {
        display : inline-flex;
        justify-content: space-between;
        flex-direction: column;
    }

    div.header > p {
        font-size: 12px;
        color: var(--color-gray-primary);
        align-self: flex-end;
    }

    div.tags {
        display : inline-flex;
        flex-direction: row;
        gap : 5px;
        }

    div.button-container {
        display : inline-flex;
        flex-direction: row;
        justify-content: flex-end;
        gap : 5px;
    }

    div.techs {
        display : inline-flex;
        flex-direction: row;
        gap : 5px;
    }
    @media (prefers-color-scheme: dark) {
        div.header h4 {
            color : var(--color-background);
        }
    }
</style>