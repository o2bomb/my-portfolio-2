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
        description: "description",
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
        description: "description",
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
        description: "description",
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
