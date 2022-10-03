const inputs = document.querySelectorAll('.angle-input');

const outputEl = document.querySelector('#output');

const isTriangleBtn = document.querySelector('#is-triangle-btn')



function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles
    (
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
    );
    if(sumOfAngles === 180)
  {
    
    // console.log("The angles form a triangle!");
    outputEl.innerText= "The angles form a triangle!";
  }
  else{
    // console.log("Oops!, the angles don't form a triangle");
    outputEl.innerText="Oops!, the angles don't form a triangle";

  }
}
isTriangleBtn.addEventListener("click",isTriangle);