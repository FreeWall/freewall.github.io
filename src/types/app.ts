import { AppContextProps } from '@/contexts/app';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

export type CustomPage<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement<P>) => ReactElement;
};

export type CustomAppProps<P = unknown> = AppProps<
  P & {
    appContextProps: AppContextProps;
  }
> & {
  Component: CustomPage<P>;
};
