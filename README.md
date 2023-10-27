# mdpal

- [Build & Configuration](#build--configuration)
- [Web App Modules](#web-app-modules)
- [Git hooks](#git-hooks)
- [How to use](#how-to-use)
- [TODO](#todo)

Material Design design token json palette converter from Figma to TailWindCss

## How to run locally

- `make install-tools` - Install optional tools: `jq`, `ncu`, `markdown-toc`
- `npm run launch:loc` - Run development server with types watch
- `npm run build` - Build `prod` files
- `npm run build:loc` - Build `development`/`local` files
- `make build-docker` - Build [`tuiteraz/jaba-static`](https://github.com/oleksii-honchar/jaba) based docker to serve `/dist` files
- `make up-docker` - Start `jaba` container on the `SERVE_PORT` for `statics` testing
- `make down-docker` - Start `jaba` container

Also one can check `Makefile` for more details on automation commands.

## TODO

- resolve typecheck errors
- switch to `shebang` routes
