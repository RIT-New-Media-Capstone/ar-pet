// following code from https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
// and https://threejs.org/docs/#examples/en/controls/OrbitControls

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import WebGL from 'three/addons/capabilities/WebGL.js';

// setup scene, camera, and renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

// add lights to the scene
const light = new THREE.PointLight( 0xededed, 5);
light.position.set( 0, 0.8, 2);

const light2 = new THREE.AmbientLight( 0xffffff );

scene.add( light);
scene.add( light2);

// initialize model animation variables
// code from https://sbcode.net/threejs/gltf-animation/
let mixer;
let modelReady = false
const animationActions = []
let activeAction;
let lastAction;

// add a model to the scene
// from https://sketchfab.com/3d-models/tiger-51ed5186afb04487ae6adb51f8ffd09b
const loader = new GLTFLoader();
loader.load( '/tiger/source/Tiger.glb', ( gltf ) => {
	scene.add( gltf.scene );
	
	}, undefined, ( error )  => {
		console.error( error );
	} 
);

// scene.background = new THREE.Color(0xffffff)

camera.position.set(0, 0.8, 2.5);
controls.update();
camera.lookAt(0, 0, 0);

const animations = {
    default: () => {
        setAction(animationActions[1]);
    },
	static: () => {
		setAction(animationActions[0]);
	},
}


// render the scene
const animate = () => {
	requestAnimationFrame( animate );

	// let mesh;

	// // Create an AnimationMixer, and get the list of AnimationClip instances
	// const mixer = new THREE.AnimationMixer( mesh );
	// const clips = mesh.animations;

	// // Update the mixer on each frame
	// function update () {
	// 	mixer.update( deltaSeconds );
	// }

	// // Play a specific animation
	// const clip = THREE.AnimationClip.findByName( clips, 'Animation' );
	// const action = mixer.clipAction( clip );
	// action.play();

	// // Play all animations
	// clips.forEach( function ( clip ) {
	// 	mixer.clipAction( clip ).play();
	// } );
	controls.update();

	renderer.render( scene, camera );
};

const init = () => {
	// animate();

	if ( WebGL.isWebGLAvailable() ) {
	// Initiate function or other initializations here
		animate();
	} else {
		const warning = WebGL.getWebGLErrorMessage();
		document.getElementById( 'container' ).appendChild( warning );
	}
};

window.onload = init;
