async function getCatFactReal() {

    const response = await fetch('https://catfact.ninja/fact?max_length=256');

    const catFact = await response.json();

    return catFact.fact

}

async function getCatFactToBeMocked() {
    throw new Error('This method is to be mocked and should never executed'); 
}

async function getCatFactWithMockedFetch() {

    const response = await fetch('https://catfact.ninja/fact?max_length=256');

    const catFact = await response.json();

    return catFact.fact

}

export { getCatFactReal, getCatFactToBeMocked, getCatFactWithMockedFetch }