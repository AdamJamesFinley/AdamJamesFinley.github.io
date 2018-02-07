var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight,1,200);
	camera.position.z = 15;
	camera.position.y = -30;
	camera.rotation.x = 45;

	scene = new THREE.Scene();
	var loader = new THREE.STLLoader();
	geometry =loader.load( '/models/dip.stl', function ( geometry ) {
		var mat = new THREE.MeshNormalMaterial();
			mesh = new THREE.Mesh(geometry, mat);
			scene.add(mesh);
	});
	mesh = new THREE.Mesh( geometry, material );

	renderer = new THREE.WebGLRenderer( scene, camera, { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.00;
	mesh.rotation.y += 0.00;
	mesh.rotation.z += 0.01;

	renderer.render( scene, camera );
	renderer.setSize( window.innerWidth, window.innerHeight );

}
