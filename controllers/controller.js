const employee = require('../models/employee');
exports.getdefault = function(req, res){
  res.send('You are on the root route.');
};
exports.aboutus = function(req, res){
  res.send('You are on the about us route.');
};
exports.getemployees = function(req, res){
  employee.find().then(emps => res.send(emps)).catch(err => res.send({"message": err.message}));
};
//
exports.addemployee=function(req, res){
  let empName = req.body.empName;
  let empPass = req.body.empPass;
  const Emp = new employee();
  Emp.empName = empName;
  Emp.empPass = empPass;
  Emp.save()
  .then(msg => {
    res.send({"message":"Created " + Emp.empName});
  })
  .catch(
    err => res.send({"message":err.message})
  );
};
