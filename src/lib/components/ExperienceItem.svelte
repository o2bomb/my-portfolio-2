<script lang="typescript">
</script>

<div class="c-ExperienceItem">
  <div>
    <div class="flex">
      <h3 class="company">Ninja Syndicate (formerly Ninja Software)</h3>
      <p class="date">Mar 2021 - <strong>Present</strong></p>
    </div>
    <p class="role">Fullstack Developer</p>
    <div class="project">
      <p class="project-title">
        <span>Assigned Project:</span>Supremacy: Battle Arena
      </p>
      <ul class="achievements">
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          quibusdam.
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, ea
          corporis delectus voluptatem nostrum non ad sit impedit aut earum.
        </li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </div>
  </div>
  <a>View Projects →</a>
</div>

<style>
  .c-ExperienceItem {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .c-ExperienceItem:not(:last-child) {
    border-bottom: 1px solid #d4d4d8;
  }

  .flex {
    display: flex;
    align-items: baseline;
  }

  .company {
    margin-bottom: 0.3rem;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .role {
    margin-bottom: 0.3rem;
    font: var(--font-worksans-semibold);
    font-size: 1rem;
    text-transform: uppercase;
  }

  .date {
    color: #52525b;
  }

  .project .project-title span {
    margin-right: 0.5rem;
    color: #52525b;
  }

  .achievements li {
    padding-left: 0.7rem;
    background-image: linear-gradient(to bottom, #18181b, #18181b);
    background-position: 2px 5px;
    background-size: 3px 1rem;
    background-repeat: no-repeat;
  }
</style>
