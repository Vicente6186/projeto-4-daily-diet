import AsyncStorage from "@react-native-async-storage/async-storage"
import AppError from "../erros/AppError"

export type MealType ={
    id: string
    name: string
    description: string
    date: Date
    isDiet: boolean
}

export type StoreMealParams = Omit<MealType, 'id'>


export default class Meal {
    static collection = '@meals'

    static async store({ name, description, date, isDiet }: StoreMealParams) {
        name = name.trim()
        
        if(!name || typeof isDiet !== 'boolean' || isNaN(date.getTime())) throw new AppError('O nome, a data, a hora e informar se a refeição foi dentro da dieta são obrigatórios!')
        const meals = await this.index()
        const newMeals = JSON.stringify([...meals, { id: Date.now(), name, description, date, isDiet }])
        AsyncStorage.setItem(this.collection, newMeals)
    }

    static async index() : Promise<MealType[]> {
       const meals = await AsyncStorage.getItem(this.collection)
       let parsedMeals = meals ? JSON.parse(meals) : []
       parsedMeals = parsedMeals.map((meal: MealType) => ({...meal, date: new Date(meal.date)}))
       return parsedMeals
    }

    static async update({ id, name, description, date, isDiet }: MealType) {
        name = name.trim()
        
        if(!name || typeof isDiet !== 'boolean' || isNaN(date.getTime())) throw new AppError('O nome, a data, a hora e informar se a refeição foi dentro da dieta são obrigatórios!')
        const meals = await this.index()
        const index = meals.findIndex(meal => meal.id === id)
        meals[index] = { id, name, description, date, isDiet }
        const newMeals = JSON.stringify(meals)
        AsyncStorage.setItem(this.collection, newMeals)
    }

    static async destroy(id: string) {
        const meals = await this.index()
        const newMeals = JSON.stringify(meals.filter(meal => meal.id !== id))
        await AsyncStorage.setItem(this.collection, newMeals)
    }
}