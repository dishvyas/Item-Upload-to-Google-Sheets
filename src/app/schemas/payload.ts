export interface Payload {
    majorDimension: string;
    range: string;
    values: any[][];
}

export interface Body {
    grant_type: string;
    client_id: string;
    client_secret: string;
    refresh_token: string;
}
