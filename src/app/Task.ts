// Create a model for a single Task

export interface Task { // interfaces are like classes or structs in Angular
  id?: number; // optional <id> property
  text: string;
  day: string;
  time: string;
  year: string;
  reminder: boolean;
}