/**
 * @name list
 * @description Get account tokens
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Tokens.List
 * @param {String} params Parameters
 * @returns {Promise<Object>} Tokens
 */
export function list(params: string): Promise<any>;
/**
 * @name get
 * @description Get account token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Tokens.Get
 * @param {String} id Token ID
 * @returns {Promise<Object>} Token
 */
export function get(id: string): Promise<any>;
/**
 * @name create
 * @description Create account token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Tokens.Create
 * @param {String} label Token label
 * @param {String} expiration Token expiration
 * @returns {Promise<String>} Success message
 */
export function create(label: string, expiration: string): Promise<string>;
/**
 * @name update
 * @description Update account token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Tokens.Update
 * @param {String} id Token ID
 * @param {String} label Token label
 * @returns {Promise<String>} Success message
 */
export function update(id: string, label: string): Promise<string>;
/**
 * @name remove
 * @description Remove account token
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Tokens.Delete
 * @param {String} id Token ID
 * @returns {Promise<String>} Success message
 */
export function remove(id: string): Promise<string>;
