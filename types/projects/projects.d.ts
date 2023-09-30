/**
 * @name list
 * @description Get projects
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Projects.List
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Projects
 */
export function list(workspaceID: string, params: any): Promise<any>;
/**
 * @name get
 * @description Get project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Projects.Get
 * @param {String} id Project ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Project
 */
export function get(id: string, workspaceID: string): Promise<any>;
/**
 * @name create
 * @description Create project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Projects.Create
 * @param {String} workspaceID Workspace ID
 * @param {Object} data Project data
 * @returns {Promise<Object>} Project
 */
export function create(workspaceID: string, data: any): Promise<any>;
/**
 * @name update
 * @description Update project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Projects.Update
 * @param {String} id Project ID
 * @param {Object} data Project data
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Project
 */
export function update(id: string, data: any, workspaceID: string): Promise<any>;
/**
 * @name remove
 * @description Remove project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Projects.Delete
 * @param {String} id Project ID
 * @param {Boolean} confirm Confirm removal
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success message
 */
export function remove(id: string, confirm: boolean, workspaceID: string): Promise<any>;
