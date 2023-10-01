export const request: import("axios").AxiosInstance;
/**
 * Set Authorization header
 * @param {String} token Access token
 * @returns {void}
 */
export function setToken(token: string): void;
/**
 * API Error
 * @param {String} error Axios Error
 * @returns {String} Error message
 */
export function APIError(error: string): string;
/**
 * Set URL
 * @param {String} url URL
 * @returns {void}
 */
export function setURL(url: string): void;
//# sourceMappingURL=request.d.ts.map