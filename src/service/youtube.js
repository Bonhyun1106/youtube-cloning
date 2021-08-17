// Dependency Injection
// Adding Custom Environment Variables - https://create-react-app.dev/docs/adding-custom-environment-variables/
class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: "get",
            redirect: "follow",
        };
    }

    async loading() {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&chart=mostPopular&maxResults=25&key=${this.key}`
            , this.getRequestOptions
        );
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }

    async search(query) {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.key}`
            , this.getRequestOptions
        );
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    };
}

export default Youtube;