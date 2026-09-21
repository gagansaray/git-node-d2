const express = require('express');
const routes = require('./routes/routes');
const router = express.Router();
const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
routes(router);
app.use('/', router);
app.listen(port, function(){
        console.log("Listening... " + port);
});
