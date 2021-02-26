import axios from "axios";

axios.defaults.baseURL = "https://venbest-test.herokuapp.com/";

export const fetchPeople = () => axios.get();
