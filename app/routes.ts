import { index, layout, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  layout('layouts/HomeLayout.tsx', [index('routes/home.tsx')]),
  layout('layouts/MainLayout.tsx', [
    route('hammer-swipe', 'routes/hammer-swipe.tsx'),
    route('deep-anvil', 'routes/deep-anvil.tsx'),
  ]),
] satisfies RouteConfig
