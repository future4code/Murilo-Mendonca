import { connection } from '../index'
import { Recipes } from '../types/user'

export default async function insertRecipe(recipe: Recipes) {
    await connection.insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        createdAt: recipe.createdAt,
        user_id: recipe.user_id
    }).into('cookenu_recipes')
}