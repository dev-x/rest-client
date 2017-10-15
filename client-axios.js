let axios = require('axios');

function makeRequest ({url, method, headers, bodyJSObject}) {
    console.log({url, method, headers, bodyJSObject})
    return axios({
        method: method,
        url: url,
        withCredentials: true,
        responseType: 'json', // default
        validateStatus: function (status) {
            return status >= 200 && status < 300; // default
        },        
        data: bodyJSObject
    }).then(({data, status, statusText, headers, config, request}) => data);
}

//export default makeRequest;
module.exports = makeRequest;