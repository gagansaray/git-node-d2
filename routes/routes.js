const controller = require('../controllers/controller');
module.exports = function(router){
  router.get('/', controller.getdefault);
  router.get('/aboutus', controller.aboutus);
  router.post('/addemployee', controller.addemployee);
};
