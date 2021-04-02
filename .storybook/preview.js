
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
const port = 3333
// import "tailwindcss/tailwind.css"
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  server: {
    url: `http://localhost:${port}/storybook_preview`,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
}
