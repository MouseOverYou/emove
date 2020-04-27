var slot_P, Messe_P
var hdrTexture
var SceneMeshes
var slotMeshTask, startMeshTask, sphere, MesseLoaderTask, HSIconTask, HS_P, LogosLoaderTask, MesseCollidersLoaderTask, Battery_P, BatteryTask

function LoadAssets(scene, assetsManager) {

    //ENV TASK
    var envTask = assetsManager.addCubeTextureTask("envTask", "./assets/environment.dds");

    envTask.onSuccess = function (task) {
        //alert('HDR LOADED');
        hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("./assets/environment.dds", scene);
        hdrTexture.rotationY = 140*(Math.PI/180);

        // Create Skybox
        var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
        hdrSkybox.visibility = 0
        var hdrSkyboxMaterial = new BABYLON.PBRMaterial("hdrSkyBox", scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.microSurface = 1.0;
        hdrSkyboxMaterial.disableLighting = true;
        hdrSkybox.material = hdrSkyboxMaterial;
        hdrSkybox.infiniteDistance = false;

    }
    envTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }

    Battery_P = new BABYLON.TransformNode("Battery_P");
    BatteryTask = assetsManager.addMeshTask("", "", "./assets/Henkel Emove batery web.glb")

    BatteryTask.onSuccess = function (task) {
        
        task.loadedMeshes[0].position.x = 0
        task.loadedMeshes[0].position.y = 0
        task.loadedMeshes[0].position.z = 0
        task.loadedMeshes[0].parent = Battery_P
        Battery_P.position.x = 0
        Battery_P.position.y = 0
        Battery_P.scaling = new BABYLON.Vector3(0.02, 0.025, 0.025)

    }

    BatteryTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }


    HS_P = new BABYLON.TransformNode("HS_P");
    HSIconTask = assetsManager.addMeshTask("", "", "./assets/HS_Icon.glb")

    HSIconTask.onSuccess = function (task) {
        
        task.loadedMeshes[0].position.x = 0
        task.loadedMeshes[0].position.y = 0
        task.loadedMeshes[0].position.z = 0
        task.loadedMeshes[0].parent = HS_P
        task.loadedMeshes[0].setEnabled(false)
        HS_P.position.x = 0
        HS_P.position.y = 0
        HS_P.scaling = new BABYLON.Vector3(0.003, 0.003, 0.003)

    }

    HSIconTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }


    //FINISH

    assetsManager.onFinish = function (task) {
        ChangeMaterialProperties()
        CreateCustomMaterials()
        SpawnHotspots()

    }
    //Asset Manager check
    assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
        engine.loadingUIText = 'We are loading the scene. ' + remainingCount + ' out of ' + totalCount + ' items still need to be loaded.';
    };

    assetsManager.load();
}

