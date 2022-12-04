import adapter from "@sveltejs/adapter-auto";
import { preprocessThrelte } from "@threlte/preprocess";
import sveltePreprocess from "svelte-preprocess";
import seqPreprocessor from "svelte-sequential-preprocessor";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: seqPreprocessor([sveltePreprocess(), preprocessThrelte()]),
    ssr: {
        noExternal: ["three", "troika-three-text"],
    },
    kit: {
        adapter: adapter(),
    },
};

export default config;
