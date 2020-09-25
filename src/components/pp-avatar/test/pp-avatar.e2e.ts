import { newE2EPage } from '@stencil/core/testing';

describe('pp-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-avatar></pp-avatar>');

    const element = await page.find('pp-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
