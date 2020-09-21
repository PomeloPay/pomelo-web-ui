import { newE2EPage } from '@stencil/core/testing';

describe('pp-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-button></pp-button>');

    const element = await page.find('pp-button');
    expect(element).toHaveClass('hydrated');
  });
});
