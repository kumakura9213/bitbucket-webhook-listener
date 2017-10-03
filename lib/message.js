'use strict';

const config = require('config');
const fs = require('fs');
const stripBom = require('strip-bom');
const mustache = require('mustache');

/**
 * リクエストヘッダーの'X-Event-Key'に対応するtemplate_pathを返却する。
 *
 * @param {String} eventKey リクエストヘッダーの'X-Event-Key'
 * @return {String} template_path
 */
const findTemplatePath = (eventKey) => {
  let path = '';
  config.event_keys.forEach((row) => {
    if (row.event_key === eventKey) {
      path = row.template_path;
    }
  });
  return path;
};

/**
 * 引数のdisplayNameに対応したChatworkのTo用の文言を返却する。
 *
 * @param {String} displayName BitBucket上の表示名
 * @return {String} ChatworkのTo用の文言
 */
const buildToStatement = (displayName) => {
  let toStatement = '';
  config.members.forEach((row) => {
    if (row.display_name === displayName) {
      toStatement = `[To:${row.chatwork_member_id}] ${row.display_name}さん`;
    }
  });
  return toStatement;
};

/**
 * リクエストの情報からプルリクエストイベント用のメッセージを組み立てる。
 *
 * @param {String} eventKey リクエストヘッダーの'X-Event-Key'
 * @param {Object} body リクエストボディ
 * @return {String} メッセージ
 */
const buildMessageForPullrequest = (eventKey, body) => {
  // 想定していないイベントの場合、空文字列を返却する。
  const path = findTemplatePath(eventKey);
  if (path === '') {
    throw new Error('Unexpected eventKey.');
  }

  const toAuthor = buildToStatement(body.pullrequest.author.display_name);
  const reviewers = body.pullrequest.reviewers.map((reviewer) => {
    return reviewer.display_name;
  }).join(', ');
  const toReviewers = [];
  body.pullrequest.reviewers.forEach((reviewer) => {
    const toReviewer = buildToStatement(reviewer.display_name);
    if (toReviewer !== '') {
      toReviewers.push(toReviewer);
    }
  });

  const template = stripBom(fs.readFileSync(path, 'utf-8'));
  const view = {
    body: body,
    toAuthor: toAuthor,
    reviewers: reviewers,
    toReviewers: toReviewers.join('\n')
  };

  return mustache.render(template, view);
};

/**
 * リクエストの情報からリポジトリイベント用のメッセージを組み立てる。
 *
 * @param {String} eventKey リクエストヘッダーの'X-Event-Key'
 * @param {Object} body リクエストボディ
 * @return {String} メッセージ
 */
const buildMessageForRepo = (eventKey, body) => {
  // 想定していないイベントの場合、空文字列を返却する。
  const path = findTemplatePath(eventKey);
  if (path === '') {
    throw new Error('Unexpected eventKey.');
  }

  let author = '';
  let message = '';
  let link = '';
  let newBranchName = '';
  let newBranchHash = '';
  if (Object.hasOwnProperty.call(body, 'push')) {
    if (body.push.changes[0].new != null) {
      author = body.push.changes[0].new.target.author.user.display_name;
      message = body.push.changes[0].new.target.message;
      link = body.push.changes[0].new.links.html.href;
      newBranchName = body.push.changes[0].new.name;
      newBranchHash = body.push.changes[0].new.target.hash;
    } else {
      // TODO 削除したブランチの情報も欲しくなったら、ここの実装を見直す。
      // newがない(ブランチが削除された)場合、何もしない。
      throw new Error('Branch is deleted.');
    }
  }

  const template = stripBom(fs.readFileSync(path, 'utf-8'));
  const view = {
    body: body,
    author: author,
    message: message,
    link: link,
    newBranchName: newBranchName,
    newBranchHash: newBranchHash
  };

  return mustache.render(template, view);
};

module.exports = {
  findTemplatePath,
  buildToStatement,
  buildMessageForPullrequest,
  buildMessageForRepo,
};
