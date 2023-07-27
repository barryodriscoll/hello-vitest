import { describe, it, expect, afterEach, vi } from 'vitest';
import { getCatFact } from './helper.js'

describe('test with mocking', async () => {
    it('get a cat fact from our mock instead of real api', async () => {
        const { mockedGetCatFact } = vi.hoisted(() => {
            return { mockedGetCatFact: vi.fn() }
        })

        vi.mock('./helper.js', () => {
            return { getCatFact: mockedGetCatFact }
        })

        mockedGetCatFact.mockReturnValue("Cats wag their tail when they're happy")

        const result = await getCatFact()

        expect(result).toBe("Cats wag their tail when they're happy")
        expect(mockedGetCatFact).toHaveBeenCalled()
    })
})