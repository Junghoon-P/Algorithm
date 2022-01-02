function solution(sizes) {
  let width = [];
  let height = [];

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
  }

  for (let i = 0; i < sizes.length; i++) {
    width.push(sizes[i][0]);
    height.push(sizes[i][1]);
  }

  return Math.max(...width) * Math.max(...height);
}

//
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}
