/**
 * @name list
 * @description List workpaces members
 * @namespace Members
 * @link https://docs.evecloud.xyz/reference/api/workspaces/members/list
 * @param {String} workspaceID Workspace ID
 * @returns {Promise<Object>} Members
 */
export function list(workspaceID: string): Promise<any>;
/**
 * @name get
 * @description Get workpace member
 * @namespace Members
 * @link https://docs.evecloud.xyz/reference/api/workspaces/members/view
 * @param {String} workspaceID Workspace ID
 * @param {String} memberID Member ID
 * @returns {Promise<Object>} Member
 */
export function get(workspaceID: string, memberID: string): Promise<any>;
/**
 * @name add
 * @description Add a member
 * @namespace Members
 * @link https://docs.evecloud.xyz/reference/api/workspaces/members/add
 * @param {String} workspaceID Workspace ID
 * @param {String} email Member Email
 * @param {String} role Member Role
 * @returns {Promise<Object>} Success Message
 */
export function add(workspaceID: string, email: string, role: string): Promise<any>;
/**
 * @name remove
 * @description Remove a member
 * @namespace Members
 * @link https://docs.evecloud.xyz/reference/api/workspaces/members/remove
 * @param {String} workspaceID Workspace ID
 * @param {String} memberID Member ID
 * @param {String} confirm Confirm
 * @returns {Promise<Object>} Success Message
 */
export function remove(workspaceID: string, memberID: string, confirm: string): Promise<any>;
//# sourceMappingURL=members.d.ts.map