import axios from "axios";

export default axios.create({
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io/',
    headers: {"ngrok-skip-browser-warning": "true"}
});

// baseURL provides URL of the API endpoints that the React Application will be calling.
// skip-browser-warning is neccessary because during the development phase, the technology the remote machine is using to expose the relevant API endpoints is called ngrok
// The setting is needed to stop our client HTTP requests from getting blocked by cors