import { task } from "../../business/entities/task";

export function toTaskModel(obj: any): task {
    return {
        id: obj.id,
        authorId: obj.author_id,
        deadline: obj.deadline,
        description: obj.description,
        title: obj.title
    }
}

// export function setTasks(myUser: user, tasks: task[]): user {
//     myUser.task = tasks
//     return myUser
// }