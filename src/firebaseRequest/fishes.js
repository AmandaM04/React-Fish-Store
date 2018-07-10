import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/fishes.json`)
      .then(res => { /* response comes back with a fishes array */
        const fishes = [];
        if (res.data !== null) { /* response comes back with a data, it will key over them and if there is no data it will be an empty array */
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            fishes.push(res.data[fbKey]);
          });
        }
        resolve(fishes);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { getRequest };
