import { newSpecPage } from '@stencil/core/testing';
import { PpButton } from '../pp-button';

describe('pp-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpButton],
      html: `<pp-button></pp-button>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-button>
    `);
  });
});
