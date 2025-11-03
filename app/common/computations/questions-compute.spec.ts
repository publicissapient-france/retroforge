import { Computation, computeAppropriateRetroBasedOnScoring } from '~/common/computations/questions-compute'
import { Retrospective,RetrospectiveResultType } from '~/common/types/Restrospective'

describe('QuestionCompute', () => {

  const tagsRetrospectives = [
    {
      'id': 'mad-sad-glad',
      'name': 'Mad Sad Glad',
      'filename':  'Mad-Sad-Glad.md',
      'emoji': '😑',
      'description': 'Exprimez les émotions vécues durant le sprint (colère, tristesse, joie) pour mieux comprendre et renforcer la dynamique d’équipe.',
      'tags': ['Mood', 'Sprint'],
    },
    {
      'id': 'dixit',
      'name': 'Dixit',
      'filename': 'Dixit.md',
      'emoji': '😃',
      'description': 'utilisez des cartes imagées pour explorer les ressentis, libérer la parole et renforcer l’écoute active au sein de l’équipe.',
      'tags': ['Fun', 'Mood', 'Vision'],
    },
    {
      'id': 'start-stop-continue',
      'name': 'Start Stop Continue',
      'filename':  'Start-Stop-Continue.md',
      'emoji': '😃',
      'description': 'Identifiez ce qu’il faut commencer, arrêter ou poursuivre pour affiner les pratiques de l’équipe dans une dynamique simple d’amélioration continue.',
      'tags': ['Sprint', 'Performance'],
    },
    {
      'id': 'dark-manifesto',
      'name': 'Dark Manifesto',
      'filename':  'Not-Implemented.md',
      'emoji': '😃',
      'description': 'Cette retrospective n\'est pas encore accéssible, elle le sera bientôt.',
      'tags': ['Conflits', 'Vision', 'Fun'],
    },
    {
      'id': 'vis-ma-vie',
      'name': 'Vis ma vie',
      'filename':  'Not-Implemented.md',
      'emoji': '😃',
      'description': 'Cette retrospective n\'est pas encore accéssible, elle le sera bientôt.',
      'tags': ['Vision'],
    },
    {
      'id': 'carte-postale-futur',
      'name': 'La carte postale du futur',
      'filename':  'Not-Implemented.md',
      'emoji': '😃',
      'description': 'Cette retrospective n\'est pas encore accéssible, elle le sera bientôt.',
      'tags': ['Vision', 'Innovation'],
    },
    {
      'id': '4l',
      'name': '4L',
      'filename':  '4L.md',
      'emoji': '😃',
      'description': 'La rétrospective 4L aide l’équipe à analyser le sprint via 4 axes (Liked, Learned, Lacked, Longed For) et à définir des actions concrètes.',
      'tags': ['Sprint', 'Mood', 'Processus'],
    },
    {
      'id': 'speed-boat',
      'name': 'Speed boat',
      'filename':  'Speed-Boat.md',
      'emoji': '😃',
      'description': 'Identifiez freins, moteurs et risques grâce à la métaphore du bateau pour mieux aligner l’équipe vers ses objectifs après un sprint difficile.',
      'tags': ['Vision', 'Innovation'],
    },
    {
      'id': 'starfish',
      'name': 'Starfish',
      'filename':  'Starfish.md',
      'emoji': '😃',
      'description': 'Explorez ce qu’il faut continuer, arrêter ou tester avec une approche structurée pour relancer l’engagement et clarifier les axes d’amélioration.',
      'tags': ['Processus', 'Mood', 'Sprint'],
    },
    {
      'id': 'ligne-vie',
      'name': 'La ligne de vie',
      'filename':  'Not-Implemented.md',
      'emoji': '😃',
      'description': 'Cette retrospective n\'est pas encore accéssible, elle le sera bientôt.',
      'tags': ['Mood', 'Sprint', 'Vision'],
    },
    {
      'id': 'dohyo-dynamique',
      'name': 'Dohyō Dynamique',
      'filename':  'Dohyo-Dynamique.md',
      'emoji': '😃',
      'description': 'Boostez cohésion et engagement avec une rétro ludique inspirée du sumo pour transformer tensions en actions collectives.',
      'tags': ['Performance', 'Innovation', 'Fun'],
    },
    {
      'id': 'joyeuses-paques',
      'name': 'Joyeuses Pâques',
      'filename':  'Joyeuses-Paques.md',
      'emoji': '😃',
      'description': 'Chasse aux œufs ludique pour faire émerger et prioriser des actions d\'amélioration dans une ambiance festive et bienveillante.',
      'tags': ['Fun','Processus', 'Mood', 'Innovation'],
    },
    {
      'id': 'daki',
      'name': 'Daki',
      'filename':  'DAKI.md',
      'emoji': '😃',
      'description': 'identifiez ce qu’il faut arrêter, garder, améliorer ou tester pour structurer l’amélioration continue de l’équipe.',
      'tags': ['Processus', 'Performance'],
    },
    {
      'id': 'petits-cochons',
      'name': 'Les 3 petits cochons',
      'filename':  'Petits-Cochons.md',
      'emoji': '😃',
      'description': 'Évaluez la solidité de vos pratiques via les maisons des 3 petits cochons pour renforcer ce qui tient, améliorer ce qui vacille et célébrer vos réussites.',
      'tags': ['Processus', 'Fun'],
    },
    {
      'id': 'good-bad-ugly',
      'name': 'The Good, the Bad & the Ugly',
      'filename':  'Not-Implemented.md',
      'emoji': '😃',
      'description': 'Cette retrospective n\'est pas encore accéssible, elle le sera bientôt.',
      'tags': ['Sprint', 'Fun', 'Performance'],
    },
    {
      'id': 'jurassic-park',
      'name': 'Jurassic Park',
      'filename':  'Jurassic-Park.md',
      'emoji': '😃',
      'description': 'Un jeu de rôle immersif pour identifier des problèmes clés et générer des solutions créatives dans une ambiance ludique et originale.',
      'tags': ['Innovation', 'Fun', 'Processus', 'Conflits'],
    },
  ]
  const retrospectiveDict = tagsRetrospectives.reduce<Record<string, Retrospective>>((acc, retro) => {
    return { ...acc, [retro.id]: retro }
  }, {})

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
      podium: {
        gold: retrospectiveDict['starfish'],
        silver: retrospectiveDict['4l'],
        bronze: retrospectiveDict['daki'],
      },
      additional: [
        retrospectiveDict['jurassic-park'],
        retrospectiveDict['joyeuses-paques'],
        retrospectiveDict['petits-cochons'],
        retrospectiveDict['good-bad-ugly'],
        retrospectiveDict['start-stop-continue'],
        retrospectiveDict['dohyo-dynamique'],
      ],
    })
  })

  it('should compute no match result', () => {
    const answers: Computation[] = []
    const result = computeAppropriateRetroBasedOnScoring(answers, tagsRetrospectives)
    expect(result).toEqual({
      type: RetrospectiveResultType.NO_MATCH,
      podium: {
        gold: retrospectiveDict['mad-sad-glad'],
        silver: retrospectiveDict['dixit'],
        bronze: retrospectiveDict['start-stop-continue'],
      },
      additional: [],
    })
  })

  it('should compute no pertinent result', () => {
    const retrospectives = [
      { id: '', description:'', emoji: '', filename: '', name: 'Mad Sad Glad', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { id: '', description:'', emoji: '', filename: '', name: 'Dixit', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { id: '', description:'', emoji: '', filename: '', name: 'Start Stop Continue', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { id: '', description:'', emoji: '', filename: '', name: 'Dark Manifesto', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { id: '', description:'', emoji: '', filename: '', name: 'Vis ma vie', 'tags': ['Conflits', 'Vision', 'Fun'] },
      { id: '', description:'', emoji: '', filename: '', name: 'La carte postale du futur', 'tags': ['Conflits', 'Vision', 'Fun'] },
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
      podium: {
        gold: { id: '', description:'', emoji: '', filename: '', name: 'Mad Sad Glad', 'tags': ['Conflits', 'Vision', 'Fun'] },
        silver: { id: '', description:'', emoji: '', filename: '', name: 'Dixit', 'tags': ['Conflits', 'Vision', 'Fun'] },
        bronze: { id: '', description:'', emoji: '', filename: '', name: 'Start Stop Continue', 'tags': ['Conflits', 'Vision', 'Fun'] },
      },
      additional: [],
    })
  })
})
