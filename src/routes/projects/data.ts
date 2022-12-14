interface Project {
    id: string;
    title: string;
    company?: string;
    description: string;
    thumbnail?: string;
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
        company: "Ninja Syndicate",
        description: `
        <ul>
        <li>Built the 3D backdrop of this site. The backdrop can be interacted with and showcases all current and planned future projects belonging to the XSYN universe, each game represented by a planet</li>
        </ul>
        <i>Technologies used: React, TypeScript, Next.js, Three.js</i>
        `,
        thumbnail: "/my work/xsyn/xsyn1.webp",
        gallery: [
            {
                src: "/my work/xsyn/xsyn1.webp",
            },
        ],
        next: "supremacy",
    },
    supremacy: {
        id: "supremacy",
        title: "Supremacy: Battle Arena",
        company: "Ninja Syndicate",
        description: `
        <ul>
        <li>Supremacy: Battle Arena is a rolling 24/7 livestream of gigantic mechs fighting in an endless battle royale, supported by their owners and assisted by the spectators via the web-app</li>
        <li>Updates from the Battle Arena are sent to the React app in real-time via multiple WebSocket connections</li>
        <li>Built user interface and server-side functionality for various core features such as the dutch auction player abilities system, player inbox, and player-owned mech loadouts</li>
        </ul>
        <i>Technologies used: React, TypeScript, MUI, WebSockets, RESTful API, Go, Postgres, Docker</i>
        `,
        thumbnail: "/my work/supremacy/supremacy1.webp",
        gallery: [
            {
                src: "/my work/supremacy/supremacy1.webp",
            },
        ],
        prev: "xsyn",
        next: "weareninja",
    },
    weareninja: {
        id: "weareninja",
        title: "We Are Ninja",
        company: "Ninja Syndicate",
        description: `
        <ul>
        <li>Designed and built the 3D backdrop of this site</li>
        <li>Built the "Team" section. It dynamically pulls data from Prismic, a headless CMS</li>
        </ul>
        <i>Technologies used: React, TypeScript, Next.js, Three.js, Prismic (headless CMS)</i>
        `,
        thumbnail: "/my work/weareninja/weareninja1.webp",
        gallery: [
            {
                src: "/my work/weareninja/weareninja1.webp",
            },
        ],
        prev: "supremacy",
        next: "art",
    },
    art: {
        id: "art",
        title: "Art Showcase 2020",
        description: `
        <p>A website that I built to showcase all of my favourite art pieces from 2020. I experimented with mouse hover effects and custom cursor effects. The website also features fully animated page transitions, which I built from scratch (no external libraries used).</p>
        <i>Technologies used: HTML, CSS, TypeScript</i>
        `,
        thumbnail: "/my work/art/art1.webp",
        gallery: [
            {
                src: "/my work/art/art1.webp",
            },
        ],
        prev: "weareninja",
    },
};
