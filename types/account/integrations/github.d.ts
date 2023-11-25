/**
 * @name list
 * @description Get GitHub repositories
 * @namespace Integrations
 * @link https://docs.evecloud.xyz/reference/api/account/integrations/github/repositories
 * @returns {Promise<Object>} GitHub repositories
 */
declare function listRepositories(): Promise<any>;
/**
 * @name connect
 * @description Connect GitHub to your account
 * @namespace Integrations
 * @link https://docs.evecloud.xyz/reference/api/account/integrations/github/connect
 * @param {String} code The code returned from GitHub
 * @param {String} installationId The installation ID returned from GitHub
 * @returns {Promise<String>} Success message
 */
export function connect(code: string, installationId: string): Promise<string>;
export declare namespace repositories {
    export { listRepositories as list };
}
export {};
//# sourceMappingURL=github.d.ts.map