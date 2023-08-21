/**
 * @name list
 * @description List workpaces members
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Members.List
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Members
 */
export function list(id: string): Promise<any>;
/**
 * @name get
 * @description Get workpace member
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Members.Get
 * @param {String} id Workspace ID
 * @param {String} memberID Member ID
 * @returns {Promise<Object>} Member
 */
export function get(id: string, memberID: string): Promise<any>;
/**
 * @name add
 * @description Add a member
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Members.Add
 * @param {String} id Workspace ID
 * @param {String} email Member Email
 * @param {String} role Member Role
 * @returns {Promise<Object>} Success Message
 */
export function add(id: string, email: string, role: string): Promise<any>;
/**
 * @name remove
 * @description Remove a member
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Members.Remove
 * @param {String} id Workspace ID
 * @param {String} memberID Member ID
 * @param {String} confirm Confirm
 * @returns {Promise<Object>} Success Message
 */
export function remove(id: string, memberID: string, confirm: string): Promise<any>;
