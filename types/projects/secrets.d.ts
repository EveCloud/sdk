/**
 * @name list
 * @description Get project secrets
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/reference/api/projects/secrets/list
 * @param {String} projectID Project ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Secrets
 */
export function list(projectID: string, params: string): Promise<any>;
/**
 * @name get
 * @description Get project secret
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/reference/api/projects/secrets/view
 * @param {String} projectID Project ID
 * @param {String} secretID Secret ID
 * @returns {Promise<Object>} Secret
 */
export function get(projectID: string, secretID: string): Promise<any>;
/**
 * @name create
 * @description Create project secret
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/reference/api/projects/secrets/create
 * @param {String} projectID Project ID
 * @param {String} key Secret key
 * @param {String} value Secret value
 * @returns {Promise<Object>} Success message
 */
export function create(projectID: string, key: string, value: string): Promise<any>;
/**
 * @name update
 * @description Update project secret
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/reference/api/projects/secrets/update
 * @param {String} projectID Project ID
 * @param {String} secretID Secret ID
 * @param {String} value Secret value
 * @returns {Promise<Object>} Success message
 */
export function update(projectID: string, secretID: string, value: string): Promise<any>;
/**
 * @name remove
 * @description Delete project secret
 * @namespace Secrets
 * @link https://docs.evecloud.xyz/reference/api/projects/secrets/delete
 * @param {String} projectID Project ID
 * @param {String} secretID Secret ID
 * @returns {Promise<Object>} Success message
 */
export function remove(projectID: string, workspaceID: any, secretID: string): Promise<any>;
//# sourceMappingURL=secrets.d.ts.map