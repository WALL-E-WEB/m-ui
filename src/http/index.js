import axios from 'axios';

export const service = axios.create({
  baseURL: '/api',
  timeout: 500000
});

// export const postRequests = (url, params) => {
//   return service({
//     method: 'post',
//     url: url,
//     data: params
//   });
// };

export const postRequests = (url, params) => {
  return service({
    method: 'post',
    url: url,
    params: params,
    data: {
      age: 18,
      name: [1, 2, 3, 4, 5, 6, 7]
    },
    transformRequest: [
      function(data) {
        let ret = '';
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        }
        return ret;
      }
    ],
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
      //   'Content-Type': 'multipart/form-data'
    }
  });
};

export const postLogin = (params) => {
  return postRequests('/login', params);
};
