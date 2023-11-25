/**
 * @name list
 * @description List workpaces registries
 * @namespace Registries
 * @link https://docs.evecloud.xyz/reference/api/workspaces/registries/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Registries
 */
export function list(workspaceID: string): Promise<any>;
/**
 * @name get
 * @description Get workpace registry
 * @namespace Registries
 * @link https://docs.evecloud.xyz/reference/api/workspaces/registries/view
 * @param {String} workspaceID Workspace ID
 * @param {String} registryID Registry ID
 * @returns {Promise<Object>} Registry
 */
export function get(workspaceID: string, registryID: string): Promise<any>;
/**
 * @name add
 * @description Add Registry
 * @namespace Registries
 * @link https://docs.evecloud.xyz/reference/api/workspaces/registries/add
 * @param {String} workspaceID Workspace ID
 * @param {Object} data Registry Data
 * @returns {Promise<Object>} Success Message
 */
export function add(workspaceID: string, data: any): Promise<any>;
/**
 * @name remove
 * @description Remove Registry
 * @namespace Registries
 * @link https://docs.evecloud.xyz/reference/api/workspaces/registries/remove
 * @param {String} workspaceID Workspace ID
 * @param {String} registryID Registry ID
 * @returns {Promise<Object>} Success Message
 */
export function remove(workspaceID: string, registryID: string): Promise<any>;
//# sourceMappingURL=registries.d.ts.map