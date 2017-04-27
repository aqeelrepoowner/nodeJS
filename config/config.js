var config = {
  COMMON: {
      mySqlDbConfig: {
        host: '127.0.0.1',
        port: 3306,
        database: 'darulhuda',
        user : 'root',
        password : ''
      },
      mongoDbConfig: "username:password@localhost/dbname",
      log : {
          fileName : "api-error-logs.log",
          logsDirectory : "logs"
        }     
    }
}

module.exports = config;