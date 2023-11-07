// following code from https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import WebGL from 'three/addons/capabilities/WebGL.js';

// setup scene, camera, and renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add a model to the scene
const loader = new GLTFLoader();

const light = new THREE.PointLight( 0xededed, 5);
light.position.set( 0, 0.8, 2);

const light2 = new THREE.AmbientLight( 0xffffff );

// const light2 = new THREE.PointLight(0xffffff, 5);
// light.position.set( 0, 1, 2 );

scene.add( light);
scene.add( light2);

loader.load( '/tiger.glb', function ( gltf ) {

	scene.add( gltf.scene );
	renderer.render( scene, camera );

}, undefined, function ( error ) {

	console.error( error );

} );

scene.background = new THREE.Color(0xffffff)

camera.position.set(0, 0.8, 2.5);
camera.lookAt(0, 0, 0);

// render the scene
function animate() {
	requestAnimationFrame( animate );

	let mesh;

	// Create an AnimationMixer, and get the list of AnimationClip instances
	const mixer = new THREE.AnimationMixer( mesh );
	const clips = mesh.animations;

	// Update the mixer on each frame
	function update () {
		mixer.update( deltaSeconds );
	}

	// Play a specific animation
	const clip = THREE.AnimationClip.findByName( clips, 'Animation' );
	const action = mixer.clipAction( clip );
	action.play();

	// Play all animations
	clips.forEach( function ( clip ) {
		mixer.clipAction( clip ).play();
	} );

	renderer.render( scene, camera );
}
// animate();
if ( WebGL.isWebGLAvailable() ) {
	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}
