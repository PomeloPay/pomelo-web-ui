import { newE2EPage } from '@stencil/core/testing';

describe('pp-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-alert></pp-alert>');

    const element = await page.find('pp-alert');
    expect(element).toHaveClass('hydrated');
  });
});
