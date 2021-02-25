import { type } from "os"

export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type loginInput = {
    email: string,
    password: string
}

export type Recipes = {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    user_id: string
}