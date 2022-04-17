import { ProgramComplexity } from './typedefs';

export const getCompexityLabel = (complexity: ProgramComplexity) => {
  switch (complexity) {
    case ProgramComplexity.Easy:
      return 'Легкая';
    case ProgramComplexity.Medium:
      return 'Средняя';
    case ProgramComplexity.Hard:
    default:
      return 'Сложная';
  }
}
