import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// dev-p8nmluu1wknhhzy0.us.auth0.com

// eWXczYtlwSG2VHYUGrTioEtxjiYieXen
root.render(
    <Auth0Provider
        domain="dev-p8nmluu1wknhhzy0.us.auth0.com"
        clientId="eWXczYtlwSG2VHYUGrTioEtxjiYieXen"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
        cacheLocation='localstorage'
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>

);
