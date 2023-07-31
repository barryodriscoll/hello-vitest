import { describe, it, expect} from 'vitest';
import { render, waitFor, screen } from '@testing-library/svelte';
import RealCatFact from './RealCatFact.svelte'
import { tick }  from 'svelte';

describe ('Test real catfact component', async () => {
    it("test that component displays cat fact from real api fetch", async () => {
        const {container, getByText} = render(RealCatFact)
        expect(getByText("fetching cat fact...")).toBeInTheDocument()
        await waitFor(() => getByText("cat fact has arrived!"));
        const mockedCatFact = screen.queryByText('Cats can pick up wifi on their whiskers')
        expect(mockedCatFact).toBeNull() // it doesn't exist
    });

    it("test get real cat fact with mock", async () => {
        function createFetchResponse(data) {
            return { json: () => new Promise((resolve) => resolve(data)) }
        }

        global.fetch = vi.fn()

        const fakeCatFactData = {
            fact: "Cats can pick up wifi on their whiskers",
        }

        fetch.mockResolvedValue(createFetchResponse(fakeCatFactData))

        const {container, getByText} = render(RealCatFact)
        expect(getByText("fetching cat fact...")).toBeInTheDocument()
        await waitFor(() => getByText("cat fact has arrived!"));
        expect(getByText('Cats can pick up wifi on their whiskers')).toBeInTheDocument()
    });
});