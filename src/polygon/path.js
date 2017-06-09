
export const closed = verts => verts.concat([ verts[0], ]);
export const withBase = base => verts => verts.reduce((prev, curr, ix) => 
  (ix && (ix % 3 === 2)) ? prev.concat(base, curr) : prev.concat(curr)
, []);

// export const 
