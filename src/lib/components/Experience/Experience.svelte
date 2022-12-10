<script lang="ts">
    import { onMount } from "svelte";
    import ExperienceItem from "./ExperienceItem.svelte";

    let animateItems = false;
    onMount(() => {
        let observer = new IntersectionObserver(
            (entry) => {
                if (entry.length === 0) return;
                if (!entry[0].isIntersecting) return;
                animateItems = true;
            },
            {
                threshold: 0.2,
            },
        );

        const target = document.getElementById("experience");
        observer.observe(target);
    });
</script>

<section id="experience" class="c-Experience">
    <div class="header-container">
        <h2 class="oswald-medium" class:animate={animateItems}>Experience</h2>
    </div>
    <ExperienceItem
        animate={animateItems}
        company="Ninja Syndicate (formerly Ninja Software)"
        from="Mar 2021"
        role="Fullstack Web Developer"
        assignedProjects={[
            {
                name: "Supremacy: Battle Arena",
                achievements: [
                    "Supremacy: Battle Arena is a rolling 24/7 livestream of gigantic mechs fighting in an endless battle royale, supported by their owners and assisted by the spectators via the web-app",
                    "Updates from the Battle Arena are sent to the React app in real-time via multiple WebSocket connections",
                    "Built user interface and server-side functionality for various core features such as the dutch auction player abilities system, player inbox, and player-owned mech loadouts",
                    "Designed and built user interface for the battle lobbies page",
                    "Technologies used: React, TypeScript, MUI, WebSockets, RESTful API, Go, Postgres, Docker",
                ],
            },
            {
                name: "XSYN Landing Page",
                achievements: [
                    "Built the 3D backdrop of this site. The backdrop can be interacted with and showcases all current and planned future projects belonging to the XSYN universe, each game represented by a planet",
                    "Technologies used: React, TypeScript, Next.js, Three.js",
                ],
            },
            {
                name: "Ninja Syndicate — We are Ninja",
                achievements: [
                    "Designed and built the 3D backdrop of this site",
                    'Built the "Team" section. It dynamically pulls data from Prismic, a headless CMS',
                    "Technologies used: React, TypeScript, Next.js, Three.js, Prismic (headless CMS)",
                ],
            },
        ]}
    />
    <ExperienceItem
        animate={animateItems}
        company="Ninja Software"
        from="Jan. 2021"
        to="Mar. 2021"
        role="Intern Software Developer"
        assignedProjects={[
            {
                name: "Safe 2 Say",
                achievements: [
                    "Learned about and experienced working in a startup environment",
                    "Worked with the Ninja Software team to improve the UI/UX of a client’s website (Crime Stoppers, Safe 2 Say)",
                    "Improved UI and user experience of the Safe 2 Say website based on client feedback and design documents, along with SEO improvements.",
                    "The Safe 2 Say website pulls data from a headless CMS, Forestry",
                    "Technologies used: React, TypeScript, Next.js",
                ],
            },
        ]}
    />
    <ExperienceItem
        animate={animateItems}
        company="Headstart Careers"
        from="July. 2020"
        to="Aug. 2020"
        role="Intern Software Developer"
        assignedProjects={[
            {
                achievements: [
                    "Designed and built a live-chat prototype enabling users of the platform to communicate with each other in real-time. The live-chat component was powered using WebSockets",
                    "Learned about and applied knowledge on GraphQL and TypeORM to create API endpoints on the back end for front end components to pull data from",
                    "Learned about using source control (Git) and pushing code to a remote repository with multiple contributors",
                    "Technologies used: React, TypeScript, Node.js, WebSockets",
                ],
            },
        ]}
    />
    <ExperienceItem
        animate={animateItems}
        company="Deloitte Australia"
        from="Apr. 2019"
        to="Nov. 2019"
        role="Student Software Engineer"
        assignedProjects={[
            {
                achievements: [
                    "Implemented a dynamic web dashboard for a health and safety analytics platform, pulling data from a RESTful API and displaying it to the user",
                    "Worked in a development team using Agile (Scrum) methodology and Azure DevOps for tracking project progress",
                    "Technologies used: React, Mapbox API, chart.js, and React Material UI framework, with code hosted on Azure Repos",
                ],
            },
        ]}
    />
</section>

<style>
    .c-Experience {
        display: flex;
        flex-direction: column;
        background-color: #e4e4e7;
        color: #18181b;
    }

    .header-container {
        overflow-y: hidden;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
    }

    h2 {
        font: var(--font-oswald-medium);
        font-size: 3rem;
        text-transform: uppercase;
        padding: 2rem;
        padding-bottom: 0;
        transform: translateY(100%);
    }

    h2.animate {
        animation: slide-up 1s cubic-bezier(0.83, 0, 0.17, 1) forwards;
    }
    @keyframes slide-up {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
