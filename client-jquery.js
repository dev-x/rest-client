"use strict";

(function() {
    var root = this;
    var _makeRequest = root.makeRequest;
    var jQuery = root.jQuery;
    console.log("jQuery", root.jQuery)

    var has_require = typeof require !== 'undefined'
    
    if( typeof jQuery === 'undefined' ) {
        if( has_require ) {
            jQuery = require('jquery');
        } else {
            throw new Error('client-fetch requires jquery');
        }
    }
    
    function makeRequest ({url, method, headers, bodyJSObject}) {
        console.log({url, method, headers, bodyJSObject})
        
        return jQuery.when( jQuery.ajax({
            type: method,
            url: url,
            headers: headers,
            contentType: 'application/json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: JSON.stringify(bodyJSObject),
            success: function (responce) {
            },
            error: function (error) {
            }
        }) );
        /*
        .done(function(data) {
            console.log('success', data) 
            return data;
        }).fail(function(xhr) {
            console.log('error', xhr);
            return xhr;
        });
        */
    } 

    
    if( typeof exports !== 'undefined' ) {
        if( typeof module !== 'undefined' && module.exports ) {
          exports = module.exports = makeRequest
        }
        exports.makeRequest = makeRequest
    } else {
        console.log("HERE?")
        root.makeRequest = makeRequest
    }

}).call(this);