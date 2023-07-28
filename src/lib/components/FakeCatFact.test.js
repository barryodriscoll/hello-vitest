import { describe, it, expect} from 'vitest';
import { render } from '@testing-library/svelte';
import FakeCatFact from './FakeCatFact.svelte'

describe ('Test fake catfact component', () => {
    it("test that component displays cat fact", () => {
        const {getByText} = render(FakeCatFact)
        expect(getByText('fake cat fact')).toBeInTheDocument()
    })
})