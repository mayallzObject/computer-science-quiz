

export type User = {
    id: number | null
    name: string | null
    email: string | null
    token: string | null
    score: number | null
}

export type Credentials = {
    email: string;
    password: string;
}

export type SignupData = {
    name: string;
    email: string;
    password: string;

}