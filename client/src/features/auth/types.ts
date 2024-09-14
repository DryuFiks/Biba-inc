
export type User = {
    id: number;
    name: string;
    email: string;
    banned: boolean;
    roll: string;
};  

export type UserSignIn = {
    email: string;
    password: string;
};
export type UserSignUp = {
    name: string;
    email: string;
    password: string;
    rpassword: string;
}


export type UserWithoutId = Omit<User, 'id'>;



export type AuthState = {
    auth: undefined | User;
    error: string | undefined;
    loading: boolean;
}

