// Use getters and setters to control access to an object
function makeClass() {
    class Thermostat {
       constructor(temp) {
           this._temp = 5/9 * (temp - 32);
       }
       get temperature() {
           return this._temp;
       }
       set temperature(updatedTemp) {
           return this._temp = updatedTemp;
       }
    }
    return Thermostat;
   }

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);