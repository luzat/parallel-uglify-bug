Run

```
yarn install
yarn bug-demo
```

for a demo of the [issue](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/331):

```
yarn run v1.7.0
$ webpack
Hash: 9b14e7cc119ab5e4dc53
Version: webpack 4.16.2
Time: 121ms
Built at: 07/23/2018 4:02:12 PM
 1 asset
Entrypoint main = main.js
[0] ./src/index.js 29 bytes {0} [built]

ERROR in main.js from UglifyJs
ReferenceError: foo is not defined
    at minify (eval at module.exports (/home/tom/p/parallel-uglify-bug/node_modules/uglifyjs-webpack-plugin/dist/uglify/worker.js:14:15), <anonymous>:6:23)
    at minify (/home/tom/p/parallel-uglify-bug/node_modules/uglifyjs-webpack-plugin/dist/uglify/minify.js:151:12)
    at module.exports (/home/tom/p/parallel-uglify-bug/node_modules/uglifyjs-webpack-plugin/dist/uglify/worker.js:16:41)
    at handle (/home/tom/p/parallel-uglify-bug/node_modules/worker-farm/lib/child/index.js:44:8)
    at process.<anonymous> (/home/tom/p/parallel-uglify-bug/node_modules/worker-farm/lib/child/index.js:51:3)
    at process.emit (events.js:182:13)
    at emit (internal/child_process.js:811:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Check `webpack.config.js` for details.
