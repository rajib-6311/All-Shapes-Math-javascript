function allShapesCalculateFunction() {
    const parallelogramBase = getValueById('parallelogram-base');
    //console.log(parallelogramBase);
    const parallelogramHeight = getValueById('parallelogram-height');
    //console.log(parallelogramHeight);
    
    // Area calculate 
    const area = parallelogramBase * parallelogramHeight;
    // console.log(area);
    
    // display area call
    setInnerText('parallelogram-area', area);
}

// All value passes function
function getValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// display area 
function setInnerText(elementId,area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
    
}