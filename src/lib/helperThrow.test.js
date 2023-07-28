import { describe, it, expect } from "vitest"
import { getCatFactToBeMocked } from './helper.js' 

describe('testing a function throws error', () => {
    it('get getCatFactToBeMocked will throw an error if called, ensures mocking is happening', () => {
        expect(() => getCatFactToBeMocked()).toThrowError()
    });
});