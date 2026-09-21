const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/employeeDB'
).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
const empSchema = new mongoose.Schema({
  empName: String,
  empPass: String,
  created: {type: Date, default: Date.now }
},{
    collection:'ft_employees'
});
//
module.exports = mongoose.model('Employees', empSchema);


