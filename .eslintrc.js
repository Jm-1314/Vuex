module.exports = {
  root: true,
  env: {
    node: true
  },
  "plugins":["transform-object-rest-spread"],
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier":[
      'error',
      {
        singkeQuote:true,
        semi:false,
        printWidth:160
      }
    ]
  }
};
