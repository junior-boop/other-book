import viteMarkdown from "vite-plugin-markdown";

export default {
  plugins: [
    viteMarkdown({
        markdownIt: {
          extensions: [".md", ".markdown"],
        },
      }),
  ],

  assetsInclude : ['.md']
};