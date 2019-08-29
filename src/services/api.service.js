class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
            });
            return this.useRequest(request);
        } catch (error) {
            console.error(error);
        }
    }

    async fetchPosts() {
        try {
            const request = new Request(`${this.url}/posts.json`, {
                method: 'get'
            });
            return this.useRequest(request);
        } catch (error) {
            console.error(error);
        }
    }

    async useRequest(request) {
        const response = await fetch(request);
        return await response.json();
    }
}

export const apiService = new ApiService('https://g1rz-js-blog.firebaseio.com');