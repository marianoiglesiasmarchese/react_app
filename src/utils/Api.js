const API_KEY = process.env.REACT_APP_API_KEY;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class Api { 
   getBaseConfig = () => {
    return {
      headers: {
        Accept: 'application/json',
      },
      mode: 'cors',
    };
  };

  handleResponse = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  request = (endpoint, config) =>
    fetch(`${SERVER_URL}?${endpoint}&apikey=${API_KEY}`, config)
      .then(this.handleResponse)
      .then(response => response.json())
      .catch(e => console.error(e));

 post = (endpoint, data) => {
    const body = JSON.stringify(data);
    const method = 'POST';
    return this.request(endpoint, { ...this.getBaseConfig(), method, body });
  }

  get = (endpoint) => {
    return this.request(endpoint, this.getBaseConfig());
  }
};