export const isNumber = (value: string): boolean => {
  return !isNaN(Number(value));
};

export const feetToMeters = (feet: string): number => {
  return parseFloat(feet) / 3.281;
};

export const metersToFeet = (meters: string): number => {
  return parseFloat(meters) * 3.281;
};

export const lbsToKilos = (lbs: string): number => {
  return parseFloat(lbs) / 2.205;
};

export const kilosToLbs = (kilos: string): number => {
  return parseFloat(kilos) * 2.205;
};
