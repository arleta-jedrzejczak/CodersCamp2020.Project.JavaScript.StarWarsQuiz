class API {
    constructor(url, mode)
    {
        this.url = url;
        this.mode = mode;
    }

    sendRequest(id = null)
    {
        if (id != null) {
            let url = `${this.url}/${this.mode}/${id}`;
            return fetch(url);
        } else {
            console.error(`API: ERROR: sendRequest->invalid id: ${id}`);
        }
    }

    #setUrl()
    {
        return `${this.url}/${this.mode}/${this.id}`;
    }

}

export default API;