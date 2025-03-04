// 1. Todos massivini import qilamiz 
import { todos } from "./app.js";

// 2. Yangi todo qo'shish funksiyasi
export function addTodo(newTodo) {
    // Todos arrayidagi obyektlar qanday shaklda bo‘lsa, yangi obyekt ham xuddi shunday bo‘lishi kerak
    if (!newTodo.id || !newTodo.title || typeof newTodo.completed !== "boolean") {
        throw new Error('Xato');
    }
    
    todos.push(newTodo);
    return newTodo;
}

// 3. Todo'ni id bo‘yicha o‘chirish funksiyasi
export function deleteTodo(id) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        throw new Error('Xato');
    }
    
    const deletedTodo = todos.splice(index, 1);
    return deletedTodo[0];
}

// 4. Todo'ni yangilash funksiyasi
export function updateTodo(id, updatedData) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        throw new Error('Xato');
    }
    
    // Eski ma'lumotlarni yangilash
    todos[index] = { ...todos[index], ...updatedData };
    return todos[index];
}
