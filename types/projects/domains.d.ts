/**
 * @name list
 * @description Get domains
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Domains.List
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Domains
 */
export function list(projectID: string, workspaceID: string, params: string): Promise<any>;
/**
 * @name get
 * @description Get domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Domains.Get
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domainID Domain ID
 * @returns {Promise<Object>} Domain
 */
export function get(projectID: string, workspaceID: string, domainID: string): Promise<any>;
/**
 * @name refresh
 * @description Verify domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Domains.Refresh
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domainID Domain ID
 * @returns {Promise<Object>} Success message
 */
export function refresh(projectID: string, workspaceID: string, domainID: string): Promise<any>;
/**
 * @name create
 * @description Create domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Domains.Create
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domain Domain
 * @param {String} service Service ID
 * @returns {Promise<Object>} Success message
 */
export function create(projectID: string, workspaceID: string, domain: string, service: string): Promise<any>;
/**
 * @name update
 * @description Update domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Domains.Update
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domainID Domain ID
 * @param {String} serviceID Service ID
 * @returns {Promise<Object>} Success message
 */
export function update(projectID: string, workspaceID: string, domainID: string, serviceID: string): Promise<any>;
/**
 * @name remove
 * @description Remove domain
 * @namespace Projects
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Projects/operation/Domains.Remove
 * @param {String} projectID Project ID
 * @param {String} workspaceID Workspace ID
 * @param {String} domainID Domain ID
 * @returns {Promise<Object>} Success message
 */
export function remove(projectID: string, workspaceID: string, domainID: string): Promise<any>;
