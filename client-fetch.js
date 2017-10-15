function checkHttpStatus(response) {
    if(response.status >= 200 && response.status < 300) {
        return response
    } else {
        const error = new Error(response.statusText);
        error.response = response
        throw error
    }
}

function makeRequest ({url, method, headers, bodyJSObject}) {
    console.log({url, method, headers, bodyJSObject})
    return fetch(url,
      {
        method: method || "GET",
        headers: Object.assign({}, this.headers, headers),
        body: bodyJSObject ? JSON.stringify(bodyJSObject) : undefined
    }).then(checkHttpStatus).then(response => response.parseJSON());
}

//export default makeRequest;