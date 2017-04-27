var unitOfWork = require('../libs/unitOfWork.js');
 
var usersHandler = function() {
    this.getStudents = handleGetUsersRequest;
};
 
function handleGetUsersRequest(req, res, next) {
    unitOfWork.userRepository.getAll().then(function (result) {
        res.json(result);
    }, function (err) {
        res.status(500);
        res.send(err);
        return next(new Error(err));
    });
}

module.exports = usersHandler;