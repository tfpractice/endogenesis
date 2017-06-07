const dGon = {
 x: 0, y: 0, radius: 10, rotation: 0, sides: 3, segments: 1,
};

export const polygon = (x = 0, y = 0, radius = 10, rotation = 0, sides = 3, segments = 1) => ({
 x, y, radius, rotation, sides, segments,
}); 

export const getX = ({ x, } = dGon) => x;
export const getY = ({ y, } = dGon) => y;
export const radius = ({ radius, } = dGon) => radius;
export const rotation = ({ rotation, } = dGon) => rotation;
export const sides = ({ sides, } = dGon) => sides;
export const segments = ({ segments, } = dGon) => segments;
