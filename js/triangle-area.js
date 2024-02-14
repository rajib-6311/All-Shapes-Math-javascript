function calculateTriangle() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    //console.log(typeof triangleBaseText);

    // triangle-height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
   // console.log(triangleHeightText);

    // calculate Triangle area
    const area = 0.5 * base * height;
    // console.log('area', area);

    // display Triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

    
}