


export interface ITodos {
    sortBy: string,
    completed: number,
    uncompleted: number,
    todos: ITodo[]
}


export interface ITodo {
    id: number | string,
    todo: string,
    completed: boolean
}