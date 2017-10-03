'use strict';

const request = require('request');

/**
 * Chatworkにメッセージを送る。
 *
 * @param {String} roomId ChatworkのルームID
 * @param {String} body メッセージ本文
 * @return {Promise}
 */
const sendMessageToChatwork = (roomId, body) => {
  return new Promise((resolve, reject) => {
    const options = {
      url: `https://api.chatwork.com/v2/rooms/${roomId}/messages`,
      headers: {
        'X-ChatWorkToken': process.env.CHATWORK_API_TOKEN
      },
      form: {
        body: body
      },
      json: true,
    };
    request.post(options, (error, response) => {
      if (!error && response.statusCode === 200) {
        resolve();
      } else {
        console.log(`error: ${response.statusCode}`);
        reject();
      }
    });
  });
};

module.exports = {
  sendMessageToChatwork,
};
