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
  selectedStyle: 'classic-fup',
};

const classicFaceUpBtn =
  shopItemsFU.faceUp.classic.getElementsByTagName("button");
const cosmoFaceUpBtn = shopItemsFU.faceUp.cosmo.getElementsByTagName("button");
const neonFaceUpBtn = shopItemsFU.faceUp.neon.getElementsByTagName("button");
const metalFaceUpBtn = shopItemsFU.faceUp.metal.getElementsByTagName("button");
const leatherFaceUpBtn =
  shopItemsFU.faceUp.leather.getElementsByTagName("button");
const liquidMetalFaceUpBtn =
  shopItemsFU.faceUp.liquidMetal.getElementsByTagName("button");
const oldFaceUpBtn = shopItemsFU.faceUp.old.getElementsByTagName("button");

classicFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e, shopItemsFU.faceUp.classic));
cosmoFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e, shopItemsFU.faceUp.cosmo));
neonFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e, shopItemsFU.faceUp.neon));
metalFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e, shopItemsFU.faceUp.metal));
leatherFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e, shopItemsFU.faceUp.leather));
liquidMetalFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e, shopItemsFU.faceUp.liquidMetal));
oldFaceUpBtn[0].addEventListener("click", (e) => handleChangeScin(e, shopItemsFU.faceUp.old));

function handleChangeScin(event, element) {
  const price = Number(event.target.dataset.price);
  console.log("price:", price);
  console.log('event.target:', event.target);
  console.log('element:', element);
  const cardRed = element.getElementsByClassName('item')[0];
  const cardBlack = element.getElementsByClassName('item')[1];
  console.log('cardRed:', cardRed);
  console.log('cardBlack:', cardBlack);
  const selector = cardRed.getElementsByClassName(`${cardRed.dataset['style']}`);
  console.log('selector:', selector);
  // const style = selector[0].style;
  // console.log('style:', style);
  const styleName = `${event.target.dataset.styleBtn}`;
  console.log('styleName:', styleName);
  shopItemsFU.selectedStyle = styleName;
  
  // document.querySelectorAll('.card-faceUp').forEach((card) => {
  //   card.style = style;
  //   console.log('card.style:', card.style);
    
  // });  
}
