/**
 * @name getGitHubRepositories
 * @description Get GitHub repositories
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Integrations.GitHub.Repositories
 * @returns {Promise<Object>} GitHub repositories
 */
export function getGitHubRepositories(): Promise<any>;
/**
 * @name connectGitHub
 * @description Connect GitHub to your account
 * @namespace Account
 * @link https://docs.evecloud.xyz/reference/rest-api#tag/Account/operation/Integrations.GitHub.Connect
 * @param {String} code The code returned from GitHub
 * @param {String} installationId The installation ID returned from GitHub
 * @returns {Promise<String>} Success message
 */
export function connectGitHub(code: string, installationId: string): Promise<string>;
