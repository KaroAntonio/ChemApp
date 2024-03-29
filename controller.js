function updateHighlighted() {
    highlighted = null;
    for (var i = 0; i < molecules.length; i++) {
        var o = molecules[i];
        var d = dist(o['cx'], o['cy'], mouseX, mouseY);
        if (d < objectRad/2) {
            highlighted = o;
            return true;
        }
    }
    //highlight selected
    if (selected != null) {
        highlighted = selected;
        return true;
    }
    
    return false;
}
function buildName () {
if (chainLength != 0)
    name = prefixName[chainLength] + suffixName[maxNumBond];   
}

function updateSelected() {
    
    if (mouseIsPressed) {
        if (selected != null) {
            selected['cx'] = mouseX;
            selected['cy'] = mouseY;
        }
    }
}
function mouseClicked() {
  var o = bondClicked();
}

function bondClicked() {
    var p = {x: mouseX, y: mouseY};
  for (i=0; i<bonds.length; i++) {
      var b = bonds [i];
      var m1 = molecules [b['i1']]
      var m2 = molecules [b['i2']]
      var v = {x: m1['cx'], y: m1['cy'] };
        var w = {x: m2['cx'], y: m2['cy'] };
      var d = distToSegment(p,v,w);
      if (d < selectRange) {
          if (b['type']==3)
              b['type']=1;
          else
              b['type']++;
          return b;
      }
  }
    return null;
    
}
function mousePressed() {
    var o = objectClicked()
    if (o == null) {
        
        if (placeMoleculeEnabled) {
            console.log('click')
            if (mouseX < w && mouseY < h)
                addMolecule(mouseX,mouseY);
        }
    }
    else selected = o;
}

function mouseReleased() {
    selected = null;
}

function toggle_place_mol() {
    if (!placeMoleculeEnabled) {
        placeMoleculeEnabled = true;
        place_mol_button['elt'].innerHTML = "Disable Place Molecule";
    } else {
        placeMoleculeEnabled = false;
        place_mol_button['elt'].innerHTML = "Enable Place Molecule";
    }
    
}

function add_rand_mol() {
    var cx = Math.random() * (w - 50 * 2) + 50;
    var cy = Math.random() * (h - 50 * 2) + 50;
    
    addMolecule(cx,cy);
}

function addMolecule(cx,cy) {
    var last_mol = molecules[molecules.length-1]
    var mol = createMolecule(cx,cy)
    molecules.push(mol);
    //Bond the last two molecules
    if (last_mol != undefined)
        bonds.push(createBond(mol['i'], last_mol['i'],1))
}

function createBond(i1, i2, bondType) {
    //returns a bond object
    var b = {
        'i1':i1,
        'i2':i2,
        'type':bondType,
    }
    
    return b;
}

function createMolecule(cx, cy) {
    //returns a molecule object
    //increment index
    var o = {
        'i':numObjects,
        'cx':cx,
        'cy':cy,
    }
    numObjects++;
    return o;
}

function getMolecule(index) {
    //get molecule by index
    for (var i = 0; i < molecules.length; i++) {
        var m = molecules[i];
        if (m['i'] == index)
            return m;
    }
    return null;
}

function objectClicked() {
    //Returns object is object was clicked, else null
    for (var i = 0; i < molecules.length; i++) {
        var o = molecules[i];
        var d = dist(o['cx'], o['cy'], mouseX, mouseY);
        if (d < objectRad) {
            console.log('Object Clicked')
            return o;
        }
    }
    return null;
}
function createHydroCarbonChain (cx,cy,n) {
    molecules=[];
    //create molecules
    for (var i = 0; i < n; i++) {
        //fconsole.log (i)
        var mcx = 0, mcy = 0;
        if (i==0) {
            mcx=cx +15;
            mcy=cy+15;
        }
        else {
         mcx=cx+15+(75*i);
            if (i%2==0) {
                mcy=cy+15   
            }
            else {
                mcy=cy+15+75
            }
        }
        var mol = {
            'cx':mcx,
            'cy':mcy,
        }
        molecules.push(mol)
    }
    //create bonds
    bonds = [];
    for (var i = 0;i < (n-1); i++) {
        var b = createBond (i,i+1,1);
        bonds.push(b);
    }
    //move these to render function
}
function analyzeMolecule() {
    findEnds();
    findLongestChain();
}
function addMolecule() {
 
    var adder = molecules.length+1;
    createHydroCarbonChain(0,0,adder);

}
function findEnds() {
    ends = [];
    if (molecules == 1)
        ends.push(molecules[0]);
    for (i = 0; i < molecules.length; i++){
        var tracker = 0;
        for (j=0; j <bonds.length; j++){
            if (bonds[j]['i1'] == i)
                tracker++;
            if (bonds[j]['i2'] == i)
                tracker++;
        }
        if (tracker < 2)
            ends.push(molecules[i]);
    }   
}
function findLongestChain() {
 chainLength = molecules.length;   
}
 