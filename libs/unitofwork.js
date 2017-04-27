var config = require('../config/config');
var mysql = require('mysql')
var MySqlGenericRepository = require('../libs/mySqlGenericRepository.js');
 
//var mySqlDbConfig = config.get('COMMON.mySqlDbConfig');
var mySqlConnection = mysql.createConnection(config.COMMON.mySqlDbConfig);
console.log(mySqlConnection);
var userRepository = new MySqlGenericRepository(mySqlConnection, 'symfony_demo_user');

module.exports =  {userRepository : userRepository};