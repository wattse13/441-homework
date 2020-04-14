/*
Author: Eli Watts
File Name: 3D.js
Date: 04/14/2020
Purpose: MART 441 Homework Assignment #13
*/

//Accesses three.js library to create new scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Accesses three.js library to create new instance of renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0xBF00BF
});
var cube = new THREE.Mesh(geometry, material);
//cube.position.set( 100 , 100 , 0 );
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();
