import { newE2EPage } from '@stencil/core/testing';

describe('pp-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-toggle></pp-toggle>');

    const element = await page.find('pp-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
