import { newSpecPage } from '@stencil/core/testing';
import { PpCard } from '../pp-card';

describe('pp-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpCard],
      html: `<pp-card></pp-card>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-card>
    `);
  });
});
