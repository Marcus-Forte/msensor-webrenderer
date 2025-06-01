interface RGB {
  r: number;
  g: number;
  b: number;
}

function getRainbowColor(value: number): RGB {
  value = Math.min(value, 1.0);
  value = Math.max(value, 0.0);

  let h = value * 5.0 + 1.0;
  let i = Math.floor(h);
  let f = h - i;
  if ((i & 1) === 0) {
    f = 1 - f; // if i is even
  }
  let n = 1 - f;

  let r = 0,
    g = 0,
    b = 0;
  if (i <= 1) {
    r = n;
    g = 0;
    b = 1;
  } else if (i === 2) {
    r = 0;
    g = n;
    b = 1;
  } else if (i === 3) {
    r = 0;
    g = 1;
    b = n;
  } else if (i === 4) {
    r = n;
    g = 1;
    b = 0;
  } else if (i >= 5) {
    r = 1;
    g = n;
    b = 0;
  }

  return {
    r,
    g,
    b,
  };
}

export function Int2RGB(intensity: number): RGB {
  const min_i: number = 10;
  const max_i: number = 22;

  const norm_i = 1.0 - (intensity - min_i) / (max_i - min_i);

  const rgb = getRainbowColor(norm_i);
  // console.log(rgb)
  return {
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
  };
}
