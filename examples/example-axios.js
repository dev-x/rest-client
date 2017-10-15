var restClient = require('./index.js');
var makeRequest = require('./client-axios');

restClient.config({
    baseUrl: 'http://somedomain',
	headers: {
		'Accept': 'application/json',
//		'Authorization': token ? `Bearer ${token}` : undefined,
		'Content-Type': 'application/json'
	},
    requestMethod: makeRequest
});

console.log('hello')
restClient.find('products').then(function(resp) {
    console.log(resp);
}).catch(function(err) {
    console.log(err)
});

