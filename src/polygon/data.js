const dGon = {
 cx: 0, cy: 0, radius: 10, rotation: 0, sides: 3, segments: 1,
};

export const polygon = (cx = 0, cy = 0, radius = 10, rotation = 0, sides = 3, segments = 1) => ({
 cx, cy, radius, rotation, sides, segments,
}); 

export const cx = ({ cx, } = dGon) => cx;
export const cy = ({ cy, } = dGon) => cy;
export const radius = ({ radius, } = dGon) => radius;
export const rotation = ({ rotation, } = dGon) => rotation;
export const sides = ({ sides, } = dGon) => sides;
export const segments = ({ segments, } = dGon) => segments;
