module.exports = {
  outputDir: "docs",
  publicPath: "/webapp-grade-horarios/",

  chainWebpack: (config) => {
    // vue inspect --plugin html
    // Alterar titulo do html
    config.plugin("html").tap((args) => {
      args[0].title = "Grade de Horários";
      return args;
    });
  },

  // Vue CLI inside a container
  devServer: {
    public: "8080-amber-snail-5gw7of9g.ws-us15.gitpod.io",
  },
};
