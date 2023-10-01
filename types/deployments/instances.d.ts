/**
 * @name list
 * @description List deployment instances
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Instances.List
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Instances
 */
export function list(id: string, service: string, deployment: string, workspaceID: string, params: string): Promise<any>;
/**
 * @name get
 * @description Get deployment instance
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Instances.Get
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} instance Instance ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Instance
 */
export function get(id: string, service: string, deployment: string, instance: string, workspaceID: string, params: any): Promise<any>;
//# sourceMappingURL=instances.d.ts.map