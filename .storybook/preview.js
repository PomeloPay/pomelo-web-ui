
const port = 3333

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  server: {
    url: `http://localhost:${port}/storybook_preview`,
  },
}
