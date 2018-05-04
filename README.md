## Extension

- https://github.com/yannickcr/eslint-plugin-react
- 


```bash
npm install eslint --save-dev 
npm install eslint-plugin-react --save-dev
npm install express --save
npm install ejs
yarn add --dev prettier eslint-plugin-prettier
npm i -g babel-cli
yarn add babel-cli babel-preset-react babel-preset-env babel-preset-stage-2
yarn add react react-dom webpack
yarn add babel-loader
yarn add babel-polyfill
yarn add --dev jest
yarn add --dev eslint-plugin-jest
yarn add --dev eslint eslint-plugin-jest
yarn add styled-components prop-types
yarn add eslint-config-react-app --dev
yarn add  eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y --dev
```

## Package.json

```json
    ...
    "scripts": {
    "dev": "nodemon --exec babel-node lib/server.js"
  }
```


```json
    ...
    "babel": {
    "presets": [
      "react",
      "env",
      "stage-2"
    ]
```

## Comandos git

```git
    git show --decorate
```

La funcion del `git show` es mostrar los cambios del commit anterior.

## Comandos para exportar de internet

```bash
wget -O lib/testData.json https://gist.githubusercontent.com/samerbuna/5b53056342720b79ab19fc75629a9c8f/raw/f80d3d219d5913e0b36af1fcbb79c8721666fd49/react-blog-mockup-data.json
```