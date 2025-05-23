export const shopItemsShirt = {
  faceUp: {
    classic: document.getElementById("classicSh-skin"),
    elegantRed: document.getElementById("elegantRed-skin"),
    goldV: document.getElementById("goldV-skin"),
    cosmoViolet: document.getElementById("cosmoViolet-skin"),
    dice: document.getElementById("dice-skin"),
    treeB: document.getElementById("treeB-skin"),
    sepiya: document.getElementById("sepiya-skin"),
  },
};

const classicFaceUpBtn =
  shopItemsShirt.faceUp.classic.getElementsByTagName("button");
console.log("classicFaceUpBtn:", classicFaceUpBtn);

classicFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const elegantRedFaceUpBtn = shopItemsShirt.faceUp.elegantRed.getElementsByTagName("button");
console.log("elegantRedFaceUpBtn:", elegantRedFaceUpBtn);

elegantRedFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const goldVFaceUpBtn = shopItemsShirt.faceUp.goldV.getElementsByTagName("button");
console.log("goldVFaceUpBtn:", goldVFaceUpBtn);

goldVFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const cosmoVioletFaceUpBtn = shopItemsShirt.faceUp.cosmoViolet.getElementsByTagName("button");
console.log("cosmoVioletFaceUpBtn:", cosmoVioletFaceUpBtn);

cosmoVioletFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const diceFaceUpBtn = shopItemsShirt.faceUp.dice.getElementsByTagName("button");
console.log("diceFaceUpBtn:", diceFaceUpBtn);

diceFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const treeBFaceUpBtn = shopItemsShirt.faceUp.treeB.getElementsByTagName("button");
console.log("treeBFaceUpBtn:", treeBFaceUpBtn);

treeBFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

const sepiyaFaceUpBtn = shopItemsShirt.faceUp.sepiya.getElementsByTagName("button");
console.log("sepiyaFaceUpBtn:", sepiyaFaceUpBtn);

sepiyaFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e));

function handleChangeScin(event) {
  event.target;
  console.log("event.target:", event.target);
  const price = Number(event.target.dataset.price);
  
  console.log('price:', price);
  
}
