function renderHighlighted() {
    if (highlighted != null) {
        noStroke();
        stroke('black');
        strokeWeight(5);
        noFill();
        //fill('purple');
        ellipse(highlighted['cx'], highlighted['cy'], objectRad,objectRad);
    }
}
function renderBonds() {
    for (var i = 0; i < bonds.length; i++) {
        var b = bonds[i];
        console.log()
        var m1 = molecules[b['i1']],
            m2 = molecules[b['i2']];
        
        fill('black');
        stroke('black');
        line(
            m1['cx'],
            m1['cy'],
            m2['cx'],
            m2['cy']
        )
    }
}
function renderMolecules() {
    for (var i = 0; i <  molecules.length; i++) {
        var o = molecules[i];
        fill('black');
        noStroke();
        ellipse(o['cx'], o['cy'], objectRad,objectRad);
    }
}
function renderName() {
    text(name,w/2, h/2);   
}
function renderChain() {
    if (isMethanePressed == true)
        drawMethane(0,0);
    else if (isEthanePressed == true)
        drawEthane(0,0);
    else if (isPropanePressed == true)
        drawPropane(0,0);
    else if (isButanePressed == true)
        drawButane(0,0);
    else if (isPentanePressed == true)
        drawPentane(0,0);
    else if (isHexanePressed == true)
        drawHexane(0,0);
    else if (isHeptanePressed == true)
        drawHeptane(0,0);
}
function renderEndTags() {
if (molecules.length==1)
    text("CH4",molecules[0]['cx'],molecules[0]['cy']);
else {
    for(i=0; i<ends.length; i++)
        text(endTag,ends[i]['cx'],ends[i]['cy']);
        }
}
function drawMethane(cx,cy) {
    createHydroCarbonChain(cx,cy,1);
}
function drawEthane(cx,cy) {
    createHydroCarbonChain(cx,cy,2);
}
function drawPropane(cx,cy) {
    createHydroCarbonChain(cx,cy,3);
}
function drawButane(cx,cy) {
    createHydroCarbonChain(cx,cy,4);
}
function drawPentane(cx,cy) { 
    createHydroCarbonChain(cx,cy,5);
}
function drawHexane(cx,cy) {
    createHydroCarbonChain(cx,cy,6);
}
function drawHeptane(cx,cy) {
    createHydroCarbonChain(cx,cy,7);
}