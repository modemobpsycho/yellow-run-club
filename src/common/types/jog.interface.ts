export interface IJog {
  id: number;
  distance: number;
  time: number;
  date: string;
  speed: number;
}

export type ICreateJog = Omit<IJog, 'id' | 'speed'>;

export type IUpdateJog = Omit<IJog, 'speed'>;
