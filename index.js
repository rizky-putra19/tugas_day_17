const express = require('express');
const app = express();

const port = 3000;
const router = require("./routes/index");

app.use('/', router);

app.get('*', function(req, res){
    res.status(404).send('Error Not Found');
});

app.listen(port, () => {console.log(`server aktif di port: ${port}`)});