
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

    lightLinks = new BABYLON.DirectionalLight("lightLinks", new BABYLON.Vector3(-60, -41, -90), scene);
    lightLinks.position = new BABYLON.Vector3(1, 1, 0);
    lightLinks.intensity = 2

    lightRechts = new BABYLON.DirectionalLight("lightLinks", new BABYLON.Vector3(120, -41, -90), scene);
    lightRechts.position = new BABYLON.Vector3(-1, 1, 0);
    lightRechts.intensity = 2

    /*
    // Sky material
    var skyboxMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.cameraOffset.x = 180;
    skyboxMaterial.luminance = 0.05;
    //skyboxMaterial._cachedDefines.FOG = true;

    // Sky mesh (box)
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
    skybox.material = skyboxMaterial;
    */

    //var ssao = new BABYLON.SSAORenderingPipeline('ssaopipeline', scene, 0.75, camera);
    PostEffects(scene);

    var count = 0;
    scene.onPointerUp = function () {

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