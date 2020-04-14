/*
Author: Eli Watts
File Name: 3D.js
Date: 04/14/2020
Purpose: MART 441 Homework Assignment #13
*/

var scene = new THREE.Scene()
        scene.overrideMaterial = new THREE.MeshBasicMaterial({
            color: 'green'
        });
        scene.background = new THREE.Color('grey');
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
        var renderer = new THREE.WebGLRenderer()
        camera.position.x = 100
        camera.position.y = -100
        camera.position.z = 590


        renderer.setClearColor(0xdddddd)
        renderer.setSize(window.innerWidth, window.innerHeight)

        document.body.appendChild(renderer.domElement)
        var loader = new THREE.GLTFLoader();

        // change to the name of your glb
        loader.load('../images/lowPolyTrees.glb', function(gltf) {

            scene.add(gltf.scene);

        }, undefined, function(error) {

            console.error(error);

        });
        var rotation = 0

        function spinCamera() {
            rotation += 0.001
            camera.position.z = Math.sin(rotation) * 80;
            camera.position.x = Math.cos(rotation) * 80;
            camera.lookAt(scene.position)
        }
        var render = function() {

            requestAnimationFrame(render);
            spinCamera();

            renderer.render(scene, camera);
        };

        render();
