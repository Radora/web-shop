export default class fetchService {

    constructor() {

    }

    async executeHttpPostRequest(apiUrl,headers, body) {

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body)
            });
            const content = await response.json();
            alert('User account created!');
            return content;
        } catch(err) {
            throw err;
        }
    }

    async executeLogout(apiUrl,headers) {

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: headers,
                credentials:"include",
                mode: 'cors'
            });
            const content = await response;
            return content;
        } catch(err) {
            throw err;
        }
    }
    async executeHttpPostRequestWithBody(apiUrl, headers, body) {

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: headers,
                credentials: "include",
                mode: 'cors',
                body: JSON.stringify(body),


            })
            const content = await response;
            return content;
        } catch(err) {
            alert("Wrong Credentials! Try again!");
            throw err;

        }
    }

    async getAllProducts(apiUrl,headers) {

        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: headers,
                mode: 'no-cors'

            })
            const content = await response.json();
            return content;

        } catch(err) {
            alert("Something went wrong!");
            throw err;

        }
    }

    async deleteProductById(apiUrl,headers) {
        try {
            const response = await fetch(apiUrl, {
                method: "Delete",
                headers: headers,
                credentials: "include",
                mode: 'cors'

            })
            const content = await response;
            return content;
        } catch(err) {
            alert("Something went wrong!");
            throw err;

        }
    }
}