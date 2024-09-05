"use strict";
/**@typedef {Object} Month
 * @property {Array<string>} Months
 * @property {number} NumOf
*/
let Months = {};    
const FirstGroup = ["January", "March", "May", "July","August", "October", "December"];
const SecondGroup = ["April", "June", "September", "November"];
const February = "February";

Months[FirstGroup.toString()] = 31;
Months[SecondGroup] = 30;
Months[February] = 28;
console.log(Months);
console.log(Months["January"])