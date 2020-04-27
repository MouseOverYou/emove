
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var myGUI
var fillLight, lightLinks, lightRechts, shadowGenerator
var camera;
var CurrentSelection


/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    var assetsManager = new BABYLON.AssetsManager(scene)
    LoadAssets(scene, assetsManager)
    camera = new BABYLON.ArcRotateCamera("Camera", 270 * (Math.PI / 180), 90 * (Math.PI / 180), 4, new BABYLON.Vector3(0, 0.5, 0), scene);
    camera.minZ = 0.1
    camera.panningDistanceLimit = 0;
    camera.pinchToPanMaxDistance = 0;
    camera.panningSensibility = 0
    camera.lowerRadiusLimit = 1.5
    camera.upperRadiusLimit = 4
    camera.angularSensibilityX = 3000
    camera.angularSensibilityy = 3000
    camera.wheelPrecision = 100
    camera.attachControl(canvas, true, true, false);
    var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 0, -1), scene);

    
    lightLinks = new BABYLON.DirectionalLight("lightLinks", new BABYLON.Vector3(-60, -41, 90), scene);
    lightLinks.position = new BABYLON.Vector3(1, 1, 0);
    lightLinks.intensity = 2

    lightRechts = new BABYLON.DirectionalLight("lightLinks", new BABYLON.Vector3(120, -41, 90), scene);
    lightRechts.position = new BABYLON.Vector3(-1, 1, 0);
    lightRechts.intensity = 2
    

    scene.clearColor = BABYLON.Color3.White();
    PostEffects(scene);
    //var floor = new BABYLON.MeshBuilder.CreateBox("floor", {height: 0.01, width: 25, depth: 25}, scene);

    // On click event, request pointer lock
    scene.onPointerDown = function (evt) {
        var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return (BABYLON.Tags.MatchesQuery(mesh, "arrow_coll") || BABYLON.Tags.MatchesQuery(mesh, "hs_coll")) && mesh.isPickable; });
        if (pickInfo && pickInfo.pickedMesh && BABYLON.Tags.MatchesQuery(pickInfo.pickedMesh, "arrow_coll")) {
            console.log(pickInfo.pickedMesh.name);
            CurrentSelection = pickInfo.pickedMesh.name.split('Arrow Collider ')[1];
            console.log(CurrentSelection)
            TravelRotateCamTo(CurrentSelection);//send corresponding infobox to travel to
            show_backbutton();
            RevealInfopoints(true, parseInt(CurrentSelection) - 1)
            //after time show all info buttons
        }
        else if (pickInfo && pickInfo.pickedMesh && BABYLON.Tags.MatchesQuery(pickInfo.pickedMesh, "hs_coll")) {
            console.log(pickInfo.pickedMesh.name);
            CurrentSelection = pickInfo.pickedMesh.name.split('hs Collider ')[1];
            openInfoUI(CurrentSelection)
            $('.x-icon').addClass('open');
        }

}
    return scene;
};
/******* End of the create scene function ******/

var scene;
var videoLoaded = false;
var renderLoopEnabled = false;

function run() {
    scene = createScene(); //Call the createScene function
    //scene.debugLayer.show();
    
    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
        scene.render();
        var fpsLabel = document.getElementById("fpsLabel");
        fpsLabel.innerHTML = engine.getFps().toFixed() + " fps";

    });    
}

run();


// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});