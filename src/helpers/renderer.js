import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import Routes from '../client/Routes';
import { Provider } from 'react-redux';

export default (req, store) => {
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>);

    const html = `
        <html>
         <head></head>
         <body>
            <div id="root">${content}</div>
            <script>
                window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="bundle.js" defer></script>
         </body>
        </html>
    `
    return html;
}