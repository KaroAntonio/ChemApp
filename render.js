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
    var typeSpace = 5;
    for (var i = 0; i < bonds.length; i++) {
        var b = bonds[i];
        var m1 = molecules[b['i1']],
            m2 = molecules[b['i2']];
        
        fill('black');
        stroke('black');
        var d = dist(m1['mcx'],m1['mcy'],m2['mcx'],m2['mcy']);
        for (j=0; j < b['type']; j++) {
            var xOffSet, yOffSet;
            var slope = Math.abs((m2['cy']-m1['cy'])/(m2['cx']-m1['cx']));
            if (slope >= 1) {
             xOffSet=1;
            yOffSet=0;
            }
            else {
              xOffSet=0;
            yOffSet=1;  
            }
            line(
            m1['cx']+(typeSpace*xOffSet*j),
            m1['cy']+(typeSpace*yOffSet*j),
            m2['cx']+(typeSpace*xOffSet*j),
            m2['cy']+(typeSpace*yOffSet*j)
            )
        
        }
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