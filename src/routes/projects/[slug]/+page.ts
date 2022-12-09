import type { PageLoad } from "./$types";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load: PageLoad = ({ params }) => {
    return {
        project: PROJECT_DATA[params.slug],
    };
};

interface Project {
    id: string;
    title: string;
    description: string;
    gallery:
        | {
              src: string;
              alt?: string;
              is_video?: false;
          }[]
        | {
              src: string;
              alt?: never;
              is_video: true;
          }[];
    prev?: string;
    next?: string;
}

type ProjectData = {
    [id: string]: Project;
};

export const PROJECT_DATA: ProjectData = {
    xsyn: {
        id: "xsyn",
        title: "XSYN",
        description: `
        <ul>
        <li>Built the 3D backdrop of this site. The backdrop can be interacted with and showcases all current and planned future projects belonging to the XSYN universe, each game represented by a planet</li>
        <li>Technologies used: React, TypeScript, Next.js, Three.js</li>
        </ul>
        `,
        gallery: [
            {
                src: "/my work/xsyn/1.png",
            },
        ],
        next: "supremacy",
    },
    supremacy: {
        id: "supremacy",
        title: "Supremacy: Battle Arena",
        description: `
        <ul>
        <li>Supremacy: Battle Arena is a rolling 24/7 livestream of gigantic mechs fighting in an endless battle royale, supported by their owners and assisted by the spectators via the web-app</li>
        <li>Updates from the Battle Arena are sent to the React app in real-time via multiple WebSocket connections</li>
        <li>Built user interface and server-side functionality for various core features such as the dutch auction player abilities system, player inbox, and player-owned mech loadouts</li>
        <li>Designed and built user interface for the battle lobbies page</li>
        <li>Technologies used: React, TypeScript, MUI, WebSockets, RESTful API, Go, Postgres, Docker</li>
        </ul>
        `,
        gallery: [
            {
                src: "/my work/supremacy/1.png",
            },
        ],
        prev: "xsyn",
        next: "weareninja",
    },
    weareninja: {
        id: "weareninja",
        title: "We Are Ninja",
        description: `
        <ul>
        <li>Designed and built the 3D backdrop of this site</li>
        <li>Built the "Team" section. It dynamically pulls data from Prismic, a headless CMS</li>
        <li>Technologies used: React, TypeScript, Next.js, Three.js, Prismic (headless CMS)</li>
        </ul>
        `,
        gallery: [
            {
                src: "/my work/weareninja/1.png",
            },
        ],
        prev: "supremacy",
        next: "art",
    },
    art: {
        id: "art",
        title: "Art Showcase 2020",
        description: "description",
        gallery: [
            {
                src: "/my work/art/1.png",
            },
        ],
        prev: "weareninja",
    },
};
