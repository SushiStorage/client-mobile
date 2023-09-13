module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: [
          [
            "module:react-native-dotenv",
            {
              envName: "APP_ENV",
              moduleName: "@env",
              path: ".env.production",
              safe: true,
              allowUndefined: true,
              verbose: false,
            },
          ],
        ],
      },
      development: {
        plugins: [
          [
            "module:react-native-dotenv",
            {
              envName: "APP_ENV",
              moduleName: "@env",
              path: ".env.development",
              safe: true,
              allowUndefined: true,
              verbose: false,
            },
          ],
        ],
      },
    },
    plugins: [
      ["react-native-reanimated/plugin"],
      [
        "babel-plugin-module-resolver",
        {
          alias: {
            "@sushi/view-models": "./src/client-core/src/viewModels/main.ts",
          },
        },
      ],
    ],
  };
};
