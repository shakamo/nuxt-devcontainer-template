

export type MenuItemType = {
    label: string;
    icon?: string;
    to?: string;
    class?: string;
    target?: string;
    items?: MenuItemType[];
    visible?: boolean;
    url?: string;
    disabled?: boolean;
    command?: Function;
};

export interface ImportPTOptions {
    as: string;
    from: string;
}

export interface ResolvePathOptions {
    name?: string;
    as?: string;
    from: string;
    type?: 'config' | 'component' | 'directive' | 'composable' | 'service' | 'style' | undefined;
}
