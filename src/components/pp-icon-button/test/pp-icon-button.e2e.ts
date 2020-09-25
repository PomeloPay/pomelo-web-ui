import { newE2EPage } from '@stencil/core/testing';

describe('pp-icon-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-icon-button></pp-icon-button>');

    const element = await page.find('pp-icon-button');
    expect(element).toHaveClass('hydrated');
  });
});
