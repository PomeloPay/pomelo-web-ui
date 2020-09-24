import { newE2EPage } from '@stencil/core/testing';

describe('pp-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-toast></pp-toast>');

    const element = await page.find('pp-toast');
    expect(element).toHaveClass('hydrated');
  });
});
