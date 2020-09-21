import { newSpecPage } from '@stencil/core/testing';
import { PpAlert } from '../pp-alert';

describe('pp-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpAlert],
      html: `<pp-alert></pp-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-alert>
    `);
  });
});
