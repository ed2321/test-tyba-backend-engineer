module.exports = {
  apps: [
    {
      name: 'API-REST',
      script: 'src/index.js',
      instances: 3,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
