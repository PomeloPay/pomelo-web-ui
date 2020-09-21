import { newE2EPage } from '@stencil/core/testing';

describe('pp-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-tabs></pp-tabs>');

    const element = await page.find('pp-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
