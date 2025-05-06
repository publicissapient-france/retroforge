import { index, layout, prefix, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  layout('layouts/HomeLayout.tsx', [index('routes/home.tsx')]),
  layout('layouts/MainLayout.tsx', [
    ...prefix('hammer-swipe', [
      index('routes/hammer-swipe.tsx'),
      route('match', 'routes/hammer-swipe-match.tsx'),
    ]),
    ...prefix('deep-anvil', [
      index('routes/deep-anvil.tsx'),
      route('match', 'routes/deep-anvil-match.tsx'),
    ]),
  ]),
  layout('layouts/BasicLayout.tsx', [
    route('deep-anvil/match/:retrospectiveId', 'routes/retrospective-details.tsx', { id: 'deepAnvilMatch' }),
    route('hammer-swipe/match/:retrospectiveId', 'routes/retrospective-details.tsx', { id: 'hammerSwipeMatch' }),
    ...prefix('retrospectives', [
      index('routes/retrospectives.tsx'),
      route(':retrospectiveId', 'routes/retrospective-details.tsx'),
    ]),
  ]),
] satisfies RouteConfig
