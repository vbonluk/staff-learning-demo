
export function isFunction(callback) {
    return typeof callback == "function";
}

export async function ApiPost(url, headers, body, callback) {
    return ApiCall(url, "POST", headers, body, callback)
}

export async function ApiGet(url, headers, body, callback) {
    return ApiCall(url, "GET", headers, body, callback)
}

export async function ApiCall(url, method, headers, body, callback) {
    // https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
    // https://zenn.dev/junki555/articles/4ab67fc78ce64c
    // https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html
    // await fetch(url, {headers: headers, method: "POST", body: body})
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error(url + "\n" + response.status);
    //         }
    //         return response.json();
    //     })
    //     .then((result) => {
    //         if (isFunction(callback)){
    //             callback(true, result);
    //         }
    //     })
    //     .catch(error => {
    //
    //     });
    try {
        const requestConfig = {headers: headers, method: "POST", body: body}
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        if (isFunction(callback)){
            callback(true, responseJson);
        }
        return responseJson
    } catch (error) {
        alert(error)
        if (isFunction(callback)){
            callback(false, error);
        }
        throw new Error(error)
    }
}
