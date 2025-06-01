<script lang="ts">
    import ProjectListChip from "../components/ProjectListChip.svelte";
    import {projects} from "../assets/projects.json";
    import {careers} from "../assets/careers.json";
    import Career from "../components/Career.svelte";
    import { reveal } from 'svelte-reveal';
    import Button from "../components/Button.svelte";
    import ListChip from "../components/ListChip.svelte";
    import Icon from "@iconify/svelte";
    import ScrollDownIndicator from "../components/ScrollDownIndicator.svelte";
</script>

<main>
    <div class="page-wrapper">
    <section class="center">
        <h1>Hello!</h1>
        <p> I am 2ood. It is pronounced [ee-wood].</p>    
    </section>
    <section class="center sr__hide">
        <div class="header">
            <h1>I am a WEB developer</h1>
            <p> I generally use React, Svelte, sometimes vanilla JS and Next.js.</p>
        </div>
        <div class="columngroup">
            <div class="column left">
                <h3>Official</h3>
                <ProjectListChip project={projects.official[0]} />
                <ProjectListChip project={projects.official[1]} />
            </div>
            <div class="column middle">
                <h3>Personal</h3>
                <ProjectListChip project={projects.personal[0]} />
                <ProjectListChip project={projects.personal[1]} />
            </div>
            <div class="column right">
                <h3>Toy Project</h3>
                <ProjectListChip project={projects.toy[0]} />
                <ProjectListChip project={projects.toy[1]} />
            </div>
        </div>
        <a href="/projects/"><h5>and more..</h5></a>
    </section>
    <section class="center">
        <h1> My Career </h1>
        <div class="career-list">
            {#each careers.internship as career}
                <Career career={career} />
            {/each}
        </div>
    </section>


    <section class="center" id="writing-medium">
        <h1> I write things down</h1>
        <div class="columngroup">
            <div class="column left">
                <ListChip>
                    <h3>Knowledge Base</h3>
                    <summary>I write things down to share my knowledge.</summary>
                    <Button onclick={() => window.open("https://2ood.gitbook.io/2ood-knowledge-base", "_blank")} algin_self="flex-end">Visit</Button>
                </ListChip>
            </div>
            <div class="column middle">
                <ListChip>
                    <h3>Personal Blog</h3>
                    <summary>I write essays on philosophic questions.</summary>
                    <Button onclick={() => window.open("https://2ood-blog.vercel.app/", "_blank")} algin_self="flex-end">Visit</Button>
                </ListChip>
            </div>
            <div class="column right">
                <ListChip>
                    <h3>Thought letters</h3>
                    <summary>I publish short thoughts as email letter.</summary>
                    <Button onclick={() => window.open("https://maily.so/2oodly", "_blank")} algin_self="flex-end">Visit</Button>
                </ListChip>
            </div>
        </div>
    </section>
    <section class="right-bottom" use:reveal>
        <h1>Contact me</h1>
        <p>kyungmin.official0@gmail.com</p>
        <span id="contact-icons">
            <a href="mailto:kyungmin.official0@gmail.com" target="_blank"><Icon icon="fluent-color:mail-48" height="50px"/></a>
            <a href="https://github.com/2ood" target="_blank"><Icon icon="skill-icons:github-dark" height="50px"/></a>
            <a href="https://www.linkedin.com/in/2ood/" target="_blank"><Icon icon="devicon:linkedin" height="50px"/></a>
            <a href="https://www.instagram.com/2ood_pics/" target="_blank"><Icon icon="skill-icons:instagram" height="50px"/></a>
        </span>
    </section>
    <ScrollDownIndicator />
    </div>
</main>

