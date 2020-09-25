import { newSpecPage } from '@stencil/core/testing';
import { PpIconButton } from '../pp-icon-button';

describe('pp-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpIconButton],
      html: `<pp-icon-button></pp-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-icon-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-icon-button>
    `);
  });
});
