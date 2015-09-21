# Vue.js + Webpack + EasyUI example


This example demonstrates using Webpack as the build tool for Vue.js apps, including:

- Organize your app into views & components.
- Directly `require()` CSS (Stylus) files and HTML templates via configured loaders.
- Split your build into multiple chunks that are lazy-loaded.

## Setup

``` bash
npm install
gulp server
```

Then serve the folder with a static HTTP server, e.g. `python -m SimpleHTTPServer`. This is necessary to enable lazy-loading of modules.
