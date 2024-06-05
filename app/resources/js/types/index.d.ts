export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type Color = 'default'|'success'|'danger'|'warning';
export type Size = 'xs'|'sm'|'md'|'lg'|'xl';