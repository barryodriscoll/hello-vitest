import { describe, it, expect, afterEach, vi } from 'vitest';
import { getCatFactReal, getCatFactToBeMocked, getCatFactWithMockedFetch }from './helper.js'

describe('mocking examples', async () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('get a cat fact from real api, might fail if api is down', async () => {
        const result = await getCatFactReal()

        expect(result).toBeTruthy()
        expect(typeof result).toBe("string")
    })

    it('get a cat fact from our mock instead of real api', async () => {
        const { mockedGetCatFact } = vi.hoisted(() => {
            return { mockedGetCatFact: vi.fn() }
        })

        vi.mock('./helper.js', () => {
            return { getCatFactToBeMocked: mockedGetCatFact,
                     getCatFactReal: getCatFactReal }
        })

        mockedGetCatFact.mockReturnValue("Cats wag their tail when they're happy")

        const result = await getCatFact()

        expect(result).toBe("Cats wag their tail when they're happy")
        expect(mockedGetCatFact).toHaveBeenCalled()
    })

    it
})