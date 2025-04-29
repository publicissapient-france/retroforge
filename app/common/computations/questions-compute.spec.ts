import { Computation, computeAppropriateRetroBasedOnScoring } from '~/common/computations/questions-compute'
import { RetrospectiveResultType } from '~/common/types/Restrospective'

describe('QuestionCompute', () => {

  const tagsRetrospectives = [
    { 'name': 'Mad Sad Glad', 'tags': ['Mood', 'Sprint'] },
    { 'name': 'Dixit', 'tags': ['Fun', 'Mood', 'Vision'] },
    { 'name': 'Start Stop Continue', 'tags': ['Sprint', 'Performance'] },
    { 'name': 'Dark Manifesto', 'tags': ['Conflits', 'Vision', 'Fun'] },
    { 'name': 'Vis ma vie', 'tags': ['Vision'] },
    { 'name': 'La carte postale du futur', 'tags': ['Vision', 'Innovation'] },
    { 'name': '4L', 'tags': ['Sprint', 'Mood', 'Processus'] },
    { 'name': 'Speed boat', 'tags': ['Vision', 'Innovation'] },
    { 'name': 'Starfish', 'tags': ['Processus', 'Mood', 'Sprint', 'Processus'] },
    { 'name': 'La ligne de vie', 'tags': ['Mood', 'Sprint', 'Vision'] },
    { 'name': 'Dohyō Dynamique', 'tags': ['Performance', 'Innovation', 'Fun'] },
    { 'name': 'JOYEUSES PÂQUES', 'tags': ['Fun','Processus', 'Mood', 'Innovation'] },
    { 'name': 'Daki', 'tags': ['Processus', 'Performance'] },
    { 'name': 'Les 3 petits cochon', 'tags': ['Processus', 'Fun'] },
    { 'name': 'The Good, the Bad & the Ugly', 'tags': ['Sprint', 'Fun', 'Performance'] },
    { 'name': 'Jurassic Park', 'tags': ['Innovation', 'Fun', 'Processus', 'Conflits'] },
  ]

  it('should compute best retro based on scoring', () => {
    const answers = [
      {
        id: 'q001',
        question: 'Question #1',
        response: { tags: ['Sprint', 'Processus', 'Performance'] },
      },
      {
        id: 'q002',
        question: 'Question #2',
        response: { tags: ['Fun', 'Processus', 'Performance'] },
      },
      {
        id: 'q003',
        question: 'Question #3',
        response: { tags: ['Rapide'] },
      },
      {
        id: 'q004',
        question: 'Question #4',
        response: { tags: ['Sprint', 'Processus'] },
      },
      {
        id: 'q005',
        question: 'Question #5',
        response: { tags: ['Conflits', 'Processus'] },
      },
    ]

    const result = computeAppropriateRetroBasedOnScoring(answers, tagsRetrospectives)

    expect(result).toEqual({
      type: RetrospectiveResultType.MATCHED,
      retrospectives: ['Starfish', '4L', 'Daki' ],
    })
  })

  it('should compute no match result', () => {
    const answers: Computation[] = []
    const result = computeAppropriateRetroBasedOnScoring(answers, tagsRetrospectives)
    expect(result).toEqual({
      type: RetrospectiveResultType.NO_MATCH,
      retrospectives: ['Mad Sad Glad', 'Dixit', 'Start Stop Continue'],
    })
  })

  it('should compute no pertinent result', () => {
    const retrospectives = [
      { 'name': 'Mad Sad Glad', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { 'name': 'Dixit', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { 'name': 'Start Stop Continue', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { 'name': 'Dark Manifesto', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { 'name': 'Vis ma vie', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { 'name': 'La carte postale du futur', 'tags': ['Conflits', 'Vision', 'Fun'] },
    ]
    const answers = [
      {
        id: 'q001',
        question: 'Question #1',
        response: { tags: ['Conflits', 'Vision', 'Fun'] },
      },
      {
        id: 'q002',
        question: 'Question #2',
        response: { tags: ['Conflits', 'Vision', 'Fun'] },
      },
    ]

    const result = computeAppropriateRetroBasedOnScoring(answers, retrospectives)
    expect(result).toEqual({
      type: RetrospectiveResultType.NOT_PERTINENT,
      retrospectives: ['Mad Sad Glad', 'Dixit', 'Start Stop Continue'],
    })
  })
})
