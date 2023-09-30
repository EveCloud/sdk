/**
 * @name list
 * @description List workpaces registries
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Registries.List
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Registries
 */
export function list(id: string): Promise<any>;
/**
 * @name get
 * @description Get workpace registry
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Registries.Get
 * @param {String} id Workspace ID
 * @param {String} registryID Registry ID
 * @returns {Promise<Object>} Registry
 */
export function get(id: string, registryID: string): Promise<any>;
/**
 * @name add
 * @description Add Registry
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Registries.Add
 * @param {String} id Workspace ID
 * @param {Object} data Registry Data
 * @returns {Promise<Object>} Success Message
 */
export function add(id: string, data: any): Promise<any>;
/**
 * @name remove
 * @description Remove Registry
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/api#tag/Workspaces/operation/Registries.Add
 * @param {String} id Workspace ID
 * @param {String} registryID Registry ID
 * @returns {Promise<Object>} Success Message
 */
export function remove(id: string, registryID: string): Promise<any>;
