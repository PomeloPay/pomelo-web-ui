import { newSpecPage } from '@stencil/core/testing';
import { PpToast } from '../pp-toast';

describe('pp-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpToast],
      html: `<pp-toast></pp-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-toast>
    `);
  });
});
