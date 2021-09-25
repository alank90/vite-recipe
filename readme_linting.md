# Setting Up Project for Linting with Vite

Before you set up ESLint for your project, you will first need to install ESLint:

`npm install eslint --save-dev`

Now that ESLint is installed, you can initialize an ESLint configuration for your project using the following command:
`./node_modules/.bin/eslint --init`

An important piece in this command is the --init flag. The ./node_modules/.bin/eslint section of the command is the path to ESLint in your project. Using the --init flag activates ESLint for your project. Activating or initializing ESLint will create an ESLint configuration file that will allow you to customize how ESLint works with your project.

Follow the prompts to setup your .eslintrc file. More Info can be found at https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code

To integrate ESLint into Visual Studio Code, you will need to install the ESLint extension for Visual Studio Code. Navigate back to Visual Studio Code and search for ESLint in the Extensions tab. Click Install once you have located the extension:

ESLint extension in Visual Studio Code

## Getting error _"eslint error The template root requires exactly one element."_

In Vue 3 you can have more then one root element. The **eslint-plugin-vue** doesn't recognize this so add this line to rules section of eslintrc:

`"rules": { "vue/no-multiple-template-root": "off" }`

## Integrating Prettier w/ESLint into your project

### Installing Prettier in VSCode

Install the **"Prettier - Code formatter"** extension from the extensions sidebar. Once this is complete, open a code file and press *Alt + Shift + F* to auto format it. You should see a prompt asking you to choose which code formatter you would like to use since you now have two available. Select Prettier from the prompt.

### Disabling ESLint style formatting

Linters usually contain not only code quality rules, but also stylistic rules. Most stylistic rules are unnecessary when using Prettier, but worse – they might conflict with Prettier! Use Prettier for code formatting concerns, and linters for code-quality concerns. To turn off linter eslint use _eslint-config-prettier_ in your project.

` npm install --save-dev eslint-config-prettier `

Then, add "prettier" to the "extends" array in your .eslintrc.\* file. Make sure to put it last, so it gets the chance to override other configs.

```{
 "extends": [

 "some-other-config-you-use",
 "prettier"
 ]
 }
```

That’s it! Extending "prettier" turns off a bunch of core ESLint rules, as well as a few rules from ESLint plugins.
