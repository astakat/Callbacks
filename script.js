const huiswerkMaken = function (vak, callback) {
  setTimeout(function () {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
  }, 3000);
};

const klaarMetHuiswerk = function () {
  console.log("Kijk Paps/Mams ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk());
