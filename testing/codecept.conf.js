/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './index.test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000/demo',
      show: true,
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Monorepo'
}
