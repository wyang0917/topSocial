//git init
//npm init
//npm i nodemon concurrently -D
//concurrently 同步同时启动多个server
//npm i express cors json-server axios
const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const {handleErrors} = require('./middleware/errorMiddleware')
const app = express();

app.use(cors())
//json数据解析
app.use(express.json())
app.use('/api',router)
//路由之后设定全局中间件 use error middleware at the end
app.use(handleErrors)
const PORT = 80;
app.listen(PORT,function(){
  console.log('Server is running on http://localhost:80');
});
