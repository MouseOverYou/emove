var arrowGlowTex, arrowMatOff, arrowMatOn
var iconGlassOn, iconGlassOff

function ChangeMaterialProperties() {

    var redBay =new BABYLON.Color3.FromHexString("#ea1e1e");
    var blueBay =new BABYLON.Color3.FromHexString("#063c9d");
    var lightGrayBay = new BABYLON.Color3.FromHexString("#eeeeee");
    var darkGrayBay = new BABYLON.Color3.FromHexString("#323334");
    var blackBay = new BABYLON.Color3.FromHexString("#000000");
/*
    scene.getMaterialByName("logo_schwarz").metallic = 0.75
    scene.getMaterialByName("logo_schwarz").roughness = 0.1

    scene.getMaterialByName("grau").metallic = 0.3
    scene.getMaterialByName("grau").roughness = 0.3

    scene.getMaterialByName("weiss").metallic = 0.1
    scene.getMaterialByName("weiss").roughness = 0.1

    scene.getMaterialByName("DarkWood").metallic = 0
    scene.getMaterialByName("DarkWood").roughness = 0.1

    scene.getMaterialByName("leder_schwarz").metallic = 0
    scene.getMaterialByName("leder_schwarz").roughness = 0.75
    scene.getMaterialByName("leder_schwarz").bumpTexture.level = 0.1

    scene.getMaterialByName("leder_weiss").metallic = 0
    scene.getMaterialByName("leder_weiss").roughness = 0.75
    scene.getMaterialByName("leder_weiss").bumpTexture.level = 0.1
    

    scene.getMaterialByName("Metal").albedoColor = darkGrayBay
    scene.getMaterialByName("Metal").metallic = 1
    scene.getMaterialByName("Metal").roughness = 0.5

    scene.getMaterialByName("screenVert").metallic = 0.75
    scene.getMaterialByName("screenVert").roughness = 0
    scene.getMaterialByName("screenHor").metallic = 0.75
    scene.getMaterialByName("screenHor").roughness = 0
    scene.getMaterialByName("screenMain").metallic = 0.75
    scene.getMaterialByName("screenMain").roughness = 0

    scene.getMaterialByName("varyconMat").metallic = 0.4
    scene.getMaterialByName("varyconMat").roughness = 0

    //icons
    scene.getMaterialByName("iconMatGlass").alpha = 0.75
    scene.getMaterialByName("iconMatWhite").metallic = 1
    scene.getMaterialByName("iconMatWhite").roughness = 1
    scene.getMaterialByName("iconMatRed").metallic = 1
    scene.getMaterialByName("iconMatRed").roughness = 1

    arrowGlowTex = new BABYLON.Texture("./assets/arrow_glow.jpg", scene, true, false)
    arrowGlowTex.wrapU = 1
    arrowGlowTex.uOffset = 0.0
    arrowGlowTex.level = 2

    scene.getMaterialByName("recordbayMAt").albedoColor = blueBay
    arrowMatOff = new BABYLON.PBRMaterial("arrowMatOff", scene)
    arrowMatOff.albedoColor = blueBay
    arrowMatOff.metallic = 0.2
    arrowMatOff.roughness = 0.5

    arrowMatOn = new BABYLON.PBRMaterial("arrowMatOn", scene)
    arrowMatOn.albedoColor = blueBay
    arrowMatOn.emissiveColor = blueBay
    arrowMatOn.emissiveTexture = arrowGlowTex
    arrowMatOn.metallic = 0.2
    arrowMatOn.roughness = 0.5

    iconGlassOn = new BABYLON.PBRMaterial("iconGlassOn", scene)
    iconGlassOn.albedoColor = redBay;
    iconGlassOn.metallic = 0
    iconGlassOn. roughness = 0.5
    iconGlassOn.transparencyMode = 2
    iconGlassOn.alpha = 0.85

    iconGlassOff = new BABYLON.PBRMaterial("iconGlassOff", scene)
    iconGlassOff.albedoColor = redBay;
    iconGlassOff.metallic = 0
    iconGlassOff. roughness = 0.5
    iconGlassOff.transparencyMode = 2
    iconGlassOff.alpha = 0.85

*/
    /*
    var screenTex = new BABYLON.Texture("./assets/ascree.jpg", scene, true, false)
    var perlinText = new BABYLON.NoiseProceduralTexture("perlin", 254, scene);

    */

    //handle All at once
    scene.materials.forEach(mat => {
        //add reflections
        mat.reflectionTexture = hdrTexture;
    });
    
}

var iMat, iMatTextVideo, iMatText, mainScreenMat, mainScreenVid, videoMat
var colMat
var screenVideo, htmlVideo;
function CreateCustomMaterials(){
    //Infoboxes materials
    iMat = new BABYLON.StandardMaterial("iBoxMat", scene);
    iMat.disableLighting = true;

    iMatText = new BABYLON.Texture("./assets/Infobox.png", scene, true, true);
    iMatTextVideo = new BABYLON.Texture("./assets/Infobox_Video.png", scene, true, true);
    iMatText.uScale = -1;
    iMatTextVideo.uScale = -1;
    iMat.emissiveTexture = iMatTextVideo;
    iMat.opacityTexture = iMatTextVideo;

    colMat = new BABYLON.StandardMaterial("colMat", scene)
    colMat.wireframe = true
    colMat.alpha = 1
    
}
function ChangeMeshesMaterials(){
    //scene.getMeshByName("Screen_Main_1").material = mainScreenMat;
    //scene.getMeshByName("Screen_Main_2").material = mainScreenMat;
    //scene.getMeshByName("Screen_mitte_1").material = screenMitte1;
    //scene.getMeshByName("Screen_mitte_2").material = screenMitte2;
    //scene.getMeshByName("Screen_mitte_3").material = screenMitte3;
    //scene.getMeshByName("Screen_mitte_4").material = screenMitte4;
    scene.getMeshByName("Screen_Main_1").visibility = 0;
    scene.getMeshByName("Screen_Main_2").visibility = 0;
    scene.getMeshByName("Screen_mitte_1").visibility = 0;
    scene.getMeshByName("Screen_mitte_2").visibility = 0;
    scene.getMeshByName("Screen_mitte_3").visibility = 0;
    scene.getMeshByName("Screen_mitte_4").visibility = 0;
    scene.getMeshByName("Video_Screens").material = mainScreenMat
    scene.getMeshByName("arrow border 1").material = arrowMatOff
    scene.getMeshByName("arrow border 2").material = arrowMatOff
    scene.getMeshByName("arrow border 3").material = arrowMatOff
    scene.getMeshByName("arrow border 4").material = arrowMatOff
    scene.getMeshByName("arrow border 5").material = arrowMatOff
    scene.getMeshByName("arrow border 6").material = arrowMatOff
    scene.getMeshByName("arrow border 7").material = arrowMatOff

    
} 
