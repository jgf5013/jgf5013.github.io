<script lang="ts">

  type Project = {
    title: string;
    description: string;
    imgSrc: string;
    link: string;
    date?: number;
  };
  const projects: Project[] = [{
    title: "Virus Simulation",
    description: "Why do I need to stay inside??",
    imgSrc: "images/virus.svg",
    link: "https://jgf5013.github.io/virus-visualization/",
    date: 1625104380000,
  }, {
    title: "WASM Virus Simulation",
    description: "A collaborative project",
    imgSrc: "images/wasm.svg",
    link: "https://jgf5013.github.io/r-virus/"
  }, {
    title: "Planet Mapper",
    description: "Space tells matter how to move; matter tells space how to curve",
    imgSrc: "images/planet-mapper.svg",
    link: "https://jgf5013.github.io/planet-mapper/",
  }, {
    title: "Staff Tools",
    description: "Hey John, I'm seeing something weird...",
    imgSrc: "images/staff.svg",
    link: "https://jgf5013.github.io/angular-mono-repo/"
  }, {
    title: "Request",
    description: "Check out my resume. Send me an email If you're interested in connecting or would like to see me build something interesting!",
    imgSrc: "images/add.svg",
    link: "https://drive.google.com/file/d/1Xpm5a1sKcmG2HNjvBtWTSddkmdaz-QkX/view?usp=sharing"
  }];

  const name = "John Fisher";
</script>
<main class="app">
  <h1 class="app-header typography">
    {name.toUpperCase()}
  </h1>
  <div id="projectsContainer">
    {#each projects as project}
      <div tabindex="0" role="button" class={["card", project.title === 'Request' && 'add']} on:keyup={(e) => e.key === 'Enter' && window.open(project.link)} on:click={() => window.open(project.link)}>
        <div class="card-wrapper">
          <div class="img-container">
            <img alt="" src="{project.imgSrc}" title="{project.title}" />
          </div>
          <div>
            <h5>
              {project.title}
            </h5>
            <p class="typography">{project.description}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>

  .app {
      text-align: center;
      height: 100%;
  }

  .app-header {
      height: 10%;
  }

  #projectsContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      min-width: 250px;
      height: 90%;
  }

  .card-wrapper {
      margin: 1rem;
  }

  img {
      max-width: 40%;
  }

  .card {
      min-width: 150px;
      margin: 0.5rem;
      cursor: pointer;
      border-radius: 5px;
      flex: 1 1;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  @media (prefers-color-scheme: dark) {
      .card {
          box-shadow: none;
          background-color: var(--theme-dark-background-secondary);
      }
  }

  .typography {
      font-family: fantasy;
  }

  p.typography {
      font-size: smaller;
  }

  .add {
      border-style: dotted;
      border-width: 2px;
  }
</style>