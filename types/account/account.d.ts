/**
 * @name get
 * @description Get the current user's account information
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api/account/view
 * @returns {Promise<Object>} User object
 */
export function get(): Promise<any>;
/**
 * @name findOneAndUpdate
 * @description Update the current user's account information
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api/account/update
 * @param {Object} data Information to update
 * @returns {Promise<Object>} User object
 */
export function update(data: any): Promise<any>;
/**
 * @name remove
 * @description Delete the current user's account
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/api/account/delete
 * @param {String} confirm Confirm account deletion
 * @returns {Promise<String>} Success message
 */
export function remove(confirm: string): Promise<string>;
//# sourceMappingURL=account.d.ts.map