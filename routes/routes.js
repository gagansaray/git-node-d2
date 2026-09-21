const controller = require('../controllers/controller');
module.exports = function(router){
  router.get('/', controller.getdefault);
  router.get('/aboutus', controller.aboutus);
  router.get('/getemployees', controller.getemployees);
  router.post('/addemployee', controller.addemployee);
};
