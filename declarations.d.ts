import * as _React from 'react';
import * as _ReactDOM from 'react-dom';

declare global {
    module '*.less';
    module '*.css';

    const React: typeof _React;
    const ReactDOM: typeof _ReactDOM;
}
