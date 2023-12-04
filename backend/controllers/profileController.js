const axios = require('axios')
const getProfile = async function(req,res){
  try {
    const url ='http://localhost:8000/profile'
    const response = await axios.get(url)
    console.log('response',response);
    res.status(200).json({
      msg:'Get profile succeed',
      data:response.data
    })
  } catch (error) {
    console.error('error',error)
  }
}
module.exports={getProfile}