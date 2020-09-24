import { newE2EPage } from '@stencil/core/testing';

describe('pp-popper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-popper></pp-popper>');

    const element = await page.find('pp-popper');
    expect(element).toHaveClass('hydrated');
  });
});
