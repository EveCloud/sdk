export let github: {
    repositories: {
        list: () => Promise<any>;
    };
    connect: (code: string, installationId: string) => Promise<string>;
};
//# sourceMappingURL=integrations.d.ts.map