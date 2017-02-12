const fetch = require('node-fetch');

/**
 * pnut-butter.js
 */
const pnut = () => {
  const base = 'https://api.pnut.io/v0'

  const call = (uri) => {
    return fetch(uri, {
      method: 'GET'
    }).then(function (res) {
      return res.json();
    });
  }

  return {
    /**
     * The global timeline
     * @returns {<Promise>}
     */
    global() {
      return call(`${base}/posts/streams/global`);
    },

    /**
     * Retrieve a user object.
     * @param {string} id - The user id
     * @returns {<Promise>}
     */
    user(id) {
      return call(`${base}/users/${id}`);
    },

    /**
     * Retrieve a list of specified user objects. Only retrieves the first 200 found
     * @param {array} ids - An array of user ids
     * @returns {<Promise>}
     */
    users(ids) {
      return call(`${base}/users?ids=${ids.join(',')}`);
    },

    /**
     * Retrieve a post object.
     * @param {string} id - The post id
     * @returns {<Promise>}
     */
    post(id) {
      return call(`${base}/posts/${id}`);
    },

    /**
     * Retrieve a list of specified post objects. Only retrieves the first 200 found
     * @param {array} ids - An array of post ids
     * @returns {<Promise>}
     */
    posts(ids) {
      return call(`${base}/posts?ids=${ids.join(',')}`);
    }
  }
}


module.exports = pnut();