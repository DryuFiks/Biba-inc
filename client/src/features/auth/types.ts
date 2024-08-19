
export type User = {
    id: number;
    name: string;
    img: string;
    password: string;
    isSaller: boolean;
};  

export type UserSignIn = Omit<User, 'id' |'img' | 'isSaller'>;
export type UserSignUp = Omit<User, 'id' | 'isSaller'> & { rpassword: string };


export type UserWithoutId = Omit<User, 'id'>;



export type AuthState = {
    auth: undefined | User;
    error: string | undefined;
}

