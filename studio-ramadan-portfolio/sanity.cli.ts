import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '4qf89tvc',
    dataset: 'production',
  },
  deployment: {
    appId: 'cxfa2k7ob96q2c4t5w6trxzc',
  },

  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
