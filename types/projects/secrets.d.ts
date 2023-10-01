/**
 * @name list
 * @description Get project secrets
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.List
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Secrets
 */
export function list(projectID: string, workspaceID: string, params: string): Promise<any>;
/**
 * @name get
 * @description Get project secret
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.Get
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} secretID Secret ID
 * @returns {Promise<Object>} Secret
 */
export function get(projectID: string, workspaceID: string, secretID: string): Promise<any>;
/**
 * @name create
 * @description Create project secret
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.Create
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} key Secret key
 * @param {String} value Secret value
 * @returns {Promise<Object>} Success message
 */
export function create(projectID: string, workspaceID: string, key: string, value: string): Promise<any>;
/**
 * @name update
 * @description Update project secret
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.Update
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} secretID Secret ID
 * @param {String} value Secret value
 * @returns {Promise<Object>} Success message
 */
export function update(projectID: string, workspaceID: string, secretID: string, value: string): Promise<any>;
/**
 * @name remove
 * @description Delete project secret
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api#tag/Projects/operation/Secrets.Delete
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} secretID Secret ID
 * @returns {Promise<Object>} Success message
 */
export function remove(projectID: string, workspaceID: string, secretID: string): Promise<any>;
//# sourceMappingURL=secrets.d.ts.map