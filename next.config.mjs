// import {ReflectAdapter as app} from "next/dist/server/web/spec-extension/adapters/reflect";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
//
// const { auth } = require('express-openid-connect');
//
// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: 'a long, randomly-generated string stored in env',
//     baseURL: 'http://localhost:3000',
//     clientID: 'ZC9BOffbGZl2Efn5htEFL0zRp5UiReFr',
//     issuerBaseURL: 'https://dev-jdflgo8as3oue166.us.auth0.com'
// };

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
