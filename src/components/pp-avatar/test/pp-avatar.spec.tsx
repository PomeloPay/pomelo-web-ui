import { newSpecPage } from '@stencil/core/testing';
import { PpAvatar } from '../pp-avatar';

describe('pp-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PpAvatar],
      html: `<pp-avatar></pp-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <pp-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pp-avatar>
    `);
  });
});
