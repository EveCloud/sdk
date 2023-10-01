/**
 * @name getInfo
 * @description Get the current user's account information
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Account.Get
 * @namespace Account
 * @returns {Promise<Object>} User object
 */
export function getInfo(): Promise<any>;
/**
 * @name updateInfo
 * @description Update the current user's account information
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Account.Update
 * @param {Object} data Information to update
 * @returns {Promise<Object>} User object
 */
export function updateInfo(data: any): Promise<any>;
/**
 * @name remove
 * @description Delete the current user's account
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Account.Delete
 * @namespace Account
 * @param {String} confirm Confirm account deletion
 * @returns {Promise<Object>} Success message
 */
export function remove(confirm: string): Promise<any>;
/**
 * @name getPreferences
 * @description Get the current user's account preferences
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api#tag/Account/operation/Preferences.Get
 * @returns {Promise<Object>} User preferences object
 */
export function getPreferences(): Promise<any>;
/**
 * @name updatePreferences
 * @description Update the current user's account preferences
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Preferences.Update
 * @param {Object} data Information to update
 * @returns {Promise<String>} Message.
 */
export function updatePreferences(data: any): Promise<string>;
//# sourceMappingURL=account.d.ts.map