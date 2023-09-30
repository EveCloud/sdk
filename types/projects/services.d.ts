/**
 * @name list
 * @description List project services
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.List
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Query parameters
 * @returns {Promise<Object>} Services
 */
export function list(projectID: string, workspaceID: string, params: string): Promise<any>;
/**
 * @name get
 * @description Get project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Get
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Service
 */
export function get(projectID: string, serviceID: string, workspaceID: string): Promise<any>;
/**
 * @name create
 * @description Create project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Create
 * @param {String} projectID Project ID
 * @param {Object} data Service data
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
export function create(projectID: string, data: any, workspaceID: string): Promise<any>;
/**
 * @name update
 * @description Update project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Update
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {Object} data Service data
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
export function update(projectID: string, serviceID: string, data: any, workspaceID: string): Promise<any>;
/**
 * @name redeploy
 * @description Redeploy project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Redeploy
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
export function redeploy(projectID: string, serviceID: string, workspaceID: string): Promise<any>;
/**
 * @name remove
 * @description Remove project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Delete
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
export function remove(projectID: string, serviceID: string, confirm: any, workspaceID: string): Promise<any>;
/**
 * @name pause
 * @description Pause project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Pause
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
export function pause(projectID: string, serviceID: string, workspaceID: string): Promise<any>;
/**
 * @name resume
 * @description Resume project service
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Services.Resume
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Success Message
 */
export function resume(projectID: string, serviceID: string, workspaceID: string): Promise<any>;
