/**
 * @name list
 * @description List workpaces
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.List
 * @returns {Promise<Object>} Workspaces
 */
export function list(): Promise<any>;
/**
 * @name get
 * @description Get workpace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.Get
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Workspace
 */
export function get(id: string): Promise<any>;
/**
 * @name create
 * @description Create a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.Create
 * @param {String} data Workspace data
 * @returns {Promise<Object>} Success Message
 */
export function create(data: string): Promise<any>;
/**
 * @name update
 * @description Update a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.Update
 * @param {String} id Workspace ID
 * @param {String} data Workspace data
 * @returns {Promise<Object>} Success Message
 */
export function update(id: string, data: string): Promise<any>;
/**
 * @name leave
 * @description Leave a workspace
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Workspaces.Leave
 * @param {String} id Workspace ID
 * @returns {Promise<Object>} Success Message
 */
export function leave(id: string): Promise<any>;
