const todoData = JSON.parse(localStorage.getItem('todo')) || [];

class Todo {
  constructor(task) {
    this.description = task;
    this.completed = false;
    this.index = todoData.length + 1;
  }

  addTodo = () => {
    todoData.push(this);
  };

  static updateIndex = () => {
    todoData.forEach((data, index) => {
      data.index = index + 1;
    });
  };

  static deleteTodo = (index) => {
    todoData.splice(index - 1, 1);
    this.updateIndex();
  };
}

export { Todo, todoData };