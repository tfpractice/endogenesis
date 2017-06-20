import { Vector, } from 'p5';
import { apothem, } from './apothem';
import { baseAngle, range, } from './operations';
import { numSides, rotation, setRotation, setX, setY, } from './data';

export const tessVector = poly => apothem(poly).mult(2);
export const nthTess = poly => (n = 0) => tessVector(poly).rotate(n * baseAngle(poly));
export const tessVex = poly => range(numSides(poly)).map(nthTess(poly));
export const tesselate = poly => tessVex(poly).map((v, i) => {
  const heading = v.heading();
  const newRot = rotation(poly) - (baseAngle(poly) * i);
  const newV = Vector.fromAngle(0);
  const rVec = newV.copy().rotate(baseAngle(poly));
  const r2Vec = newV.copy().rotate(baseAngle(poly) * 2);

  console.log('INGDEXXXXX!~~~~~~~', i);

  console.log('heading', heading);
  
  console.log('newRot', newRot);

  // console.log('Math.PI/2', (2 * Math.PI) / 3);
  // console.log('baseAngle(poly)', baseAngle(poly));
  console.log('rVec.heading()', rVec.heading());
  console.log('r2Vec.heading()', r2Vec.heading());

  console.log('rVec.heading()- baseAngle(polygon)', rVec.heading() - baseAngle(poly));
  console.log('rVec.heading() +baseAngle(polygon)', rVec.heading() + baseAngle(poly));
  console.log('rVec.heading()- baseAngle(polygon)', rVec.heading() - (2 * baseAngle(poly)));
  console.log('rVec.heading() +baseAngle(polygon)', rVec.heading() + (2 * baseAngle(poly)));
  console.log('rVec.heading()', r2Vec.heading() - baseAngle(poly));
  console.log('rVec.heading()', r2Vec.heading() + baseAngle(poly));
  
  console.log('rVec.heading()', r2Vec.heading() - (2 * baseAngle(poly)));
  console.log('rVec.heading()', r2Vec.heading() + (2 * baseAngle(poly)));

  console.log('heading == newRot', heading == newRot);
  const result = [ setX(v.x), setY(v.y), setRotation(v.heading()), ]
  .reduce((p, fn) => fn(p), poly);

  // console.log('result', result);

  // console.log('v.heading()', v.heading());
  // console.log('rotation(poly)*baseAngle(poly)*i', rotation(poly) + (baseAngle(poly) * i));
  return [ setX(v.x), setY(v.y), setRotation(v.heading()), ]
    .reduce((p, fn) => fn(p), poly); 
});
