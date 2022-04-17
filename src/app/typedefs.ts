export enum Category {
  Cardio = 'cardio',
  PowerTraining = 'power-training',
  WeightLoss = 'weight-loss',
  Stretching = 'stretching'
}

export enum ProgramComplexity {
  Hard = 'hard',
  Medium = 'medium',
  Easy = 'easy'
}

export interface Exersize {
  id: number;
  name: string;
  repeating: {
    count: number;
    times: number;
  };
  category: Category;
}

export interface Program {
  id: number;
  name: string;
  complexity: ProgramComplexity;
  duration: number;
  categories: Category[];
  image: string;
  exersizes: Exersize[];
}
