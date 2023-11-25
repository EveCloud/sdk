/**
 * @name list
 * @description Get projects
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api/projects/list
 * @returns {Promise<Object>} Projects
 */
export function list(params: any): Promise<any>;
/**
 * @name get
 * @description Get project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api/projects/view
 * @param {String} projectID Project ID
 * @returns {Promise<Object>} Project
 */
export function get(projectID: string): Promise<any>;
/**
 * @name create
 * @description Create project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api/projects/create
 * @param {Object} data Project data
 * @returns {Promise<Object>} Project
 */
export function create(data: any): Promise<any>;
/**
 * @name update
 * @description Update project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api/projects/update
 * @param {String} projectID Project ID
 * @param {Object} data Project data
 * @returns {Promise<Object>} Project
 */
export function update(projectID: string, data: any): Promise<any>;
/**
 * @name remove
 * @description Remove project
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/api/projects/delete
 * @param {String} projectID Project ID
 * @param {Boolean} confirm Confirm removal
 * @returns {Promise<Object>} Success message
 */
export function remove(projectID: string, confirm: boolean): Promise<any>;
//# sourceMappingURL=projects.d.ts.map