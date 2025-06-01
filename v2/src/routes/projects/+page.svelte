<script>
    import ProjectListChip from "../../components/ProjectListChip.svelte";
    import { projects } from "../../assets/projects.json";
    import BackButton from "../../components/BackButton.svelte";
  </script>
  
  <main>
    <BackButton />
  
    <section class="page-section center">
      <h1>All Projects</h1>
  
      <div class="project-section">
        <h2>Official Projects</h2>
        <div class="grid">
          {#each projects.official as project}
            <ProjectListChip project={project} />
          {/each}
        </div>
      </div>
  
      <div class="project-section">
        <h2>Personal Projects</h2>
        <div class="grid">
          {#each projects.personal as project}
            <ProjectListChip project={project} />
          {/each}
        </div>
      </div>
  
      <div class="project-section">
        <h2>Toy Projects</h2>
        <div class="grid">
          {#each projects.toy as project}
            <ProjectListChip project={project} />
          {/each}
        </div>
      </div>
    </section>
  </main>
  
  <style>
    main {
        display: block;
        padding: 4rem 1rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    section {
        display: block;
        width: 100%;
        padding: 2rem 0;
        margin-bottom: 3rem;
    }
  
    .page-section.center {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
    }
  
    .project-section {
      width: 100%;
    }
  
    .project-section h2 {
      text-align: left;
      margin-bottom: 1rem;
      color: var(--color-blue-primary);
    }
  
    .grid {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 1rem;
        width: 100%;
        }
  
    @media (max-width: 768px) {
      .page-section.center {
        padding: 1rem;
        gap: 3rem;
      }
  
      .project-section h2 {
        font-size: var(--font-size-h4);
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
        width: 100%;
        }
    }

    @media (prefers-color-scheme: dark) {
        .project-section h2 {
        color : var(--color-text);
        }
    }

    
  </style>
  