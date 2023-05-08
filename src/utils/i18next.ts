import 'i18next';

export type i18nextLocale = 'cs' | 'en';

import cs from '@/locales/cs/common.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof cs;
    };
  }
}
