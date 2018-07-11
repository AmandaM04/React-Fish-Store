import axios from 'axios';
import constants from '../constants';

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/orders.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => { /* response comes back with a fishes array */
        const orders = [];
        if (res.data !== null) { /* response comes back with data, it will key over them and if there is no data it will be an empty array */
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            orders.push(res.data[fbKey]);
          });
        }
        resolve(orders);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const postRequest = (newOrder) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/orders.json`, newOrder)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

const deleteRequest = (orderId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/orders/${orderId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

export default { getRequest, postRequest, deleteRequest };
