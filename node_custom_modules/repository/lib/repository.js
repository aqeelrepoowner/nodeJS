var util   = require('./util')
  , _      = require('underscore');

function Repository(connection, entity) {
  if (connection === undefined || connection === null) {
    throw new Error('Argument Expected `connection`, got nothing');
  }

  this.connection = connection;
  this.entity = entity;
  this.update = util.update.bind(util, this.connection);
  this.query = util.query.bind(util, this.connection);
}

Repository.extend = function (ctorProto) {

  var ctor = function () {
    var repository = Object.create(ctor.prototype);

    Repository.apply(repository, arguments);

    if (typeof repository.init === 'function') {
      repository.init.apply(repository, removeFirstElement(Array.prototype.slice.call(arguments)));
    }

    return repository;
  };

  ctor.prototype = _.extend(Object.create(Repository.prototype, {
    constructor: {
      value: ctor,
      enumerable: false
    }
  }), ctorProto);

  return ctor;
};

function removeFirstElement(arr) {
  arr.shift();

  return arr;
}

module.exports = Repository;
