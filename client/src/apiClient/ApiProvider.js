import axios from 'axios';

class ApiProvider {
    constructor() {
        this.apiClient = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
            timeout: 1000,
            // headers: {'X-Custom-Header': 'foobar'}
        });
    }

    get(url, config = {}) {
        return this.apiClient.get(url, config);
    }

    post(url, data, config = {}) {
        return this.apiClient.post(url, data, config);
    }

    put(url, data, config = {}) {
        return this.apiClient.put(url, data, config);
    }

    delete(url, config = {}) {
        return this.apiClient.delete(url, config);
    }
}

export default ApiProvider;
