let hsHolder = []
let pulseHolder = [];
let LogosHolder = []
let ArrowsHolder = []
let overStation
let b_All, b_stand, b_press, b_winkel, b_stehle, b_button;

var ground

function AddGlow(){
        // Add lights to the scene
        var gl = new BABYLON.GlowLayer("glow", scene) //glow layer 
        gl.intensity = 0.7;
        scene.meshes.forEach(elem => {
            if(elem.name.startsWith("Screen_") || elem.name =="Video_Screens"){
                gl.addExcludedMesh(elem)
            }
        });

}

function SpawnHotspots(){
    let hsCounter = 0;
    let arrowCounter = 0;
    let Hs_Clones = []

    //TO DO: ALL LOOPS IN ONE
    scene.meshes.forEach(elem => {
        //make all unpickable
        elem.isPickable = false; 

        if(elem.name.startsWith("ref_Hotspot_")){
            //elem.setEnabled(false)
            elem.visibility = 0;
            elem.scaling = new BABYLON.Vector3(0.25,0.25,0.25)
            hsCounter ++;
            //create icon
            var clone = HSIconTask.loadedMeshes[0].instantiateHierarchy(elem, undefined, (source, clone) => {
                //clone.position = elem.position;
                clone.scaling = new BABYLON.Vector3(1, 1, 1);
            })
            //clone.position = elem.position;
            clone.rotation = BABYLON.Quaternion.FromEulerAngles(0, Math.random() * 2 * Math.PI, 0);
            clone.name = "HS Clone " + hsCounter

            hsColl = new BABYLON.MeshBuilder.CreateBox("hs Collider " + hsCounter, { height: 40, width: 40, depth: 10 }, scene)
            hsColl.material = colMat
            hsColl.parent = clone;
            hsColl.isPickable = true;
            //AllowMouseOverMesh(hsColl)
            BABYLON.Tags.EnableFor(hsColl)
            BABYLON.Tags.AddTagsTo(hsColl, "hs_coll");
            hsHolder.push(clone);
            //console.log(elem.getChildMeshes(false)[3])
            pulseHolder.push(elem.getChildMeshes(false)[3])
        }
    });

}

function AllowMouseOverMesh(mesh){
    mesh.actionManager = new BABYLON.ActionManager(scene);
	
	//ON MOUSE ENTER
	mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(ev){	
        //mesh.material.emissiveColor = BABYLON.Color3.Blue();
        overStation = mesh.name.split('Arrow Collider ')[1];
        overStation = "arrow border " + overStation
        //console.log("mouse over " +  overStation)
        scene.getMeshByName(overStation).material = arrowMatOn
	}));
	
	//ON MOUSE EXIT
	mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(ev){
        //mesh.material.emissiveColor = BABYLON.Color3.Black();
        scene.getMeshByName(overStation).material = arrowMatOff
        overStation = undefined;
	}));
}
