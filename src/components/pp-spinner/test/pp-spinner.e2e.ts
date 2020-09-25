import { newE2EPage } from '@stencil/core/testing';

describe('pp-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-spinner></pp-spinner>');

    const element = await page.find('pp-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
