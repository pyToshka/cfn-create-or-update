'use strict';

const assert = require('assert');
const map = require('../lib/map.js');

describe('map', function() {
  describe('parameter', function() {
    it('ParameterKey=key,UsePreviousValue=true', function() {
      assert.deepEqual(map.parameter('ParameterKey=key,UsePreviousValue=true'), {
        parameterKey: 'key',
        usePreviousValue: true
      });
    });
    it('ParameterKey=key,UsePreviousValue=false', function() {
      assert.deepEqual(map.parameter('ParameterKey=key,UsePreviousValue=false'), {
        parameterKey: 'key',
        usePreviousValue: false
      });
    });
    it('ParameterKey=key,ParameterValue=value', function() {
      assert.deepEqual(map.parameter('ParameterKey=key,ParameterValue=value'), {
        parameterKey: 'key',
        parameterValue: 'value'
      });
    });
    it('ParameterKey=key,Unexpected=value', function() {
      assert.throws(() => {
        map.parameter('ParameterKey=key,Unexpected=value');
      }, Error);
    });
  });
  describe('parameter', function() {
    it('Key=key,Value=value', function() {
      assert.deepEqual(map.tag('Key=key,Value=value'), {
        key: 'key',
        value: 'value'
      });
    });
    it('Key=key,Unexpected=value', function() {
      assert.throws(() => {
        map.parameter('Key=key,Unexpected=value');
      }, Error);
    });
  });
});