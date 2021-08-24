import axios from "axios";
import config from "./config";

export const api = {
  header: () => {
    let header = {};
    return header;
  },

  getMethod: (url) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .get(config.BASE_URL + url, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            reject(err);
          } else {
            reject(err);
          }
        });
    });
  },

  deleteMethod: (url) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .delete(config.BASE_URL + url, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  patchMethod: (url, data) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .patch(config.BASE_URL + url, data, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  postMethod: (url, data) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .post(config.BASE_URL + url, data, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  putMethod: (url, data) => {
    var headers = api.header();
    return new Promise((resolve, reject) => {
      axios
        .put(config.BASE_URL + url, data, {
          headers: headers,
        })
        .then((res) => {
          if (res.status === 200) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
