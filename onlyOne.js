function onlyOne(x, y, z) {
  return ((x && !y && !z) || (!x && y && !z) || (!x && !y && z));
}

function onlyOne(x, y, z) {
  return (!!x + !!y + !!z === 1);
}
