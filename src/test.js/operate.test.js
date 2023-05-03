import React from  'react';
import operate from '../logic/operate';

describe('testing operate.js function', () => {
    test('expecct tobe a function', () => {
        expect(typeof operate()).toBe('function');
    })
})