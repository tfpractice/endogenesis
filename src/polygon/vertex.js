import { applyVect, normal, nthNormal, vectors, } from './vector';

export const radial = poly => applyVect(poly)(normal(poly));
export const nthVertex = poly => (n = 0) => applyVect(poly)(nthNormal(poly)(n));
export const vertices = poly => vectors(poly).map(applyVect(poly));
