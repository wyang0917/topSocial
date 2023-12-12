const handleErrors = function(err,req,res,next){
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal server error'
  res.status(statusCode).send({error:message})
}

module.exports = {handleErrors}