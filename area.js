const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateProductOfSides(a,b){
  const productOfSides = a*b;
  return productOfSides;

}

function calculateArea(){
  const productOfSides = calculateProductOfSides(Number(sides[0].value), Number(sides[1].value));
  const valueOfArea = (0.5)*(productOfSides);
  output.innerText = "Area of triangle is " + valueOfArea.toFixed(2);
}

areaBtn.addEventListener("click", calculateArea)



































//  function calculateArea (base,height){
//     const area= 1/2* base*height;
//     return area;
    
//  }


// areaBtn.addEventListener("click", calculateArea);



// //  function productOfSides(a,b) {
// //   const sideProduct = a * b;
// //  return sideProduct;
// // }

// function calculateArea() {
//   // if (base > 0 && height > 0){
//     const area = calculateArea(Number(sides[0].value), Number(sides[1].value));

    
//       output.innerText = `The area of triangle with the entered values is ${area} Cm-Square`;
//   }
//     // else {
//     //  output.innerText = `Input Error: Please Enter valid values in all the fields!`;
  
//     // }
  
  
 


