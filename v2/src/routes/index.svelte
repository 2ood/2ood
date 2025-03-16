<script>
    import ProjectListChip from "../components/ProjectListChip.svelte";
    import {projects} from "../assets/projects.json";
    import {careers} from "../assets/careers.json";
    import Career from "../components/Career.svelte";
    import { reveal } from 'svelte-reveal';
    import Button from "../components/Button.svelte";
    import ListChip from "../components/ListChip.svelte";
    import Icon from "@iconify/svelte";
    import TechIcon from "../components/TechIcon.svelte";
</script>

<main>
    <section class="center">
        <h1>Hello!</h1>
        <p> I am 2ood. It is pronounced [ee-wood].</p>    
    </section>
    <section class="center" use:reveal>
        <div class="header">
            <h1>I am a FE developer</h1>
            <p> I generally use React, Svelte, sometimes vanilla JS.</p>
        </div>
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
                <a href="/project/archived">and more..</a>
            </column>
        </columngroup>
    </section>
    <section class="center">
        <h1> My Career </h1>
        <div class="career-list">
            {#each careers.internship as career}
                <Career career={career} />
            {/each}
        </div>
    </section>


    <section class="center" use:reveal>
        <h1> I write things down</h1>
        <columngroup>
            <column>
                <ListChip>
                    <h3>Knowledge Base</h3>
                    <summary>I write things down to share my knowledge.</summary>
                    <Button onclick={() => window.open("https://2ood.gitbook.io/2ood-knowledge-base", "_blank")} algin_self="flex-end">Visit</Button>
                </ListChip>
            </column>
            <column>
                <ListChip>
                    <h3>Tistory Blog</h3>
                    <summary>I write essays on philosophic questions.</summary>
                    <Button onclick={() => window.open("https://2ood.tistory.com/", "_blank")} algin_self="flex-end">Visit</Button>
                </ListChip>
            </column>
        </columngroup>
    </section>
    <section class="right-bottom" use:reveal>
        <h1>Contact me</h1>
        <p>kyungmin.official0@gmail.com</p>
        <span id="contact-icons">
            <a href="mailto:kyungmin.official0@gmail.com" target="_blank"><Icon icon="fluent-color:mail-48" height="50px"/></a>
            <a href="https://github.com/2ood" target="_blank"><Icon icon="devicon:github" height="50px"/></a>
            <a href="https://www.linkedin.com/in/2ood/" target="_blank"><Icon icon="devicon:linkedin" height="50px"/></a>
            <a href="https://www.instagram.com/2ood_pics/" target="_blank"><Icon icon="skill-icons:instagram" height="50px"/></a>
        </span>
    </section>
</main>


