module.exports = {
    // SDK
    Request: require('./request').request,
    setToken: require("./request").setToken,
    APIError: require("./request").APIError,

    // Account
    Account: require("./account/account"),
    Invoices: require("./account/invoices"),
    Services: require("./account/services"),
    Payments: require("./account/payments"),
    Tokens: require("./account/tokens"),
    TwoFactor: require("./account/twofactor"),
    Events: require("./account/events"),
    Logins: require("./account/logins"),

    // Containers
    Containers: require("./containers/containers"),
    ContainerInfo: require("./containers/info"),
    ContainerConfig: require("./containers/config"),
    ContainerActions: require("./containers/actions"),
    ContainerBackups: require("./containers/backups"),
    ContainerFiles: require("./containers/files"),
    ContainerImages: require("./containers/images"),
    ContainerTags: require("./containers/tags"),

    // Others
    Support: require("./support/support")
}