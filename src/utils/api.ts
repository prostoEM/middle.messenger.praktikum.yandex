


export enum METHODS  {
    GET= 'GET',
    POST= 'POST',
    PUT='PUT',
    DELETE=  'DELETE',
};


interface Options<T>{
    method?:METHODS;
    headers?: Record<string, string>;
    data?:T;
    timeout?: number;
}

type QueryData = Record<string, string>

function queryStringify(data?:QueryData) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    // Здесь достаточно и [object Object] для объекта
    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}
export class HttpRequest<Data> {
     get = (url: string, options:Options<Data>) => {
        return this.request(url, { ...options, method: METHODS.GET });
    };

     post = (url: string, options:Options<Data>) => {
        return this.request(url, { ...options, method: METHODS.POST });
    };

     put = (url: string, options:Options<Data> ) => {
        return this.request(url, { ...options, method: METHODS.PUT });
    };


     delete = (url: string, options:Options<Data> ) => {
        return this.request(url, { ...options, method: METHODS.DELETE });
    };

    request = (url: string, options:Options<Data>) => {
        const {
            method,
            headers = {},
            data,
          timeout = 5000,
        } = options;

        const query = method === METHODS.GET ? queryStringify(data as QueryData) : '';

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
                data && xhr.send(JSON.stringify(data));
            }
        });
    };
}