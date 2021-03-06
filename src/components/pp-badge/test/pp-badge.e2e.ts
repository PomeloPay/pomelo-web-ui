import { newE2EPage } from '@stencil/core/testing';

describe('pp-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-badge></pp-badge>');

    const element = await page.find('pp-badge');
    expect(element).toHaveClass('hydrated');
  });
});
