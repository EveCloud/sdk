/**
 * @name create
 * @description Create two-factor authentication token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/TwoFactor.Create
 * @returns {Promise<String>} Success message
 */
export function create(): Promise<string>;
/**
 * @name enable
 * @description Enable two-factor authentication
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/TwoFactor.Enable
 * @param {String} code Two-factor authentication code
 * @returns {Promise<Array>} Recovery codes
 */
export function enable(code: string): Promise<any[]>;
/**
 * @name disable
 * @description Disable two-factor authentication
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/TwoFactor.Disable
 * @param {String} code Two-factor authentication code
 * @returns {Promise<String>} Success message
 */
export function disable(code: string): Promise<string>;
//# sourceMappingURL=twoFactor.d.ts.map