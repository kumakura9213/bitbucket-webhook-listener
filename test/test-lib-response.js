'use strict';

require('dotenv').config({ path: './test/.env' });
const assert = require('power-assert');
const { success, failure } = require('./../lib/response.js');

describe('lib/response.js', () => {

  it('success return 200', () => {
    const expected = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: 'good!!'
      }),
    };
    assert(JSON.stringify(expected) === JSON.stringify(success('good!!')));
  });

  it('failure return 400', () => {
    const expected = {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: 'bad!!'
      }),
    };
    assert(JSON.stringify(expected) === JSON.stringify(failure('bad!!')));
  });
});
