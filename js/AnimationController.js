var tween = gsap.timeline();
var startTween = gsap.timeline();
var startCamTween = gsap.timeline();
var infoReveal = gsap.timeline();
var uiTween = gsap.timeline()
var buttonTween = gsap.timeline();
let origin = new BABYLON.Vector3(0, 0.26, 0);

let pulseAnimRate = 1;
let pulseAnimVector = new BABYLON.Vector3(1,1,1);


function TriggerLoopAnimations() {
    hsHolder.forEach(elem => {
        elem.rotation.y += 0.005;
    })

}

//rotate camera animations
function TravelRotateCamTo(CurrentSelection) {

    let selec = parseInt(CurrentSelection) - 1
    let meshTo = InfoColliders[selec];
    let v0 = new BABYLON.Vector3(0, 0.1, 0);
    let v1 = meshTo.getAbsolutePosition().subtract(v0);

    v1.normalize();
    let angleAlpha = Math.atan2(v1.z, v1.x)
    let angleBeta = 100;
 
    let angleInDegree = BABYLON.Tools.ToDegrees(angleAlpha) +180
    console.log("angle is " + angleInDegree)
    
    //change values per selection
    switch(CurrentSelection){
        case "1":
            camera.setTarget(origin)
            tween.to(camera, { alpha: 90 * (Math.PI / 180), beta: 95 * (Math.PI / 180),  radius: 1.5, duration: 1} )
            break;
        case "2":
            camera.setTarget(origin)
            tween.to(camera, { alpha: angleAlpha + Math.PI, beta: (angleBeta - 10) * (Math.PI / 180),  radius: 0.005, duration: 1} )
            break;
        case "3":
            camera.setTarget(origin)
            tween.to(camera, { alpha: angleAlpha + Math.PI, beta: (angleBeta - 5) * (Math.PI / 180),  radius: 0.1, duration: 1} )
            break;
        case "4":
            //varycon
            camera.setTarget(origin)
            tween.to(camera, { alpha: angleAlpha + Math.PI, beta: (angleBeta - 3.5) * (Math.PI / 180),  radius: 0.1, duration: 1} )
            break;
        case "5":
            camera.setTarget(origin)
            tween.to(camera, { alpha: angleAlpha + Math.PI, beta: (angleBeta - 5)* (Math.PI / 180),  radius: 0.07, duration: 1} )
            break;
        case "6":
            camera.setTarget(origin)
            tween.to(camera, { alpha: angleAlpha + Math.PI, beta: (angleBeta - 10) * (Math.PI / 180),  radius: 0.005, duration: 1} )
            break;
        case "7":
            camera.setTarget(origin)
            tween.to(camera, { alpha: angleAlpha + Math.PI, beta: angleBeta * (Math.PI / 180),  radius: 0.7, duration: 1} )
            break;
            
    }
}

function TravelRotateCamBack(){
    camera.setTarget(origin)
    tween.to(camera, { alpha: 90 * (Math.PI / 180), beta: 82 * (Math.PI / 180),  radius: 2.8, duration: 1} )
}


function BufferStartAnimation(){
    console.log("hola")
    startTween.set(camera, {radius: 1.5, alpha: 0 * (Math.PI / 180), beta: 0 * (Math.PI / 180)});
    startTween.to(camera, {radius:4, duration:3}, "<")
    
    startTween.from(Battery_P.rotation,{y: -360* (Math.PI / 180), duration:3, ease: "power4.inOut"}, "<")
    startTween.to(camera, { alpha: -90 * (Math.PI / 180), beta: 90 * (Math.PI / 180), duration: 3, ease: "power4.inOut" }, "<");

    startTween.fromTo(node4decke.position, {y: -24}, {y: 0, duration: 1, ease: "easeOutExpo"},">-1" )
    startTween.fromTo(node3bau.position, {y: -17}, {y: 0, duration: 1, ease: "easeOutExpo"},"<0.3" )
    startTween.fromTo(node2power.position, {y: -10}, {y: 0, duration: 1, ease: "easeOutExpo"},"<0.3" )
    
    startTween.pause();

}


function openInfoContent(){
    $('.bg-overlay').addClass('open');
    uiTween.fromTo(".project-overlay", {left: -1200, opacity: 0},{left: 0, opacity: 1, duration: 0.5, delay: 0.25})
}

function closeInfoContent(){
    uiTween.fromTo(".project-overlay", {left: 0, opacity: 1}, {left: -1200, opacity: 0, duration: 0.5})

}

function RevealInfopoints(state, selec){
    //if true show, else hide
    //To do: start animating by index of selected, only animate in when first time
    if(state){
        //alert(hsHolder[selec])
        if(selec == null){
            selec=0;
        }

        infoReveal.fromTo(hsHolder[selec].scaling, {x:0, y:0, z: 0}, {x: 1, y:1, z:1, delay: 1, duration:0.3, ease:"back"})
        for(var i = 0; i < hsHolder.length; i++){
            if( i == selec)
                continue;
            else{
                //console.log(i)
                infoReveal.fromTo(hsHolder[i].scaling, {x:0, y:0, z: 0}, {x: 1, y:1, z:1, duration:0.3, ease:"back"},">-0.25")
            }

        }
    }

    else{
        infoReveal.clear();
        hsHolder.forEach(hs => {
            infoReveal.fromTo(hs.scaling, {x: 1, y:1, z: 1}, {x: 0, y:0, z:0, duration:0.3, ease:"back.inOut(4)"},">-0.25");
        })
    
    }
}

function BufferButtonAnimation(){
    b_winkel.rotationQuaternion = null;
    buttonTween.from(b_stehle.scaling, {x:1, y:0, z:1, ease: "back.out(2)", duration: 1});
    buttonTween.from(b_winkel.scaling, {x:0, y:0, z:0, ease: "back.out(4)", duration: 0.75}, "<0.15");
    buttonTween.fromTo(b_winkel.rotation, {x:0}, {x: 15* (Math.PI / 180), ease: "back", duration:0.5}, ">-0.2" );
    buttonTween.from(b_press.position, {x:0, duration: 0.5}, ">-0.5")
    buttonTween.from(b_press.scaling, {x:0, y: 0, z: 0, duration: 0.1}, "<0.2")
    buttonTween.pause();
}

