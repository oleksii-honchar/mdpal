# mdpal

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

## How to use

- Open M3D Palette Kit in Figma ([link](https://www.figma.com/file/pCsQgzpNTStWeXqVNNzdjE/Material-3-Design-Kit-But-Better-(Community)?type=design&t=SSzGaw2y7xMAE8Ub-6))
- Open or install "Material Theme Builder" plugin ([link](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder))
- In plugin select your colors for the theme "M3". Click "Apply" for every selected color.
- When theme update completed, click "Export" -> "Theme.json". Save "material-theme.zip". Unzip it.
- Drop theme.json to mdpal browser window.
- Generated tokens file will be downloaded for local use
- Use [mdtex](https://github.com/oleksii-honchar/mdtex) tool to explore palette and tokens.

## How convert works

- Converts color codes to TW standard format:
  - `ref.primary.primary95`-> `ref.palette.primary50`
  - `ref.primary.primary90`-> `ref.palette.primary100`
- Fixes the token color reference to proper palette color code according to Figma tmpl

## Troubleshooting

- Root `tsconfig.json` used for IDE. `.configs/tsconfig.2022.json` for build time by Webpack. So they partially overlaps.

## TODO

- resolve typecheck errors
- switch to `shebang` routes
- for opacity option use `rgba()`` instead of only color code
