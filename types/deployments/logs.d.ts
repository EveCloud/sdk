/**
 * @name build
 * @description Get deployment build logs
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Logs.Build
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Logs
 */
export function build(id: string, service: string, deployment: string, workspaceID: string, params: string): Promise<any>;
/**
 * @name runtime
 * @description Get deployment runtime logs
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Logs.Runtime
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} instanceID Instance ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Logs
 */
export function runtime(id: string, service: string, deployment: string, instanceID: string, workspaceID: string, params: string): Promise<any>;
