'use strict';

process.env.TZ = 'Asia/Tokyo';

const { sendMessageToChatwork } = require('./../lib/chatwork.js');
const { buildMessageForPullrequest } = require('./../lib/message.js');
const { success, failure } = require('./../lib/response.js');

// *******************************
//           (・(ェ)・)
// *******************************
module.exports.notify = (event, context, callback) => {
  const pathParameters = event.pathParameters || { room_id: 'default_room_id' };
  const eventKey = event.headers['X-Event-Key'];
  const body = JSON.parse(event.body);
  const message = buildMessageForPullrequest(eventKey, body);

  // メッセージを送信する。
  sendMessageToChatwork(pathParameters.room_id, message).then(() => {
    callback(null, success('good!'));
  }).catch(() => {
    callback(null, failure('bad...'));
  });
};
