import { Vector, } from 'p5';
import { getX, getY,numSides,radius,rotation, } from './data';

const { cos, PI, } = Math;

// console.log('Vector', Vector);
export const isEven = poly => numSides(poly) % 2 === 0;
export const xEven = poly => !isEven(poly);
export const baseAngle = poly => 2 * PI / numSides(poly);

export const center = poly => new Vector(getX(poly),getY(poly));
export const apoFactor = poly => cos(PI / numSides(poly));
export const apoMag = poly => radius(poly) * apoFactor(poly);
export const apoOffset = poly => baseAngle(poly) / 2;
export const apoDir = poly => rotation(poly) + apoOffset(poly);
export const apoVector = poly => 
  new Vector.fromAngle(apoDir(poly)).mult();

export const circumVector = (poly) => {
  console.log('Array(numSides(poly)).keys()', [ ...Array(numSides(poly)).keys(), ]); 
  return new Vector.fromAngle(rotation(poly)).mult(radius(poly)); 
};

const range = (x = 0) => [ ...Array(x).keys(), ];

export const nthVertex = poly => (n = 0) =>
circumVector(poly).rotate(n * baseAngle(poly)).add(center(poly));

export const vertices = poly =>
  range(numSides(poly)).map(nthVertex(poly));
  
//       this.apoFactor = Math.cos(Math.PI / this.numSides);

// this.even = ((this.sideCount % 2) == 0) ? true : false;
//         this.peripherals = [];
//         this.baseAngle = ((2 * Math.PI) / this.sideCount);
//         this.center = new p5.Vector(this.cx, this.cy);
//         this.apoOffset = this.baseAngle / 2;
//         this.vertices = [];
//         this.apoMag = this.radius * Math.cos(Math.PI / this.sideCount);
//         this.circumVector = new p5.Vector.fromAngle(this.rotation);
//         this.circumVector.mult(this.radius);
//         this.apoVector = new p5.Vector.fromAngle(this.rotation + this.apoOffset);
//         this.apoVector.mult(this.apoMag);
//         this.establishVertices();
//         this.setDisplayer();
