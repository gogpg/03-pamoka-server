
//////////export inmport ///////////////////////

const app = {};
app.init = () => {
    console.log('inicijuojame programa...')
    console.log(sum(7, 3));
}
app.init();

export default app;  //issiunciu savo funkcija.
export {app, penki, sesi}  //issiunciu kelias savo funkcijas

  //atsisiunciu in faila ka noriu is kito failo.
import {sum} from './sum.js'

// import {app, penki, sum} from './sum.js'; (Galima daug prirasyti, ka noriu atsisusti is kito js failo.)

