import { ReactPlugin } from '@microsoft/applicationinsights-react-js'
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const reactPlugin = new ReactPlugin()

const appInsights = new ApplicationInsights({
  config: {
    connectionString: 'InstrumentationKey=dd3ca74d-b28e-4084-b21c-a9793bb7a3d1;IngestionEndpoint=https://northeurope-2.in.applicationinsights.azure.com/;LiveEndpoint=https://northeurope.livediagnostics.monitor.azure.com/;ApplicationId=22948e87-427f-4334-b1a9-984eb1df8eaa',
    extensions: [reactPlugin],
    enableAutoRouteTracking: true,
  },
})

appInsights.loadAppInsights()

export { reactPlugin, appInsights }
