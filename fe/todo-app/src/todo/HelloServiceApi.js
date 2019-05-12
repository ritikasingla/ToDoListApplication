import axios from 'axios'

class HelloServiceApi {

    getWelcomeMsg(name) {

        return axios.get(`http://localhost:8080/books/${name}`);
    }
}

export default new HelloServiceApi()