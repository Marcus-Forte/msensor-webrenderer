import * as THREE from 'three';

import { SensorServiceClient } from './proto-gen/SensorsServiceClientPb';
import { PointCloud3 } from './proto-gen/sensors_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();


// use envoyProxy address from browser perspective
var client = new SensorServiceClient('http://localhost:8080'); 

console.log('Client created:', client);

const request = new Empty();

client.getScan( request).on('data', (response: PointCloud3) => {
  console.log("Got pts:", response.getPointsList().length);
}
).on('error', (err) => {
  console.error('Error receiving scan data:', err);
}
).on('end', () => {
  console.log('Stream ended');
}
);
