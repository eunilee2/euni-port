import * as THREE from 'three';

let scene, camera, renderer;

function init() {
    //create scene object
    scene = new THREE.Scene();
    
    //setup camera with facing upward
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI/2;
    
    //setup renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    animate(); 
}
//rendering loop
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();

starGeo = new THREE.Geometry();
for(let i=0;i<6000;i++) {
    let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
    );
    starGeo.vertices.push(star);
}

let sprite = new THREE.TextureLoader().load( 'star.png' );
let starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite
});

stars = new THREE.Points(starGeo,starMaterial);
scene.add(stars);