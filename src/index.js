module.exports = {
    Request: require('./request').request,
    setToken: require("./request").setToken,
    APIError: require("./request").APIError,
    Account: require("./account/account"),
    Invoices: require("./account/invoices"),
    Services: require("./account/services"),
    Payments: require("./account/payments"),
    Tokens: require("./account/tokens"),
    TwoFactor: require("./account/twofactor"),
    Events: require("./account/events"),
    Logins: require("./account/logins"),
}