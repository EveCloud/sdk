/**
 * @name list
 * @description Get your authentication events from the last 30 days.
 * @namespace Security
 * @link https://docs.evecloud.xyz/api/account/security/events
 * @param {String} params Parameters
 * @returns {Promise<Object>} Authentication events
 */
declare function listEvents(params: string): Promise<any>;
export namespace events {
    export { listEvents as list };
}
export {};
//# sourceMappingURL=security.d.ts.map