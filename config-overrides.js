const { override, setHeaders } = require('customize-cra');

module.exports = override(
    setHeaders([
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    }
])
);