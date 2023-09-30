/**
 * @name list
 * @description Get deployments
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Deployments.List
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} workspaceID Workspace ID
 * @param {String} params Parameters
 * @returns {Promise<Object>} Deployments
 */
export function list(id: string, service: string, workspaceID: string, params: string): Promise<any>;
/**
 * @name get
 * @description Get deployment
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Deployments.Get
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Deployments
 */
export function get(id: string, service: string, deployment: string, workspaceID: string): Promise<any>;
/**
 * @name cancel
 * @description Cancel deployment
 * @namespace Deployments
 * @link https://docs.evecloud.xyz/reference/api#tag/Deployments/operation/Deployments.Cancel
 * @param {String} id Project ID
 * @param {String} service Service ID
 * @param {String} deployment Deployment ID
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Deployments
 */
export function cancel(id: string, service: string, deployment: string, workspaceID: string): Promise<any>;
