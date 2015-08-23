var w = window.innerWidth,
    h = window.innerHeight/2;
 
var molecules = [],
    bonds = [],
    ends = [];
var objectRad = 20;

var highlighted = null,
    selected = null;

var numObjects = 0;

var rand_mol_button,
    place_mol_button;
    
var endTag = "CH3";

var placeMoleculeEnabled = false;

var isMethanePressed = false;
var isEthanePressed = false;
var isPropanePressed = false;
var isButanePressed = false;
var isPentanePressed = false;
var isHexanePressed = false;
var isHeptanePressed = false;

var chainLength = 0;

var nameMap = {
    1:'methane',
    2:'ethane',
    3:'propane',
    4:'butane',
    5:'pentane',
    6:'hexane',
    7:'heptane'
}

function setup() {
    console.log('Setup')
    
    createCanvas(w, h);
    
    //create a single circle
    rand_mol_button = createButton("Add Random Molecule","add_rand_mol");
    rand_mol_button.mousePressed(add_rand_mol);
    place_mol_button = createButton("Enable Place Molecule","place_mol");
    place_mol_button.mousePressed(toggle_place_mol);
    
    //Button to draw random chem
    
    //buttons for all the hydrocarbons
    var draw_met = createButton("Methane","methane_button");
    draw_met.mousePressed(
        function() {toggleChain('methane')});
    var draw_et = createButton ("Ethane","ethane_button");
    draw_et.mousePressed(
        function() {toggleChain('ethane')});
    var draw_pro = createButton ("Propane","propane_button");
    draw_pro.mousePressed(
        function() {toggleChain('propane')});
    var draw_but = createButton ("Butane","butane_button");
    draw_but.mousePressed(
        function() {toggleChain('butane')});
    var draw_pen = createButton ("Pentane","pentane_button");
    draw_pen.mousePressed(
        function() {toggleChain('pentane')});
    var draw_hex = createButton ("Hexane","hexane_button");
    draw_hex.mousePressed(
        function() {toggleChain('hexane')});
    var draw_hep = createButton ("Heptane","heptane_button");
    draw_hep.mousePressed(
        function() {toggleChain('heptane')});
}

function draw() {
    //Fresh coat of primer
    background('white');
    
    //Update for Objects
    updateHighlighted();
    updateSelected();
    analyzeMolecule();
    
    //Render
    renderBonds();
    //renderMolecules();
    renderHighlighted();
    renderChain();
    renderName();
    renderEndTags();
}
