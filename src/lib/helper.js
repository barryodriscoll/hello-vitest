async function getCatFactReal() {

    const response = await fetch('https://catfact.ninja/fact?max_length=256');

    const catFact = await response.json();

    return catFact.fact

}

function getCatFactToBeMocked() {
    throw new Error('This method is to be mocked and should never be executed'); 
}

async function getCatFactWithMockedFetch() {

    const response = await fetch('https://bad_url_as_this_fetch_should_never_be_called');

    const catFact = await response.json();

    return catFact.fact

}

export { getCatFactReal, getCatFactToBeMocked, getCatFactWithMockedFetch }