var arrowGlowTex, arrowMatOff, arrowMatOn
var iconGlassOn, iconGlassOff


function ChangeMaterialProperties() {

    var redBay =new BABYLON.Color3.FromHexString("#ea1e1e");
    var blueBay =new BABYLON.Color3.FromHexString("#063c9d");
    var metalGray = new BABYLON.Color3.FromHexString("#323434");
    var darkGrayBay = new BABYLON.Color3.FromHexString("#323334");
    var blackBay = new BABYLON.Color3.FromHexString("#000000");

    var metalAlbedo = new BABYLON.Texture("./assets/metal2/Metal012_2K_Color.jpg", scene, true, false)
    var metalNormal = new BABYLON.Texture("./assets/metal2/Metal012_2K_Normal.jpg", scene, true, false)
    var metalRoughness = new BABYLON.Texture("./assets/metal2/Metal012_2K_Roughness.jpg", scene, true, false)
    scene.getMaterialByName("gehause").albedoTexture = ""
    scene.getMaterialByName("gehause").bumpTexture = metalNormal
    scene.getMaterialByName("gehause").metallicTexture = metalRoughness
    scene.getMaterialByName("gehause").albedoColor = metalGray
    scene.getMaterialByName("gehause").roughness = 0.25
    scene.getMaterialByName("gehause").metallic = .75
    //scene.getMaterialByName("gehause").useRoughnessFromMetallicTextureGreen = true

    scene.getMaterialByName("divisions").metallic = .8
    scene.getMaterialByName("divisions").roughness = 0.05
    scene.getMaterialByName("divisions").emissiveColor = new BABYLON.Color3.FromHexString("#127876")

    scene.getMaterialByName("chip").metallic = .4
    scene.getMaterialByName("chip").roughness = 0

    scene.getMaterialByName("Top verbinder").emissiveColor = new BABYLON.Color3.FromHexString("#6F6F6F");
    scene.getMaterialByName("Top verbinder").metallic = 0

    scene.getMaterialByName("Outside Metal 1").albedoTexture = ""
    scene.getMaterialByName("Outside Metal 1").bumpTexture = metalNormal
    scene.getMaterialByName("Outside Metal 1").metallicTexture = metalRoughness
    scene.getMaterialByName("Outside Metal 1").albedoColor = metalGray
    scene.getMaterialByName("Outside Metal 1").roughness = 0.25
    scene.getMaterialByName("Outside Metal 1").metallic = 0.75

    scene.getMaterialByName("inside metal 1").albedoTexture = ""

    scene.getMaterialByName("Anode").albedoTexture = ""
    scene.getMaterialByName("Anode").bumpTexture = metalNormal
    scene.getMaterialByName("Anode").metallicTexture = metalRoughness
    scene.getMaterialByName("Anode").albedoColor = metalGray
    scene.getMaterialByName("Anode").roughness = 0.25
    scene.getMaterialByName("Anode").metallic = 0.75

    scene.getMaterialByName("Top Metal 1").albedoTexture = ""
    scene.getMaterialByName("Top Metal 1").albedoColor = metalGray
    scene.getMaterialByName("Top Metal 1").roughness = 0.25
    scene.getMaterialByName("Top Metal 1").metallic = 0.75

    scene.getMaterialByName("parts blau").roughness = 0.35
    scene.getMaterialByName("parts blau").metallic = 1

    scene.getMaterialByName("fusse").roughness = 0.35
    scene.getMaterialByName("fusse").metallic = 1

    scene.getMaterialByName("decke").albedoColor = new BABYLON.Color3.FromHexString("#292929");
    scene.getMaterialByName("decke").roughness = 0.5
    scene.getMaterialByName("decke").metallic = 0.25

    //icons
    scene.getMaterialByName("iconMatGlass").alpha = 0.75
    scene.getMaterialByName("iconMatWhite").metallic = 1
    scene.getMaterialByName("iconMatWhite").roughness = 1
    scene.getMaterialByName("iconMatRed").metallic = 1
    scene.getMaterialByName("iconMatRed").roughness = 1


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
    colMat.alpha = 0
    
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
