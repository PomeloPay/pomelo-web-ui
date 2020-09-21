import { newSpecPage } from '@stencil/core/testing';
import { PpBadge } from '../pp-badge';

describe('pp-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpBadge],
      html: `<pp-badge></pp-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-badge>
    `);
  });
});
