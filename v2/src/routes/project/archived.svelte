<script>
    import { reveal } from 'svelte-reveal';
    import ProjectListChip from "../../components/ProjectListChip.svelte";
    import {projects} from "../../assets/projects.json";
    import BackButton from "../../components/BackButton.svelte";
</script>

<main>
    <BackButton />
    <section class="center" use:reveal>
        <h1> Archived Projects</h1>
        <grid>
                {#each projects.archived as project}
                <ProjectListChip project={project} />
                {/each}
        </grid>
    </section>
</main>

<style>
    grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
</style>


