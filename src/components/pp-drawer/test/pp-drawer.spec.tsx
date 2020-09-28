import { newSpecPage } from '@stencil/core/testing';
import { PpDrawer } from '../pp-drawer';

describe('pp-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpDrawer],
      html: `<pp-drawer></pp-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-drawer>
    `);
  });
});
