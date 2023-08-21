/**
 * @name get
 * @description Get workpace usage
 * @namespace Workspaces
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Workspaces/operation/Usage.Get
 * @param {String} id Workspace ID
 * @param {String} month Month
 * @param {String} year Year
 * @returns {Promise<Object>} Usage
 */
export function get(id: string, month: string, year: string): Promise<any>;
