module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx",
        ],
        root: ["./src"],
      },
    ],
    "jest-hoist",
  ],
  env: {
    // production: {
    //   plugins: ["transform-remove-console"],
    // },
  },
};
