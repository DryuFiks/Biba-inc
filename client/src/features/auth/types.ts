
export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    rpassword: string;
    banned: boolean;
    roll: string;
};  

export type UserSignIn = Omit<User, 'id' |'name' | 'rpassword' | 'banned'>;
export type UserSignUp = Omit<User, 'id' | 'rpassword' |'banned'> & { rpassword: string };


export type UserWithoutId = Omit<User, 'id'>;



export type AuthState = {
    auth: undefined | User;
    error: string | undefined;
    loading: boolean;
}

