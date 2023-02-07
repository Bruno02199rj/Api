const axios = require('axios').default;

const options = {
  method: 'GET',
  url: 'http://localhost:3001/transaction',
  headers: {accept: 'application/json'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });