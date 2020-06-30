const { override, fixBabelImports , addWebpackAlias} = require('customize-cra');
const path = require('path');
const resolve = path.join(__dirname, './src');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        '@': resolve
    })

);
