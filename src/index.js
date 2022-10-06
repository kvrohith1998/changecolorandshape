// import "./styles.css";
var clickColorChange = document.getElementById("change-color");
var clickShapeChange = document.getElementById("change-shape");

clickColorChange.addEventListener("click",changecolor);
clickShapeChange.addEventListener("click", changeshape);

var outerDiv = document.getElementById("app");
var innerDiv = document.getElementById("shape-trigger");

var colorcount = 1;

function changecolor(){

    if(colorcount%3==0){
        outerDiv.style.backgroundColor = "aqua";
    }
    if(colorcount%3==1){
        outerDiv.style.backgroundColor = "#EED287";
    }
    if(colorcount%3==2){
        outerDiv.style.backgroundColor = "#B776FA"
    }
    colorcount = colorcount + 1;
}

var shapecount = 1;

function changeshape(){

    if(shapecount%3==0){
        innerDiv.style.borderRadius = "0%";
        innerDiv.style.borderBottom = "none";
        innerDiv.style.borderRight = "none";
    }
    if(shapecount%3==1){
        innerDiv.style.borderRadius = "50%";
    }
    if(shapecount%3==2){
        innerDiv.style.borderRadius = "0%";
        innerDiv.style.borderTopLeftRadius = "50%";
        innerDiv.style.borderBottomRightRadius = "50%";
    }
    shapecount = shapecount + 1;

}
