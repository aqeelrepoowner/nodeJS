function setup(router, handlers) {
 
    // ROUTES FOR API
    // =============================================================================
  //  router.post('/students', handlers.student.createStudent);
    router.get('/users', handlers.user.getStudents);
  /*  router.get('/students/:id', handlers.student.getStudent);
    router.get('/students/age/:ageInt', handlers.student.getStudentsByAge);
    router.put('/students/:id', handlers.student.updateStudent);
    router.delete('/students/:id', handlers.student.deleteStudent);*/
    
}
 
exports.setup = setup;