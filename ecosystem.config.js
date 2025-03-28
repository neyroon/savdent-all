module.exports = {
  apps: [
    {
      name: "Моё прекрасное приложение",
      script: "node_modules/next/dist/bin/next",
      args: "-p 4000",
      exec_mode: "cluster",
      instances: "max",
    },
  ],
};
