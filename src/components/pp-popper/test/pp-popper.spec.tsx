import { newSpecPage } from '@stencil/core/testing';
import { PpPopper } from '../pp-popper';

describe('pp-popper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpPopper],
      html: `<pp-popper></pp-popper>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-popper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-popper>
    `);
  });
});
