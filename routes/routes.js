module.exports = function(router) {
  router.get('/', (request, response)=> response.send('hello from skillsoft'));
  router.post('/addemployee', (request, response) => {
    let empName = request.body.empName;
    let empPass = request.body.empPass;
    response.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
  });
};
