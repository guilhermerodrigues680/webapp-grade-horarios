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
};
