import path from "path";
import subredditData from './src/assets/lexical_analysis.json'
import literatureData from './src/assets/literature_data.json'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    return [
      {
        path: "/",
        getData: () => ({
          subredditData,
          literatureData
        }
        )
      },
    ];
  },
  plugins: [
    "react-static-plugin-sass",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    "react-static-plugin-typescript",
  ],
};
