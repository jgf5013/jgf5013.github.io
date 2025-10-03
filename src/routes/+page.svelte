<main class="app">
  <h1 class="app-header typography">
    JOHN FISHER
  </h1>
  <div id="projectsContainer">
    <div class="card" onclick="window.open('https:\/\/jgf5013.github.io/virus-visualization/');">
      <div class="card-wrapper">
        <div class="img-container">
          <img component="img" alt=""
            src="images/virus.svg"
            title="Virus" />
        </div>
        <div>
          <h5>
            Virus Simulation
          </h5>
          <p class="typography">Why do I need to stay inside??</p>
        </div>
      </div>
      <div>
        <p class="typography">4 years ago</p>
      </div>
    </div>
    <div class="card" onclick="window.open('https:\/\/jgf5013.github.io/virus-visualization/');">
      <div class="card-wrapper">
        <div class="img-container">
          <img component="img" alt=""
            src="images/wasm.svg"
            title="Virus" />
        </div>
        <div>
          <h5>
            WASM Virus Simulation
          </h5>
          <p class="typography">A collaborative project</p>
        </div>
      </div>
    </div>
    <div class="card" onclick="window.open('https:\/\/jgf5013.github.io/planet-mapper/');">
      <div class="card-wrapper" >
        <div class="img-container">
          <img component="img" alt=""
            src="images/planet-mapper.svg"
            title="Orbit" />
          <div>
            <h5>
              Planet Mapper
            </h5>
            <p class="typography">Space tells matter how to move; matter tells space how to curve</p>
            <p class="typography"><small>(lots of data... may take a second to load)</small></p>
          </div>
        </div>
      </div>
    </div>
    <div class="card" onclick="window.open('https:\/\/jgf5013.github.io/angular-mono-repo/');">
      <div class="card-wrapper">
        <div class="img-container">
          <img component="img" alt=""
            src="images/staff.svg"
            title="Staff" />
        </div>
        <div>
          <h5>
            Staff Tools
          </h5>
          <p class="typography">Hey John, I'm seeing something weird...</p>
        </div>
      </div>
    </div>
    <div class="card add" onclick="window.open('https:\/\/drive.google.com/file/d/1Xpm5a1sKcmG2HNjvBtWTSddkmdaz-QkX/view?usp=sharing');">
      <div class="card-wrapper">
        <div class="img-container">
          <img component="img" alt=""
            src="images/add.svg"
            title="Add" />
        </div>
        <div>
          <h5>
            Request
          </h5>
          <p class="typography">Check out my resume. Send me an email If you're interested in connecting or would like to see me build something interesting!</p>
        </div>
      </div>
    </div>
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