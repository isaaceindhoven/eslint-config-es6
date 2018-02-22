# ESLint configuration for ECMAScript 6+

![node](https://img.shields.io/node/v/@isaac.frontend/eslint-config-es6.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/isaaceindhoven/eslint-config-es6.svg)
![GitHub contributors](https://img.shields.io/github/contributors/isaaceindhoven/eslint-config-es6.svg)
![GitHub tag](https://img.shields.io/github/tag/isaaceindhoven/eslint-config-es6.svg)


![logo](http://fossbytes.com/wp-content/uploads/2016/06/ecmascript-2016.jpg)

The purpose of this package is to share JavaScript Code Styling within Isaac BV for ECMAScript 6 and higher.<br />
The configuration extends the [airbnb](https://github.com/airbnb/javascript) configuration.


## How to configure

### Install npm package

```bash
npm i -D @isaac.frontend/eslint-config-es6
```

### Create `.eslintrc.json` 

```json
{
	"extends": "@isaac.frontend/eslint-config-es6"
}
``` 

## Sync your IDE JavaScript Code Style with the ESLint rules

### PHPStorm

If you have not done already, create a new ECMAScript 6 Isaac Scheme in your IDE JavaScript Code Style:

1. Go to your project <span style="color: #696969;">preferences</span> ⇢ <span style="color: #696969;">Editor</span> ⇢ <span style="color: #696969;">Code Style</span> ⇢ <span style="color: #696969;">JavaScript</span>
2. Select a scheme stored in your IDE
3. Then click the settings icon and select `Duplicate`
4. Rename your scheme, example: *Isaac ES6*

PHPStorm 2017.3+ supports auto apply rules from eslint to your code style scheme, see [import eslint configuration](https://blog.jetbrains.com/webstorm/2017/09/webstorm-2017-3-eap-173-2463/#eslint-import).

1. Open the created file `.eslintrc.json`
2. Right click and select the `Apply ESLint Code Style Rules`

Now you're done, happy coding


### Visual Studio Code

Install the following extensions: 

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Now we want Prettier to format our code based on our ESLint rules. Therefore you'll need to install `prettier-eslint`:

```shell
npm i -D prettier-eslint
```

Now setup Visual Studio Code to use autoformat on file save. Open VS Code Workspace Settings (on a mac `CMD + ,`) and update the following settings fields:

```text
// Use autoformat on save
"editor.formatOnSave": true,

// Use `prettier-eslint` instead of `prettier`
"prettier.eslintIntegration": true
```

### Updating this package

Please make sure you've created an user on npmjs and you have the rights to publish this package within the organisation [@isaac.frontend](https://www.npmjs.com/org/isaac.frontend). If not, please contact one of the contributors, defined in the package.json.
