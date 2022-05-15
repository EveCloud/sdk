module.exports = {
    setToken: require("./request").setToken,
    Account: require("./account/account"),
    Invoices: require("./account/invoices"),
    Services: require("./account/services"),
    Payments: require("./account/payments"),
    Tokens: require("./account/tokens"),
    TwoFactor: require("./account/twofactor"),
}