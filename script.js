function openEnvelope() {
    document.querySelector('.flap').style.transform = "rotateX(180deg)";
    document.querySelector('.letter').style.opacity = "1";
    document.querySelector('.letter').style.transform = "translateY(0px)";
    
    // Hide the heart when the envelope is opened
    document.querySelector('.heart').style.opacity = "0";
}
