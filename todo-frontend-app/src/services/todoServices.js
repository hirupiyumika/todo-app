import http from "./httpServices";

const apiEndpoint = "http://localhost:4000/api";

export function addTodo(todo) {
    const data = {
        task: todo,
        status: 'pending'
    };
    return http.post(`${apiEndpoint}/todo`, data);
}

export function editTodo(id, todo, mark) {
    const data = {
        task: todo,
        status: mark
    };
    return http.put(`${apiEndpoint}/todo/${id}`, data);
}

export function deleteTodo(data) {
    return http.delete(`${apiEndpoint}/todo/${data}`);
}

export function deleteAllTodos(data) {
    return http.delete(`${apiEndpoint}/all/todos`);
}

export function allTodos() {
    return http.get(`${apiEndpoint}/all/todos`);
}

export function pendingTodos() {
    return http.get(`${apiEndpoint}/pending/todos`);
}

export function doneTodos() {
    return http.get(`${apiEndpoint}/complete/todos`);
} 