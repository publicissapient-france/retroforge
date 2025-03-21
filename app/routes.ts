import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [index('routes/home.tsx'), route('hammer-swipe', 'routes/hammer-swipe.tsx')] satisfies RouteConfig
