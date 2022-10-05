const sides = documeny.querySelectorAll(".side-input");
const areaButton = document.querySelector("#area-btn");
const output = document.querySelector("#output");


function calculateArea (base,height){
    const productArea= 1/2* base*height;
    return area;
    
}


areaButton.addEventListener("click", caluclateArea);



// function productOfSides(a, b) {
//   const sideProduct = a * b;
//   return sideProduct;
// }

function calculateArea() {
  var base = Number(sides[0].value);
  var height = Number(sides[1].value);

  if (base > 0 && height > 0) {
    const sideProduct = productOfSides(base, height);
    const area = 1 / 2 * (sideProduct);
    message.innerText = `The area of triangle with the entered values is ${area} Cm-Square`;

  } else {
    message.innerText = `Input Error: Please Enter valid values in all the fields!`;

  }
}


