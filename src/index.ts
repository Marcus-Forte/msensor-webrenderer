import * as THREE from 'three';

import { SensorServiceClient } from './proto-gen/SensorsServiceClientPb';
import { PointCloud3 } from './proto-gen/sensors_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Int2RGB } from './colormap';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const moveSpeed = 0.1; // Lowered for smoother movement

// Track pressed keys
const keysPressed: { [key: string]: boolean } = {};

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  keysPressed[key] = true;

  // Reset camera to origin on 'r'
  if (key === 'r') {
    camera.position.set(0, 0, 5);
    
    yaw = 0;
    pitch
  }
});
window.addEventListener('keyup', (event) => {
  keysPressed[event.key.toLowerCase()] = false;
});


// Mouse processing

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let yaw = 0;
let pitch = 0;

// Set initial camera position and rotation
camera.position.set(-1, -1, 5);
camera.rotation.order = 'YXZ'; // Yaw (Y), Pitch (X), Roll (Z)
camera.lookAt(new THREE.Vector3(0, 0, 0));

renderer.domElement.addEventListener('mousedown', (event) => {
  isDragging = true;
  previousMousePosition.x = event.clientX;
  previousMousePosition.y = event.clientY;
});

renderer.domElement.addEventListener('mouseup', () => {
  isDragging = false;
});

renderer.domElement.addEventListener('mousemove', (event) => {
  const dragRate = 0.003;
  if (!isDragging) return;

  const deltaMove = {
    x: event.clientX - previousMousePosition.x,
    y: event.clientY - previousMousePosition.y,
  };

  yaw += deltaMove.x * dragRate;
  pitch += deltaMove.y * dragRate;
  pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, pitch)); // clamp pitch

  previousMousePosition.x = event.clientX;
  previousMousePosition.y = event.clientY;
});

//

function animate() {
camera.rotation.order = 'YXZ';
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
  camera.up.set(0, 0, 1); // World Z is up

  // Get forward and right vectors relative to camera orientation (Z-up)
  const forward = new THREE.Vector3();
  camera.getWorldDirection(forward);

  // Right vector: cross product of up and forward
  const worldUp = new THREE.Vector3(0, 0, 1);
  const right = new THREE.Vector3();
  right.crossVectors(forward, worldUp).normalize();



  // Fly camera: move in the direction camera is facing (including up/down)
  if (keysPressed['w'] || keysPressed['arrowup']) {
    camera.position.add(forward.clone().multiplyScalar(moveSpeed));
  }
  if (keysPressed['s'] || keysPressed['arrowdown']) {
    camera.position.add(forward.clone().multiplyScalar(-moveSpeed));
  }
  if (keysPressed['a'] || keysPressed['arrowleft']) {
    camera.position.add(right.clone().multiplyScalar(-moveSpeed));
  }
  if (keysPressed['d'] || keysPressed['arrowright']) {
    camera.position.add(right.clone().multiplyScalar(moveSpeed));
  }
  if (keysPressed['q']) camera.position.z += moveSpeed;
  if (keysPressed['e']) camera.position.z -= moveSpeed;



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
    console.log('Got pts:{}', points.length);
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
  


      // Use r/g/b if available, otherwise default to white
    

      const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create material for points
    const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });

    // Create Points object and add to scene
    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    scene.remove(previousPointCloud);
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
