/**
 * @name list
 * @description Get account tokens
 * @namespace Tokens
 * @link https://docs.evecloud.xyz/api/account/tokens/list
 * @param {String} params Parameters
 * @returns {Promise<Object>} Tokens
 */
export function list(params: string): Promise<any>;
/**
 * @name get
 * @description Get account token
 * @namespace Tokens
 * @link https://docs.evecloud.xyz/api/account/tokens/view
 * @param {String} tokenID Token ID
 * @returns {Promise<Object>} Token
 */
export function get(tokenID: string): Promise<any>;
/**
 * @name create
 * @description Create account token
 * @namespace Token
 * @link https://docs.evecloud.xyz/api/account/tokens/create
 * @param {String} label Token label
 * @param {String} expiration Token expiration
 * @returns {Promise<String>} Success message
 */
export function create(label: string, expiration: string): Promise<string>;
/**
 * @name remove
 * @description Remove account token
 * @namespace Token
 * @link https://docs.evecloud.xyz/api/account/tokens/delete
 * @param {String} tokenID Token ID
 * @returns {Promise<String>} Success message
 */
export function remove(tokenID: string): Promise<string>;
//# sourceMappingURL=tokens.d.ts.map