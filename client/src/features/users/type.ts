import { User } from "../auth/types";

export type LoadUsersState = {
    users: User[]
    error: undefined |string
}