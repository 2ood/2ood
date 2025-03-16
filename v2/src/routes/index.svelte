<script>
    import ProjectListChip from "../components/ProjectListChip.svelte";
    import {projects} from "../assets/projects.json";
    import { reveal } from 'svelte-reveal';

</script>

<main>
    <section class="center">
        <h1>Hello!</h1>
        <p> I am 2ood. It is pronounced [ee-wood].</p>    
    </section>
    <section class="center" use:reveal>
        <h1>I am a FE developer</h1>
        <columngroup>
            <column class="left">
                <h3>Team</h3>
                {#each projects.official as project}
                <ProjectListChip project={project} />
                {/each}
            </column>
            <column class="middle">
                <h3>Personal</h3>
                {#each projects.personal as project}
                <ProjectListChip project={project} />
                {/each}
            </column>
            <column class="right">
                <h3>Toy Project</h3>
                {#each projects.toy as project}
                <ProjectListChip project={project} />
                {/each}
            </column>
        </columngroup>
    </section>
</main>


