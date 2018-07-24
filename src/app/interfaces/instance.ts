export interface Instance {
    id?: number;
    name: string;
    owner_name: string;
    owner_email: string;
    active: boolean;
    created_at: Date;
    modified_at: Date;
}
