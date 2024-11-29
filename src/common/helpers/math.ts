export const getMinutes = (seconds: number) => Math.floor((seconds % 3600) / 60);

export const getKilometers = (meters: number) => Math.round(meters / 1000);
