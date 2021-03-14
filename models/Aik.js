const axios = require('axios')

const Aik = (method) => {
  let data;
  const config = {
    method: method,
    url: 'localhost:3001/json/admin',
    headers: { }
  };
  
  axios.get('localhost:3001/json/admin').then((response) => {
    data = response.data
    console.log('res',response)
  }).catch((error) => {
    data = error
  });
  console.log(data)
  return data
}

module.exports = Aik