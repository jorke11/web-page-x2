module.exports = {
  apps: [
    {
      name: "web-page-x2",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/webapp/projects/web-page",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 8007,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 8007,
      },
    },
  ],
};
