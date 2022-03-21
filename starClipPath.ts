import starPoints from "./starPoints";

/**
 * Fetch a CSS clip-path polygon string using starPoints()
 *
 * @param n number of points
 * @param mag magnitude of spikes
 * @param theta offset angle, assumes "north" by default
 * @returns array of star points
 */
export const starClipPath = (n: number, mag: number, theta: number): string =>
  `polygon(${starPoints(n, mag, theta)
    .map((p, i, l) => {
      const isOdd = (i + 1) % 2;
      const pos = (p * 0.5 + 0.5) * 100;
      return i === l.length - 1 ? `${pos}%` : isOdd ? `${pos}% ` : `${pos}%, `;
    })
    .join("")})`;
