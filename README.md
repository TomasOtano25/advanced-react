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