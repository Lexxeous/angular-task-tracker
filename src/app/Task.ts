// Create a model for a single Task

export interface Task { // interfaces are like classes or structs in Angular
  id?: number; // optional <id> property
  desc: string;
  time: string;
  month: string;
  day: string;
  year: number;
  reminder: boolean;
}