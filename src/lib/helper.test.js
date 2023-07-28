import { describe, it, expect, afterEach, vi } from 'vitest';
import { getCatFactReal, getCatFactToBeMocked, getCatFactWithMockedFetch }from './helper.js'

describe('mocking examples', async () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    describe('sanity test', () => {
        it('adds 2 + 2 to equal 4', () => {
            expect(2 + 2).toBe(4);
        });
    });

    // commented out this test to save bandwidth
    it('get a cat fact from real api, slow and likely to fail if api is down', async () => {
        
        const result = await getCatFactReal()
        console.log(result)
        expect(result).toBeTruthy()
        expect(typeof result).toBe("string")
         
    })
    
    it('mock a single function from our module', async () => {
        const { mockedGetCatFact } = vi.hoisted(() => {
            return { mockedGetCatFact: vi.fn() }
        })
        
        vi.mock('./helper.js', async () => {
            const helper = await vi.importActual('./helper.js')
        
            return { ...helper,  
                getCatFactToBeMocked: mockedGetCatFact,
            }
        })

        mockedGetCatFact.mockReturnValue("Cats wag their tail when they're happy")

        const result = getCatFactToBeMocked()

        expect(result).toBe("Cats wag their tail when they're happy")
        expect(mockedGetCatFact).toHaveBeenCalled(1)
    });

    it('mock a method from a third part module inside a function from our module', async () => {
        function createFetchResponse(data) {
            return { json: () => new Promise((resolve) => resolve(data)) }
        }

        global.fetch = vi.fn()

        const fakeCatFactData = {
            fact: "Cats can pick up wifi on their whiskers",
        }

        fetch.mockResolvedValue(createFetchResponse(fakeCatFactData))

        const { mocked_fetch } = vi.hoisted(() => {
            return { mocked_fetch: vi.fn() }
        })
      
        const result = await getCatFactWithMockedFetch()

        expect(result).toBe("Cats can pick up wifi on their whiskers")
        expect(fetch).toHaveBeenCalled(1)
    });

});