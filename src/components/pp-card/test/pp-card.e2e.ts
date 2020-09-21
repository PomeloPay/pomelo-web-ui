import { newE2EPage } from '@stencil/core/testing';

describe('pp-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-card></pp-card>');

    const element = await page.find('pp-card');
    expect(element).toHaveClass('hydrated');
  });
});
