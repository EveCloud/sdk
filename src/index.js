module.exports = {
    // SDK
    Request: require('./request').request,
    setToken: require("./request").setToken,
    setTeam: require("./request").setTeam,
    setURL: require("./request").setURL,
    APIError: require("./request").APIError,
    // Account
    Account: require("./account/account"),
    Invoices: require("./account/invoices"),
    Payments: require("./account/payments"),
    Tokens: require("./account/tokens"),
    Events: require("./account/events"),
    Logins: require("./account/logins"),
    // Teams
    Teams: require("./teams/teams"),
    TeamPayments: require("./teams/payments"),
    // Projects
    Projects: require("./projects/projects"),
    ProjectEvents: require("./projects/events"),
    // Services
    Services: require("./services/services"),
    ServiceInfo: require("./services/info"),
    // Support
    Support: require("./support/support"),
    // Utils
    Utils: require("./utils/utils")
}