import { newE2EPage } from '@stencil/core/testing';

describe('pp-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-modal></pp-modal>');

    const element = await page.find('pp-modal');
    expect(element).toHaveClass('hydrated');
  });
});
