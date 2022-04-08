export const isNumber = (value: string): boolean => {
  return !isNaN(Number(value));
};

export const feetToMeters = (feet: string): number => {
  return Math.round((parseFloat(feet) / 3.281) * 10000) / 10000;
};

export const metersToFeet = (meters: string): number => {
  return Math.round(parseFloat(meters) * 3.281 * 10000) / 10000;
};

export const lbsToKilos = (lbs: string): number => {
  return Math.round((parseFloat(lbs) / 2.205) * 10000) / 10000;
};

export const kilosToLbs = (kilos: string): number => {
  return Math.round(parseFloat(kilos) * 2.205 * 10000) / 10000;
};
