export type Request = {
    body: {
        city: string;
    };
}

export type Response = {
    status(value: number | undefined): number;
    json(value: object): object;
}