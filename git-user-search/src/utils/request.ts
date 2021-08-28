import axios, { Method } from 'axios';

const BASE_URL = 'https://api.github.com/users';

type RequestParams = {
  method?: Method,
  url: string;
  data?: object;
  params?: object;
}

const makeRequest = ({method = 'GET', url, data, params}: RequestParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,    
  })
}

export default makeRequest;