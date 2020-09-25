import { newSpecPage } from '@stencil/core/testing';
import { PpToggle } from '../pp-toggle';

describe('pp-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpToggle],
      html: `<pp-toggle></pp-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-toggle>
    `);
  });
});
