/*
Author: Eli Watts
File Name: 3D.js
Date: 04/14/2020
Purpose: MART 441 Homework Assignment #13
*/

//Creates new scene
var scene = new THREE.Scene();
        //Overrides any default mesh
        //I think this is also causing my cubes to be purple rather than green
        //Couldn't find any alternatives
        scene.overrideMaterial = new THREE.MeshBasicMaterial({
            color: '#6a0dad'
        });

        //Sets scene background to grey
        scene.background = new THREE.Color('grey');

        //Initializes new variable and assigns new geometry as a value
        var geoBox = new THREE.BoxGeometry( 2 , 2 , 2 );
        //Initializes new variable and assigns new mesh as value
        //Doesn't work as it is overrided by previous scene.overrideMaterial
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });

        //Initializes new cube and passes in geoBox and material variables as arguments to set size and color
        var cube1 = new THREE.Mesh(geoBox , material);
        //positoins cube at x, y, and z coordinates
        cube1.position.set( 0 , 0 , 0 );

        //Same process here as for cube1
        var cube2 = new THREE.Mesh(geoBox , material);
        cube2.position.set( 40 , 0 , 0 );

        //Creates new group in which cube1 and cube2 are stored
        //Theoritically allows functions to be more easily applied across large groups of objects
        var cubeGroup = new THREE.Group();
        cubeGroup.add(cube1);
        cubeGroup.add(cube2);
        scene.add(cubeGroup);

        //Adds new camera object to scene and positions it
        //Assigns THREE>WebGLRenderer to renderer variable
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000);
        var renderer = new THREE.WebGLRenderer();
        camera.position.x = 20;
        camera.position.y = 0;
        camera.position.z = 50;

        //Clears frame to prevent moving shapes from smearing
        renderer.setClearColor(0xdddddd);
        renderer.setSize(window.innerWidth, window.innerHeight);

        //Creates new GLTFLoader which imports 3D objects
        document.body.appendChild(renderer.domElement);
        var loader = new THREE.GLTFLoader();

        //Loads 3D object stored in images folder
        loader.load('../images/lowPolyTrees.glb', function(gltf) {
            //Adds gltf object to scene
            scene.add(gltf.scene);

        }, undefined, function(error) {

            console.error(error);

        });
        //Assigns value of 0 to rotation variable
        var rotation = 0;

        //Spins camera by updating its z and x values
        function spinCamera() {
            rotation += 0.001;
            camera.position.z = Math.sin(rotation) * 80;
            camera.position.x = Math.cos(rotation) * 80;
            camera.lookAt(scene.position);
        }

        //Rotates object by updating their x and y values
        function animate() {
            requestAnimationFrame( animate );
            cube1.rotation.x += 0.01;
            cube1.rotation.y += 0.01;

            cube2.rotation.x += 0.01;
            cube2.rotation.y += 0.01;

            //Correctly rotates cube1 but causes cube 2 to fly around wildly as it is not positioned at 0, 0, 0
            //cubeGroup.rotation.x += 0.01;
            //cubeGroup.rotation.y += 0.01;

            renderer.render( scene, camera );
        }

        //Renders scene
        var render = function() {

            requestAnimationFrame(render);

            renderer.render(scene, camera);
        };

        //Calls animate function and render function
        animate();
        render();
