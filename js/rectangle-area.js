function calculateRectangle() {
    // rectangle weight 
    const rectangleWithInput = document.getElementById('rectangle-with');
    const rectangleWithText = rectangleWithInput.value;
    const weight = parseFloat(rectangleWithText);
    //console.log(weight);

    // rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    //console.log(length);

    // Area calculate 
    const area = weight * length;
    //console.log(area);

    // display rectangle area
    const rectangleAreaSpain = document.getElementById('rectangle-area');
    rectangleAreaSpain.innerText = area;
}