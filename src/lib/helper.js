async function getCatFact() {

    const response = await fetch('https://catfact.ninja/fact?max_length=256');

    const catFact = await response.json();

    return catFact.fact

}

export { getCatFact }