class API {
    constructor(url)
    {
        this.url = url;
    }

    getFullUrl(data = {id: 0, mode: ''})
    {
        if (!data) {
            return `${this.url}/${data.mode}/${data.id}`;
        }

        return false;
    }
}

export default API;