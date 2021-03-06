var _      = require('underscore')
  , q      = require('q');

module.exports = {

  query: function(connection, sql, parameters){
    try {
      var deferred = q.defer();

      connection.query(sql, parameters, function(err,result){
        if (err){ 
          return deferred.reject(err)
        }
        deferred.resolve(result);            
      });
      
      return deferred.promise;
    } catch (err) {
      return q.reject(err);
    }
  },

  update: function(connection, sql, parameters, id){
    try {
      var deferred = q.defer();

      connection.query(sql, parameters, function(err,result){
        if (err){ 
          return deferred.reject(err)
        }
        deferred.resolve(result);            
      });

      return deferred.promise;
    } catch (err) {
      return q.reject(err);
    }
  }

};