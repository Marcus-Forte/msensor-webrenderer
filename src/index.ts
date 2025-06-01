import * as THREE from 'three';

import { SensorServiceClient } from './proto-gen/SensorsServiceClientPb';
import { PointCloud3 } from './proto-gen/sensors_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Int2RGB } from './colormap';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls'


function ResetCamera(camera: THREE.PerspectiveCamera) {
// camera.position.set(-c.5, 0, 0); // Adjust camera rotation to look at the scene

// good viewpoint
camera.position.set(5.94, 0.966, 3.41); // Adjust camera position
camera.rotation.set(0.60, 1.036, 0.97)
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new FlyControls(camera, renderer.domElement);
controls.dragToLook = true; // Enable drag to look
controls.rollSpeed = 0.08; // Adjust roll speed

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('keydown', (event) => {
  if (event.key.toLocaleLowerCase() === 'o') {
    ResetCamera(camera);
  }

  if (event.key.toLocaleLowerCase() === 'c') {
    console.log('Camera position:', camera.position);
    console.log('Camera rotation:', camera.rotation);
  }
});

ResetCamera(camera);

function animate() {
  controls.update(0.1); // Update controls with a small delta time

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// use envoyProxy address from browser perspective
var client = new SensorServiceClient('http://192.168.3.20:8080');

console.log('Client created:', client);

const request = new Empty();

var previousPointCloud = new THREE.Points();

client
  .getScan(request)
  .on('data', (response: PointCloud3) => {
    const points = response.getPointsList();
    // console.log('Got pts:{}', points.length);
    const positions = new Float32Array(points.length * 3);
    const colors = new Float32Array(points.length * 3);
    // process all points
    points.forEach((point, i) => {
      positions[i * 3] = point.getX();
      positions[i * 3 + 1] = point.getY();
      positions[i * 3 + 2] = point.getZ();

      if (point.hasIntensity()) {
        const rgb = Int2RGB(point.getIntensity());
        colors[i * 3] = rgb.r;
        colors[i * 3 + 1] = rgb.b;
        colors[i * 3 + 2] = rgb.g;
      } else {
        colors[i * 3] = 0.1;
        colors[i * 3 + 1] = 1.0;
        colors[i * 3 + 2] = 0;
      }


      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      // Create material for points
      const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });

      // Create Points object and add to scene
      const pointCloud = new THREE.Points(geometry, material);
      scene.add(pointCloud);
      if (previousPointCloud) {
        scene.remove(previousPointCloud);
        // Dispose old geometry and material to free memory
        previousPointCloud.geometry.dispose();
        (previousPointCloud.material as THREE.Material).dispose();
      }
      previousPointCloud = pointCloud;

      // Here you can add the points to a THREE.js geometry if needed
      // For example, you could create a new geometry and add these points to it
    });
  })
  .on('error', (err) => {
    console.error('Error receiving scan data:', err);
  })
  .on('end', () => {
    console.log('Stream ended');
  });
