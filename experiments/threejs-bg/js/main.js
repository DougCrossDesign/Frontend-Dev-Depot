var composer, renderer, mousex, mousey, dwidth, dheight, clock;
var lights = new Array;
var showstats = false;

var currentScene;
var currentCamera;

//scene1
var scene1;
var scene1_active;
var scene1_camera;
var scene1_plane;
var scene1_tris = new Array();
var scene1_plane_seg;
var scene1_trigeo;
var scene1_objFieldTweens = new Array;
var scene1_objField;

//scene2
var scene2;
var scene2_active;
var scene2_camera;

init();
update();
create_scene1();


/******************************************************/
/* NOTES / TODO
/******************************************************/
/*

- Tween scene array for pause all tweens
  when scene is not active.

- scene 1 return w/ opti

- scene 2 glitch spehere - pulse

*/


/******************************************************/
/* INIT
/******************************************************/

function init() {

	clock = new THREE.Clock();
	scene1 = new THREE.Scene();
	scene2 = new THREE.Scene();

    currentScene = scene1;
    scene1_camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
    scene1_camera.position.z = 250;
    scene1.add(scene1_camera);
    currentCamera = scene1_camera;

    if(showstats){
	    stats = new Stats();
	    document.body.appendChild( stats.domElement );
    }

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true  } );

    window.addEventListener( 'resize', onWindowResize, false );
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    dwidth = window.innerWidth;
    dheight = window.innerHeight;

    load_scene1();

}


/******************************************************/
/* UPDATE
/******************************************************/
function update() {

	if(showstats){
    	stats.update();
    }

    if(scene1_active){
    	scene1_update();
    }

    requestAnimationFrame(update);
    render();
}

/******************************************************/
/* RENDER
/******************************************************/
function render() {
	var delta = clock.getDelta(),
        time = clock.getElapsedTime() * 10;

	if(scene1_active){
    	scene1_render();
    }

	renderer.render(currentScene, currentCamera);
}


/******************************************************/
/* SCENE BUILDERS
/******************************************************/

/**S1**************************************************/
function load_scene1(){
	var loader = new THREE.JSONLoader();
    loader.load( "res/obj/tri-sm.json", function(geometry){
    	scene1_trigeo = geometry;
    });
}

function create_scene1(){
	scene1_active = true;
	scene1.fog = new THREE.FogExp2( 0x365bb9, 0.0012 );
	addLight(0,100,100,0x324167,1,2000);
    scene1_plane();
}

/**S2**************************************************/
function create_scene2(){
	scene2_active = true;
	currentScene = scene2;

    scene2_camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
    scene2_camera.position.z = 100;
    scene2.add(scene2_camera);
    currentCamera = scene2_camera;

    var geometry = new THREE.SphereGeometry( 3, 16, 16 );
    var material = new THREE.MeshBasicMaterial({color: 0xffffff});
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.z=-53;
    scene2.add( sphere );
}


/******************************************************/
/* SCENE LEAVERS
/******************************************************/
function leave_scene1(){

	TweenMax.to(scene1_plane.material,1, {opacity:0, delay: 0});

	for (i = 0; i < scene1_objField.length; i++){
		scene1_objFieldTweens[i].kill();
		TweenMax.to(scene1_objField[i].material, 1, {opacity:0, delay: 0, repeat:0, yoyo: false });
	}

	for (i = 0; i < scene1_tris.length; i++){
		TweenMax.to(scene1_tris[i].position,.5, {z:100, delay: (.05*i), ease: Power1.easeOut});
	}

	setTimeout(end_scene1, 1000);
}

function end_scene1(){
	scene1_active = false;
	create_scene2();
}

/******************************************************/
/* SCENE RETURNS
/******************************************************/


/******************************************************/
/* SCENE UDPATE
/******************************************************/
function scene1_update(){


}

function scene1_render(){
	scene1_plane.geometry.verticesNeedUpdate = true;
}

/******************************************************/
/* OBJECT BUILDERS
/******************************************************/
function addLight(x,y,z,color,int,dist){
	var light = new THREE.PointLight( color, int, dist );
	lights.push(light);
    light.position.set( x, y, z );
    currentScene.add( light );
}

function scene1_plane(){
	scene1_plane_seg = 45;
	var geometry = new THREE.PlaneGeometry( 2500, 2500, scene1_plane_seg, scene1_plane_seg );
    var material = new THREE.MeshPhongMaterial( {  side: THREE.DoubleSide, color: 0xffffff , shininess: 1, shading: THREE.FlatShading, opacity: 0, transparent: true } )
    scene1_plane = new THREE.Mesh( geometry, material);
    TweenMax.to(material,3, {opacity:1, delay: 0});
    scene1_plane.rotation.x =  2.75;
    scene1_plane.position.y =- 90;
    scene1_plane.position.z =- 435;
    scene1_plane.dynamic = true;
    currentScene.add(scene1_plane);
    vertexPlaneAnimate();
}




/******************************************************/
/* CREATE OBJECT FIELD
/******************************************************/
function createObjectField(total, rangeX, rangeY, rangeZ, startX, startY, startZ, type, size, complexity, matertial, matargs, randRotation, tweenType, xExclusion){

	var objectArray = new Array();
	var mats = new Array();
    var meshes = new Array();

    switch(type) {
	    case "octahedron":
	        var geometry = new THREE.OctahedronGeometry(size, complexity);
	        break;

	    case "TetrahedronGeometry":
	        var geometry = new THREE.TetrahedronGeometry(size, complexity);
	        break;

	    default:
	       break;
	}

	if(xExclusion){
		var low = (rangeX /2) - (xExclusion/2);
		var high = (rangeX /2) + (xExclusion/2);
	}

	for (var i = 0; i <= total; i++){

  		if(xExclusion){

  			var oX = Math.random() * rangeX;
  			while(oX > low && oX < high){
				oX = Math.random() * rangeX;
			}

			oX -= (rangeX/2);

 		} else {
  			var oX = Math.random() * rangeX - (rangeX/2);
  		}

		var oY = Math.random() * rangeY - (rangeY/2);
		var oZ = Math.random() * rangeZ - (rangeZ/2);

		if(randRotation){
			var rX = Math.random() * 1.6;
			var rY = Math.random() * 1.6;
			var rZ = Math.random() * 1.6;
		}

		switch(matertial) {
			case "basic" :
				mats[i] = new THREE.MeshBasicMaterial(matargs);
				break;
			case "phong" :
				mats[i] = new THREE.MeshPhongMaterial(matargs);
			default:
				break;
		}

		meshes[i] = new THREE.Mesh(geometry, mats[i]);

		if(tweenType){
			fieldObjectTweener(meshes[i] , tweenType);
		}

		meshes[i].position.set(oX+startX,oY+startY,oZ+startZ);
		meshes[i].rotation.set(rX,rY,rZ);
		scene1.add(meshes[i]);
	}
	return meshes;
}

function fieldObjectTweener(mesh, type){
	switch(type){
		case "custom1":
			var tween = new TweenMax.to(mesh.material, Math.random()*10+2, {opacity:.1, delay:Math.random()*15, repeatDelay:0, repeat:-1, yoyo:true, ease:Quad.easeInOut});
			scene1_objFieldTweens.push(tween);
			break;
	}
}


/******************************************************/
/* ANIMATORS
/******************************************************/
function fieldAnim_Custom1(objects){
	for(var i = 0; i < objects.length; i++){
		objects[i].position.y += .1;
		objects[i].rotation.x += .01;
		objects[i].rotation.y += .01;
		//objects[i].rotation.z += .01;
		if(objects[i].position.y > 200){
			objects[i].position.y = -200
		}
	}
}

function noiseTweenVertex(i) {
    var offset = (Math.random() * ( (scene1_plane.geometry.vertices[ i ].x/5) + (scene1_plane.geometry.vertices[ i ].y/5) ) );
    var timeoffset =(Math.random() * 5)+.5;
    TweenLite.to(scene1_plane.geometry.vertices[ i ], timeoffset, {z:offset , ease:Quad.easeInOut, onComplete:noiseTweenVertex, onCompleteParams:[i]});
}

function vertexPlaneAnimate(type){
	var index = 0;
    for(var i = 0; i <= scene1_plane_seg; i++) {
        for(var j = 0; j <= scene1_plane_seg; j++) {
            noiseTweenVertex(index);
            index++;
        }
    }
    index=0;
}


/******************************************************/
/* DOM
/******************************************************/
document.addEventListener( 'mousemove', onMouseMove, true );
function onMouseMove ( event ) {
   mousex = event.clientX;
   mousey = event.clientY;
}

function onWindowResize(){
    dwidth = window.innerWidth;
    dheight = window.innerHeight;
    currentCamera.aspect = window.innerWidth / window.innerHeight;
    currentCamera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

var btnSeq = "open";
document.getElementById("btnNext").onclick = function(){
	switch(btnSeq){
		case "open":
			create_scene1();
			btnSeq = "scene1"
			break;
		case "scene1":
			btnSeq = ""
			leave_scene1();
			break;
		default:
			break;
	}
}
