import { preprocessThrelte } from "@threlte/preprocess";
import sveltePreprocess from "svelte-preprocess";
import seqPreprocessor from "svelte-sequential-preprocessor";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // https://threlte.xyz/getting-started#configuration
  // for more information about preprocessors
  preprocess: seqPreprocessor([
    sveltePreprocess({
      postcss: true,
    }),
    preprocessThrelte(),
  ]),
  ssr: {
    noExternal: ["three", "troika-three-text"],
  },
};
