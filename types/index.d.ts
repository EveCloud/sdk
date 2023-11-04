export let Request: import("axios").AxiosInstance;
export let setToken: (token: string) => void;
export let setURL: (url: string) => void;
export let setWorkspace: (workspaceID: string) => void;
export let APIError: (error: string) => string;
export namespace Account {
    let get: typeof import("./account/account").get;
    let update: typeof import("./account/account").update;
    let remove: typeof import("./account/account").remove;
    let security: {
        events: {
            list: (params: string) => Promise<any>;
        };
    };
    let tokens: typeof import("./account/tokens");
    let integrations: {
        github: {
            repositories: {
                list: () => Promise<any>;
            };
            connect: (code: string, installationId: string) => Promise<string>;
        };
    };
    let preferences: typeof import("./account/preferences");
    let tfa: typeof import("./account/twoFactor");
}
export namespace Workspaces {
    export let list: typeof import("./workspaces/workspaces").list;
    let get_2: typeof import("./workspaces/workspaces").get;
    export { get_2 as get };
    export let create: typeof import("./workspaces/workspaces").create;
    let update_2: typeof import("./workspaces/workspaces").update;
    export { update_2 as update };
    let remove_2: typeof import("./workspaces/workspaces").remove;
    export { remove_2 as remove };
    export let leave: typeof import("./workspaces/workspaces").leave;
    export let members: typeof import("./workspaces/members");
    export let invoices: typeof import("./workspaces/invoices");
    export let paymentMethods: typeof import("./workspaces/payments");
    export let registries: typeof import("./workspaces/registries");
    export let subscription: typeof import("./workspaces/subscription");
}
export namespace Projects {
    let list_2: typeof import("./projects/projects").list;
    export { list_2 as list };
    let get_4: typeof import("./projects/projects").get;
    export { get_4 as get };
    let create_2: typeof import("./projects/projects").create;
    export { create_2 as create };
    let update_4: typeof import("./projects/projects").update;
    export { update_4 as update };
    let remove_4: typeof import("./projects/projects").remove;
    export { remove_4 as remove };
    export let secrets: typeof import("./projects/secrets");
}
export namespace Services {
    let list_4: typeof import("./services/services").list;
    export { list_4 as list };
    let create_4: typeof import("./services/services").create;
    export { create_4 as create };
    let get_6: typeof import("./services/services").get;
    export { get_6 as get };
    let update_6: typeof import("./services/services").update;
    export { update_6 as update };
    export let resume: typeof import("./services/services").resume;
    export let pause: typeof import("./services/services").pause;
    export let revisions: typeof import("./services/revisions");
}
export let Utils: typeof import("./utils/utils");
//# sourceMappingURL=index.d.ts.map