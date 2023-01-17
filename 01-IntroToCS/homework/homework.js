'use strict';

function BinarioADecimal(num) {
   var numReversed = num.toString().split("").reverse().join("");

   var decimal = 0;
   for (let i = 0; i < numReversed.length; i++) {
      if (numReversed[i] !== "0") {
         decimal += 2 ** i;
      }
   }
   return decimal;
}

function DecimalABinario(num) {
   if (num > 1) {
      var decimal = [];
      while (num > 1) {
         decimal.unshift((num%2));
         console.log("Num: "+num.toString());
         num = Number((Math.floor(num / 2)).toString());
      }
      decimal.unshift(1);
      console.log("Decimal: ",decimal);
      return decimal.join("");
   }
   return num;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
