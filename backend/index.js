//git init
//npm init
//npm i nodemon concurrently -D
//concurrently 同步同时启动多个server
//npm i express cors json-server axios
const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const app = express();

app.use(cors())

app.use('/api',router)

const PORT = 80;
app.listen(PORT,function(){
  console.log('Server is running on http://localhost:80');
});
