export const shopItemsFU = {
  faceUp: {
    classic: document.getElementById("classic-skin"),
    cosmo: document.getElementById("cosmo-skin"),
    neon: document.getElementById("neon-skin"),
    metal: document.getElementById("metal-skin"),
    leather: document.getElementById("leather-skin"),
    liquidMetal: document.getElementById("liquid-metal-skin"),
    old: document.getElementById("old-skin"),
  },
};

const classicFaceUpBtn =
  shopItemsFU.faceUp.classic.getElementsByTagName("button");
console.log("classicFaceUpBtn:", classicFaceUpBtn);

classicFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const cosmoFaceUpBtn = shopItemsFU.faceUp.cosmo.getElementsByTagName("button");
console.log("cosmoFaceUpBtn:", cosmoFaceUpBtn);

cosmoFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const neonFaceUpBtn = shopItemsFU.faceUp.neon.getElementsByTagName("button");
console.log("neonFaceUpBtn:", neonFaceUpBtn);

neonFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const metalFaceUpBtn = shopItemsFU.faceUp.metal.getElementsByTagName("button");
console.log("metalFaceUpBtn:", metalFaceUpBtn);

metalFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const leatherFaceUpBtn = shopItemsFU.faceUp.leather.getElementsByTagName("button");
console.log("leatherFaceUpBtn:", leatherFaceUpBtn);

leatherFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const liquidMetalFaceUpBtn = shopItemsFU.faceUp.liquidMetal.getElementsByTagName("button");
console.log("liquidMetalFaceUpBtn:", liquidMetalFaceUpBtn);

liquidMetalFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const oldFaceUpBtn = shopItemsFU.faceUp.old.getElementsByTagName("button");
console.log("oldFaceUpBtn:", oldFaceUpBtn);

oldFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

function handleChangeScin(event) {
  event.target;
  console.log("event.target:", event.target);
  const price = Number(event.target.dataset.price);
  
  console.log('price:', price);
  
}
