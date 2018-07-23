const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const foo = 'should be in scope'

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        minify: (file, sourceMap) => {
          // 'foo' is undefined
          console.log(foo)

          // When removing the previous line, the following line gives: 'require' is undefined
          return require('terser').minify(file, {
            sourceMap: sourceMap ? {
              content: sourceMap,
            } : false
          })
        },
        parallel: true, // The bug disappears with parallel: false.
        test: /\.js$/,
      }),
    ],
  },
}
