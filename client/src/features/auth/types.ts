
export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    rpassword: string;
    isSaller: boolean;
};  

export type UserSignIn = Omit<User, 'id' |'name' | 'rpassword' | 'isSaller'>;
export type UserSignUp = Omit<User, 'id' | 'rpassword' |'isSaller'> & { rpassword: string };


export type UserWithoutId = Omit<User, 'id'>;



export type AuthState = {
    auth: undefined | User;
    error: string | undefined;
}

