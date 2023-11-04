/**
 * @name create
 * @description Create two-factor authentication token
 * @namespace TwoFactor
 * @link https://docs.evecloud.xyz/api/account/tfa/create
 * @returns {Promise<String>} Success message
 */
export function create(): Promise<string>;
/**
 * @name enable
 * @description Enable two-factor authentication
 * @namespace TwoFactor
 * @link https://docs.evecloud.xyz/api/account/tfa/enable
 * @param {String} code Two-factor authentication code
 * @returns {Promise<Array>} Recovery codes
 */
export function enable(code: string): Promise<any[]>;
/**
 * @name disable
 * @description Disable two-factor authentication
 * @namespace TwoFactor
 * @link https://docs.evecloud.xyz/api/account/tfa/disable
 * @param {String} code Two-factor authentication code
 * @returns {Promise<String>} Success message
 */
export function disable(code: string): Promise<string>;
//# sourceMappingURL=twoFactor.d.ts.map