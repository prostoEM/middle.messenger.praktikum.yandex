


const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};


function queryStringify(data) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    // Здесь достаточно и [object Object] для объекта
    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}
export class HttpRequest {
     get = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
    };

     post = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
    };

     put = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.PUT },options.timeout);
    };

     patch = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.PATCH },options.timeout);
    };

     delete = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.DELETE },options.timeout);
    };

    request = (url: string, options) => {
        const {
            method,
            headers = {},
            data,
          timeout = 5000,
        } = options;

        const query = method === METHODS.GET ? queryStringify(data) : '';

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;


            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );


            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = () => {
                if (xhr.status >= 300) {
                    reject(xhr);
                } else {
                    resolve(xhr);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;


            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}