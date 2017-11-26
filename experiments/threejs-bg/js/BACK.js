var camera, scene, renderer, geometry, material, mesh, mousex, mousey, dwidth, dheight;
var clock;
var plane;
var helper;
var terrain;
var wireframe; 

var pwidth, pheight, psegments;  
var index = 0;

var tval = 10;

init();
animate();

function init() {

    scene = new THREE.Scene();
    clock = new THREE.Clock();

    //cam1
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 50;
    scene.add(camera);

    //console.log(clock);

    //Stats
    stats = new Stats();
    document.body.appendChild( stats.domElement );  

    var light = new THREE.PointLight( 0xffffff, 1, 2000 );
    light.position.set( 0, 0, 0 );
    scene.add( light );

    var geometry = new THREE.CubeGeometry(200, 200, 200);
    var material = new THREE.MeshNormalMaterial();    
    cube1 = new THREE.Mesh(geometry, material);
    //scene.add(cube1);

    var geometry = new THREE.SphereGeometry( 3, 16, 16 );
    var material = new THREE.MeshBasicMaterial({color: 0xffffff}); 
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.z=-53;
    scene.add( sphere );  

    var geometry = new THREE.SphereGeometry( 4, 16, 16 );
    //var geometry = new THREE.TetrahedronGeometry( 200, 0 );
    var material = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true}); 
    var sphere2 = new THREE.Mesh( geometry, material );
    material.opacity = 0.35;
    sphere2.position.z=-55;
    scene.add( sphere2 );  

    var geometry = new THREE.SphereGeometry( 5, 16, 16 );
    var material = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true}); 
    var sphere3 = new THREE.Mesh( geometry, material );
    material.opacity = 0.15;
    sphere3.position.z=-58;
    scene.add( sphere3 );   

    var geometry = new THREE.PlaneGeometry( 2200, 1000, 20, 20 );  

    //pwidth = 1400;
    //pheight = 1400;
    psegments = 20;

    var material = new THREE.MeshPhongMaterial( {  side: THREE.DoubleSide, color: 0xffffff , shininess: 1, shading: THREE.FlatShading, opacity: .3, transparent: true } )
  
    plane = new THREE.Mesh( geometry, material );
    
    plane.rotation.x = 1.69;
    plane.position.y=-150; 
    plane.position.z=-475;    

    plane.dynamic = true;
    scene.add( plane );
    
   
    //generateParticles();
    
    

     
    // Load in the mesh and add it to the scene.
    var loader = new THREE.JSONLoader();
    loader.load( "res/obj/tri-sm.json", function(geometry){
        var material = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true});
        material.opacity = 0.95;
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.z=0;       
        TweenMax.to(mesh.material, 2, {opacity:.1, delay:4,repeatDelay:0, repeat:-1, yoyo:true})
        scene.add(mesh);

        var material2 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true});
        //material2.opacity = 0.75;
        mesh2 = new THREE.Mesh(geometry, material2);
        mesh2.position.z=-15;
        TweenMax.to(mesh2.material, 2, {opacity:.1, delay:3, repeatDelay:0, repeat:-1, yoyo:true})
        scene.add(mesh2);

        var material3 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true});
        //material3.opacity = 0.5;
        mesh3 = new THREE.Mesh(geometry, material3);
        mesh3.position.z=-35;
        TweenMax.to(mesh3.material, 2, {opacity:.1, delay:2, repeatDelay:0, repeat:-1, yoyo:true})
        scene.add(mesh3);

        var material4 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true});
        //material4.opacity = 0.2;
        mesh4 = new THREE.Mesh(geometry, material4);
        mesh4.position.z=-57;
        TweenMax.to(mesh4.material, 2, {opacity:.1, delay:1, repeatDelay:0, repeat:-1, yoyo:true})
        scene.add(mesh4);

        var material5 = new THREE.MeshBasicMaterial({color: 0xffffff, transparent: true});
        //material5.opacity = 0.05;
        mesh5 = new THREE.Mesh(geometry, material5);
        mesh5.position.z=-85;
        TweenMax.to(mesh5.material, 2, {opacity:.1, delay:0, repeatDelay:0, repeat:-1, yoyo:true})
        scene.add(mesh5);
    });
    
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true  } );


    //resize
    window.addEventListener( 'resize', onWindowResize, false );
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    dwidth = window.innerWidth;
    dheight = window.innerHeight;

    noiseLand();

    

}


function animate() {
    stats.update();  
    requestAnimationFrame(animate);
    render();
}


function noiseTweenVertex(i) {
    var offset = (Math.random() * 50) - 25;
    var timeoffset =(Math.random() * 5)+1;
    TweenLite.to(plane.geometry.vertices[ i ], timeoffset, {z:offset , ease:Quad.easeInOut, onComplete:noiseTweenVertex, onCompleteParams:[i]});
}

function noiseLand(){
     for(var i = 0; i <= psegments; i++) {
        for(var j = 0; j <= psegments; j++) {
            noiseTweenVertex(index);
            index++;
        }
    }
    index=0;
}


function render() {
  
    camera.position.z -= .01;   
    
    var delta = clock.getDelta(),
        time = clock.getElapsedTime() * 10;

    /*
    for ( var i = 0, l = plane.geometry.vertices.length; i < l; i ++ ) {
        plane.geometry.vertices[ i ].z = 30 * Math.sin( i / 5 + ( (time/2) + i ) / 7 );
    }
    
    //var pwidth, pheight, psegments;  

    //console.log(plane.geometry.vertices.length);
    for(var i = 0; i <= psegments; i++) {
        for(var j = 0; j <= psegments; j++) {


            //noiseTweenVertex(plane.geometry.vertices[ index ]);
            plane.geometry.vertices[ index ].z = 70 * Math.sin( i / 3 + ( (time/2) + j ) / 7 ) ;
            //helper.geometry.vertices[ index ].z = 30 * Math.sin( i / 5 + ( (time/2) + j ) / 7 );
            //console.log(index);
            //plane.geometry.vertices[index].position.z = terrain[i][j];
            index++;
        }
    }
    index=0;
    */


    plane.geometry.verticesNeedUpdate = true;
    


    /*
    var offsetx = (mousex - (dwidth/2))*.00005;
    if(offsetx){
        camera.position.x += offsetx;
    }

    var offsety = (mousey - (dheight/2))*.00005;
    if(offsety){
        camera.position.y -= offsety;
    }
    */
    
    

    //renderer.clear();
    //composer.render();
    renderer.render(scene, camera);
}

document.addEventListener( 'mousemove', onMouseMove, true );
function onMouseMove ( event ) {
   mousex = event.clientX;
   mousey = event.clientY;
};


function generateParticles(){

    var total = 500;
    var spreadx = 2000;
    var spready = 2000;
    var spreadz = 1000;

    //var material = new THREE.MeshPhongMaterial( {  side: THREE.DoubleSide, color: 0xcccccc , shininess: 1, shading: THREE.FlatShading, opacity: .1, transparent: true } )
    //var geometry = new THREE.CubeGeometry(10, 10, 10);
    //var mesh = new THREE.Mesh(geometry, material);


   

    var particles = new Array();

    for ( var i = 0; i < total; i++){
        
        particles[i] = new THREE.Mesh(geometry, material);
        particles[i].position.x = Math.floor((Math.random()*spreadx)-(spreadx/2));
        particles[i].position.y = Math.floor((Math.random()*spready)-(spready/2));
        particles[i].position.z = Math.floor((Math.random()*spreadz)-(spreadz/2));
        scene.add(particles[i]);

    }

}


function generateHeight( width, height ) {

    var size = width * height, data = new Uint8Array( size ),
    perlin = new ImprovedNoise(), quality = 1, z = Math.random() * 100;

    for ( var j = 0; j < 4; j ++ ) {

        for ( var i = 0; i < size; i ++ ) {
            var x = i % width, y = ~~ ( i / width );
            data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 1.75 );
        }

        quality *= 5;

    }

    return data;

}


function webglAvailable() {
    try {
        var canvas = document.createElement( 'canvas' );
        return !!( window.WebGLRenderingContext && (
            canvas.getContext( 'webgl' ) ||
            canvas.getContext( 'experimental-webgl' ) )
        );
    } catch ( e ) {
        return false;
    }
}

function onWindowResize(){

    dwidth = window.innerWidth;
    dheight = window.innerHeight;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}




/******************************************************/
/* POINT ENGINE
/******************************************************/
function createParticleField(){
    particleCount = 1800;
    particles = new THREE.Geometry();       
    var pMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 7,  opacity: .1,  map: THREE.ImageUtils.loadTexture("res/img/particle1.png"),blending: THREE.AdditiveBlending, transparent: true});

    for (var p = 0; p < particleCount; p++) {

      var pX = Math.random() * 1000 - 500,
          pY = Math.random() * 1000 - 500,
          pZ = Math.random() * 1500 - 1000,
          particle = new THREE.Vector3(pX, pY, pZ);
      
        particles.vertices.push(particle);
    }

    particleSystem = new THREE.Points(particles, pMaterial);
    scene1.add(particleSystem);


}

function animateParticleField(){    
    for(var i = 0; i < 1; i++){     
        //console.log(particleSystem.material)
        //particleSystem.geometry.vertices[i].set( 1, 1, 1 );
        //var particle = particles.vertices[i];
        //particle.z += .1;
        //particle.velocity.z = 5;
        //particle.material.opacity = .1;
    }
}
