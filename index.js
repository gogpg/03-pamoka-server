console.log('labas')

//////////export inmport ///////////////////////

import sum from './sum.js';   //jei norime kito pavadinimo galima rasyti (import sum as kotletas from './sum.js') atsisiunciame is sum.js failo, ko mums reikia, pavadinima galima keisti.

import { sum, skirtumas, PI } from './sum.js'; //pavadinimo negalima keisti, sunkiau suklysti, rekomenduoja dazniau naudoti sita varianta. I skliaustus galima irasyti daug dalyku, ka siuntiesi.


const app = {};
app.init = () => {
    console.log('inicijuojame programa...')
    console.log(sum(7, 3));
    console.log(skirtumas(10, 5));
}
app.init();

export default app; //issiunciame funkcija.
export { app };    //kitas variantas, galima daugiau dalyku irasyti i skliaustus.



