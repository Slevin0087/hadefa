export const shopItemsShirt = {
  shirt: {
    classic: document.getElementById("classicSh-skin"),
    elegantRed: document.getElementById("elegantRed-skin"),
    goldV: document.getElementById("goldV-skin"),
    cosmoViolet: document.getElementById("cosmoViolet-skin"),
    dice: document.getElementById("dice-skin"),
    treeB: document.getElementById("treeB-skin"),
    sepiya: document.getElementById("sepiya-skin"),
  },
  selectedStyle: "classic-shirt",
};

const classicShirtBtn =
  shopItemsShirt.shirt.classic.getElementsByTagName("button");
const elegantRedShirtBtn =
  shopItemsShirt.shirt.elegantRed.getElementsByTagName("button");
const goldVShirtBtn = shopItemsShirt.shirt.goldV.getElementsByTagName("button");
const cosmoVioletShirtpBtn =
  shopItemsShirt.shirt.cosmoViolet.getElementsByTagName("button");
const diceShirtBtn = shopItemsShirt.shirt.dice.getElementsByTagName("button");
const treeBShirtBtn = shopItemsShirt.shirt.treeB.getElementsByTagName("button");
const sepiyaShirtBtn =
  shopItemsShirt.shirt.sepiya.getElementsByTagName("button");

classicShirtBtn[0].addEventListener("click", (e) =>
  handleChangeScin(e, shopItemsShirt.shirt.classic)
);
elegantRedShirtBtn[0].addEventListener("click", (e) =>
  handleChangeScin(e, shopItemsShirt.shirt.elegantRed)
);
goldVShirtBtn[0].addEventListener("click", (e) =>
  handleChangeScin(e, shopItemsShirt.shirt.goldV)
);
cosmoVioletShirtpBtn[0].addEventListener("click", (e) =>
  handleChangeScin(e, shopItemsShirt.shirt.cosmoViolet)
);
diceShirtBtn[0].addEventListener("click", (e) =>
  handleChangeScin(e, shopItemsShirt.shirt.dice)
);
treeBShirtBtn[0].addEventListener("click", (e) =>
  handleChangeScin(e, shopItemsShirt.shirt.treeB)
);
sepiyaShirtBtn[0].addEventListener("click", (e) =>
  handleChangeScin(e, shopItemsShirt.shirt.sepiya)
);

function handleChangeScin(event, element) {
  const price = Number(event.target.dataset.price);
  console.log("price:", price);
  console.log("event.target:", event.target);
  console.log("element:", element);
  const styleName = `${event.target.dataset.styleBtn}`;
  console.log("styleName:", styleName);
  shopItemsShirt.selectedStyle = styleName;
}
