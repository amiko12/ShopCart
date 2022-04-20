var array = [
  {
    //0
    id: 1,
    imagesrc: "phone1.jpg",
    price: "2000$",
    name: "samsung galaxy s8",
  },
  {
    //1
    id: 2,
    name: "Samsung Galaxy S8",
    price: "2330$",
    imagesrc: "phone2.jpg",
  },
  {
    //2
    id: 3,
    name: "Samsung Galaxy S9",
    price: "2100$",
    imagesrc: "phone3.jpg",
  },
  {
    //3
    id: 4,
    name: "Samsung Galaxy S10",
    price: "2200$",
    imagesrc: "phone4.jpg",
  },
];
var counter = 0;
var img1 = document.getElementById("img1");
var p1 = document.getElementById("p");
var h31 = document.getElementById("h3");
var wrapper = document.getElementById("wrapper");
document.getElementById("btn1").addEventListener("mouseover", () => {
  counter = 0;
});

document.getElementById("btn2").addEventListener("mouseover", () => {
  counter = 1;
});
document.getElementById("btn3").addEventListener("mouseover", () => {
  counter = 2;
});
document.getElementById("btn4").addEventListener("mouseover", () => {
  counter = 3;
});
var price = [];
function phone1() {
  ////////////////////////////////
  var div = document.createElement("div");
  wrapper.appendChild(div);
  div.className = "items";
  ////////////
  var img = document.createElement("img");
  img.className = "img";
  img.setAttribute("src", array[counter].imagesrc);
  div.appendChild(img);
  /////////
  var div1 = document.createElement("div");
  div.appendChild(div1);
  div1.className = "price";
  ////////
  var h3 = document.createElement("h3");
  div1.appendChild(h3);
  h3.innerText = array[counter].name;
  /////////////
  var p = document.createElement("p");
  div1.appendChild(p);

  p.className = "pricep";
  p.innerText = array[counter].price;
  var y = parseInt(array[counter].price);
  price.push(y);

  /////
  var sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum += price[i];
    document.getElementById("pricesum").innerText = sum + "$";
  }
  //////////////
  var a = document.createElement("button");
  div1.appendChild(a);
  a.className = "btn10";
  a.innerText = "Remove";
  a.onclick = function remove() {
    div.parentNode.removeChild(div);
    var x = sum - y;

    document.getElementById("pricesum").innerText = sum - x + "$";
    console.log(sum);
  };
  ///////////////////////

  /*  console.log(sum); */
}
