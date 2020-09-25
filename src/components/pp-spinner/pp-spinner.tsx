import { Component, h } from '@stencil/core';

@Component({
  tag: 'pp-spinner',
  styleUrl: 'pp-spinner.css',
  shadow: true,
})
export class PpSpinner {
  render() {
    return (
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65">
          <path
            fill="currentColor"
            d="M61.805 46.206l-4.352-2.513c5.457-12.437.796-27.253-11.24-34.202C33.299 2.035 16.786 6.46 9.33 19.374 1.874 32.288 6.3 48.8 19.213 56.256c10.18 5.878 22.599 4.372 31.052-2.856l4.55 2.626c-10.013 9.567-25.503 11.835-38.102 4.56C1.407 51.75-3.837 32.18 5 16.875 13.837 1.568 33.407-3.676 48.713 5.16c14.43 8.33 19.916 26.202 13.092 41.045z"
          />
        </svg>
      </section>
    );
  }
}
