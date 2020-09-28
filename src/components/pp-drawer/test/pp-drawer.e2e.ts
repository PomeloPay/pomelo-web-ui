import { newE2EPage } from '@stencil/core/testing';

describe('pp-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-drawer></pp-drawer>');

    const element = await page.find('pp-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
