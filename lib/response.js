'use strict';

/**
 * レスポンスを作成する。
 *
 * @param {Number} statusCode ステータスコード
 * @param {String} message メッセージ
 * @return {Object} レスポンス
 */
const buildResponse = (statusCode, message) => {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      message: message
    }),
  };
};

/**
 * 成功時のレスポンスを作成する。
 *
 * @param {String} message メッセージ
 * @return {Object} レスポンス
 */
const success = (message) => {
  return buildResponse(200, message);
};

/**
 * 失敗時のレスポンスを作成する。
 *
 * @param {String} message メッセージ
 * @return {Object} レスポンス
 */
const failure = (message) => {
  return buildResponse(400, message);
};

module.exports = {
  success,
  failure,
};
