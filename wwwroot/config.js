System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "app/*": "dist/app/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "jquery": "github:components/jquery@2.1.4",
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});
