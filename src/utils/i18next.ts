import 'i18next';

import cs from '@/locales/cs/common.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof cs;
    };
  }
}
