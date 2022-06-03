function sum(a, b) {
    return a + b;
}

function skirtumas(a, b) {
    return a - b;
}

const PI = 3.1415;

export default sum;  //vienas is budu exportuoti. 
export { sum, skirtumas, PI };  //kitas budas, galima irasyti i skliaustus daug variantu, kiek nori siustis visko is vieno failo.