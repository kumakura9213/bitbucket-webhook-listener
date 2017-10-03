'use strict';

require('dotenv').config({ path: './test/.env' });
const assert = require('power-assert');
const { sendMessageToChatwork } = require('./../lib/chatwork.js');

describe('lib/chatwork.js', () => {

  it('sendMessageToChatwork return Promise', () => {
    assert(sendMessageToChatwork('63187989', 'sendMessageToChatwork return Promise') instanceof Promise);
  });
});
