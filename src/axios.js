import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-fa7b7.cloudfunctions.net/api'
    // http://localhost:5001/challenge-fa7b7/us-central1/api' // THE API (cloud function) URL
});

export default instance;