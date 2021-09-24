const componentGenerator = {
  description: "Create a new component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name?",
      default: "Button",
    },
    {
      type: "confirm",
      name: "stateless",
      message: "Is it Stateless?",
      default: "y",
    },
  ],
  actions: ({ stateless }) => {
    const actions = [
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component.js.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/{{pascalCase name}}.css",
        templateFile: "plop-templates/Component.css.hbs",
      },
      {
        type: "add",
        path: "./src/components/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/index.js.hbs",
      },
    ];
    return actions;
  },
};

const hooksGenerator = {
  description: "Create a new Hooks",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Custom Hooks name?",
      default: "Time",
    },
  ],
  actions: ({ stateless }) => {
    const actions = [
      {
        type: "add",
        path: "./src/hooks/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Hooks.js.hbs",
      },
      {
        type: "add",
        path: "./src/hooks/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/hooks/index.js.hbs",
      },
    ];
    return actions;
  },
};

const screenGenerator = {
  description: "Create a new Screen",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Screen name?",
      default: "Home",
    },
    {
      type: "confirm",
      name: "stateless",
      message: "Is it Stateless?",
      default: "y",
    },
  ],
  actions: ({ stateless }) => {
    const actions = [
      {
        type: "add",
        path: "./src/screens/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Component.js.hbs",
      },
      {
        type: "add",
        path: "./src/screens/{{pascalCase name}}/{{pascalCase name}}.css",
        templateFile: "plop-templates/Component.css.hbs",
      },
      {
        type: "add",
        path: "./src/screens/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/index.js.hbs",
      },
    ];
    return actions;
  },
};
const storegenerate = {
  description: "Create a new Store",
  prompts: [],
  actions: ({ stateless }) => {
    const actions = [
      {
        type: "add",
        path: "./src/redux/Store.js",
        templateFile: "plop-templates/Store.js.hbs",
      },
      {
        type: "add",
        path: "./src/redux/Reducer/RootReducer.js",
        templateFile: "plop-templates/RootReducer.js.hbs",
      },
      {
        type: "add",
        path: "./src/redux/Types.js",
        templateFile: "plop-templates/Types.js.hbs",
      },
    ];
    return actions;
  },
};
const reducergenerate = {
  description: "Create a new reducer",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Reducer name?",
      default: "authReducer",
    },
  ],
  actions: ({ stateless }) => {
    const actions = [
      {
        type: "add",
        path: "./src/redux/Reducer/{{pascalCase name}}.jsx",
        templateFile: "plop-templates/Reducer.js.hbs",
      },
    ];
    return actions;
  },
};
module.exports = (plop) => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("screen", screenGenerator);
  plop.setGenerator("hooks", hooksGenerator);
  plop.setGenerator("store", storegenerate);
  plop.setGenerator("reducer", reducergenerate);
};
