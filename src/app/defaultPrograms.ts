import { ProgramComplexity, Category } from './typedefs';

export const programs = [
  {
    id: 1,
    name: 'Интенсивное похудение',
    complexity: ProgramComplexity.Hard,
    duration: 45,
    categories: [
      Category.Cardio,
      Category.PowerTraining,
      Category.Stretching,
    ],
    image: "assets/fat-woman.png",
    exersizes: [
      {
        id: 1,
        name: 'Жим гантелей лежа',
        repeating: { count: 10, times: 4 },
        category: Category.PowerTraining,
      },
      {
        id: 2,
        name: 'Выпады',
        repeating: { count: 12, times: 3 },
        category: Category.Cardio,
      },
      {
        id: 3,
        name: 'Румынская тяга с гантелями',
        repeating: { count: 10, times: 4 },
        category: Category.PowerTraining,
      },
    ],
  },
  {
    id: 2,
    name: 'Усиленная тренировка',
    complexity: ProgramComplexity.Medium,
    duration: 45,
    categories: [
      Category.Cardio,
      Category.PowerTraining,
      Category.Stretching,
    ],
    image: "assets/man.png",
    exersizes: [
      {
        id: 4,
        name: 'Жим гантелей лежа',
        repeating: { count: 10, times: 4 },
        category: Category.PowerTraining,
      },
      {
        id: 5,
        name: 'Выпады',
        repeating: { count: 12, times: 3 },
        category: Category.Cardio,
      },
      {
        id: 6,
        name: 'Румынская тяга с гантелями',
        repeating: { count: 10, times: 4 },
        category: Category.PowerTraining,
      },
    ],
  },
  {
    id: 3,
    name: 'Усиленная тренировка',
    complexity: ProgramComplexity.Easy,
    duration: 35,
    categories: [
      Category.Cardio,
      Category.Stretching,
    ],
    image: "assets/woman.png",
    exersizes: [
      {
        id: 7,
        name: 'Растяжка',
        repeating: { count: 10, times: 4 },
        category: Category.Stretching,
      },
      {
        id: 8,
        name: 'Выпады',
        repeating: { count: 12, times: 3 },
        category: Category.Cardio,
      },
      {
        id: 9,
        name: 'Йога',
        repeating: { count: 10, times: 4 },
        category: Category.Stretching,
      },
    ],
  },
];