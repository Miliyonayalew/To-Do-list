const Store = (todo) => {
  todo.sort((a, b) => a.index - b.index);
  localStorage.setItem('todo', JSON.stringify(todo));
};

export default Store;