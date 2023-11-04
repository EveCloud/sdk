module.exports = {
  Request: require('./request').request,
  setToken: require('./request').setToken,
  setURL: require('./request').setURL,
  setWorkspace: require('./request').setWorkspace,
  APIError: require('./request').APIError,
  Account: {
    get: require('./account/account').get,
    update: require('./account/account').update,
    remove: require('./account/account').remove,
    security: require('./account/security'),
    tokens: require('./account/tokens'),
    integrations: require('./account/integrations'),
    preferences: require('./account/preferences'),
    tfa: require('./account/twoFactor')
  },
  Workspaces: {
    list: require('./workspaces/workspaces').list,
    get: require('./workspaces/workspaces').get,
    create: require('./workspaces/workspaces').create,
    update: require('./workspaces/workspaces').update,
    remove: require('./workspaces/workspaces').remove,
    leave: require('./workspaces/workspaces').leave,
    members: require('./workspaces/members'),
    invoices: require('./workspaces/invoices'),
    paymentMethods: require('./workspaces/payments'),
    registries: require('./workspaces/registries'),
    subscription: require('./workspaces/subscription')
  },
  Projects: {
    list: require('./projects/projects').list,
    get: require('./projects/projects').get,
    create: require('./projects/projects').create,
    update: require('./projects/projects').update,
    remove: require('./projects/projects').remove,
    secrets: require('./projects/secrets')
  },
  Services: {
    list: require('./services/services').list,
    create: require('./services/services').create,
    get: require('./services/services').get,
    update: require('./services/services').update,
    resume: require('./services/services').resume,
    pause: require('./services/services').pause,
    revisions: require('./services/revisions')
  },
  Utils: require('./utils/utils')
}
