---
layout: post
title:  "Attempting to Render 3D Models Using three.js"
date:   2017-12-12 11:00:00 +0000
categories: PhD
---
---
Assets used for this project:
* three.js

---

### The Question:

Can we render our 3D print online?

---

### Method
{% highlight java %}
<script type="text/javascript" src="/three.min.js"></script>
<script type="text/javascript" src="/STLLoader.js"></script>
<script type="text/javascript">
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

	}
</script>

{% endhighlight %}

---

### Results
<div class='page-content'>
	<script src="/three.min.js"></script>
	<script src="/STLLoader.js"></script>
	<script src="/dipoleSTL.js" type="text/javascript"></script>
</div>
---

# Review

The 3D models can be viewed in this way, however challenges still remain; 
* I do not control the location of the javescript item
* I can not add additional files ono the same page whithout breaking the previous.
* The is no GUI yet for the user.
