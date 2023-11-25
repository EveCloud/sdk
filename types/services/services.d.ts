/**
 * @name list
 * @description List project services
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/list
 * @param {String} projectID Project ID
 * @param {String} params Query parameters
 * @returns {Promise<Object>} Services
 */
export function list(projectID: string, params: string): Promise<any>;
/**
 * @name get
 * @description Get project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/view
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @returns {Promise<Object>} Service
 */
export function get(projectID: string, serviceID: string): Promise<any>;
/**
 * @name create
 * @description Create project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/create
 * @param {String} projectID Project ID
 * @param {Object} data Service data
 * @returns {Promise<Object>} Success Message
 */
export function create(projectID: string, data: any): Promise<any>;
/**
 * @name update
 * @description Update project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/update
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @param {Object} data Service data
 * @returns {Promise<Object>} Success Message
 */
export function update(projectID: string, serviceID: string, data: any): Promise<any>;
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
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/pause
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @returns {Promise<Object>} Success Message
 */
export function pause(projectID: string, serviceID: string): Promise<any>;
/**
 * @name resume
 * @description Resume project service
 * @namespace Services
 * @link https://docs.evecloud.xyz/reference/api/services/resume
 * @param {String} projectID Project ID
 * @param {String} serviceID Service ID
 * @returns {Promise<Object>} Success Message
 */
export function resume(projectID: string, serviceID: string): Promise<any>;
//# sourceMappingURL=services.d.ts.map