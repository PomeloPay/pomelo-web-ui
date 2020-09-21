import { newSpecPage } from '@stencil/core/testing';
import { PpTabs } from '../pp-tabs';

describe('pp-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpTabs],
      html: `<pp-tabs></pp-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-tabs>
    `);
  });
});
