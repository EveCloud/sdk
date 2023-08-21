/**
 * @name getCurrent
 * @description Get current workspace
 * @namespace Account
 * @private For dashboard use only
 * @returns {Promise<Object>} Workspace object
 */
export function getCurrent(): Promise<any>;
/**
 * @name updateCurrent
 * @description Update current workspace
 * @namespace Account
 * @private For dashboard use only
 * @returns {Promise<Object>} Workspace object
 */
export function updateCurrent(id: any): Promise<any>;
/**
 * @name getAll
 * @description Get all workspaces
 * @namespace Account
 * @private For dashboard use only
 * @returns {Promise<Object>} Workspaces
 */
export function getAll(): Promise<any>;
