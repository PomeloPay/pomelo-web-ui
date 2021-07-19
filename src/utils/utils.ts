export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}


export function isMobile() {
  return /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export function extractNumber(value) {
  // eslint-disable-next-line no-useless-escape
  return Number(String(value).replace(/[^\d\.]*/g, ''))
}
