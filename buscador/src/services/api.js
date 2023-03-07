import axios from "axios";

//11045500/json/

const api = axios.create ({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;