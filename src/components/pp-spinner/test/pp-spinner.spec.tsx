import { newSpecPage } from '@stencil/core/testing';
import { PpSpinner } from '../pp-spinner';

describe('pp-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpSpinner],
      html: `<pp-spinner></pp-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-spinner>
    `);
  });
});
