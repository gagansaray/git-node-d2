const express = require('express');
const router = express.Router();
const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
router.get('/', (request, response)=> response.send('hello from skillsoft'));
router.post('/addemployee', (request, response) => {
  let empName = request.body.empName;
  let empPass = request.body.empPass;
  response.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
});
app.use('/', router);
app.listen(port, function(){
	console.log("Listening... " + port);
});
