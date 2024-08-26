<script>
    import Card from "../components/Card.svelte";
    import {projects} from "../assets/projects.json";
</script>

<main>
    <section class="center">
        <h1>Hello!</h1>
        <p> I am 2ood. It is pronounced [ee-wood].</p>    
    </section>

    <section>
        <h1>I am a Web programmer</h1>
        <columngroup>
            <column class="left">
                {#each projects as project}
                    <h3>{project.name}</h3>
                    <summary>{project.summary}</summary>
                    <p>{project.timestamp}</p>
                    <a href={project.href}>see more</a>
                {/each}
            </column>
            <column class="right">
                Heo
            </column>
        </columngroup>
    </section>
</main>


