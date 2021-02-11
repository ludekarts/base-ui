export function hexToRGBA(hex, alpha = 1) {
  let r = 0, g = 0, b = 0;

  if (!isHexColor(hex))
    return hex;

  // 3 digits
  if (hex.length == 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];

    // 6 digits
  } else if (hex.length == 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  } else {
    throw new Error(`hexToRGBA Error: Wrong hex color: ${hex}`)
  }

  return `rgba(${+r}, ${+g}, ${+b}, ${alpha})`;
}

export function isHexColor(color) {
  return /^#([\da-f]{3}){1,2}$/i.test(color);
}