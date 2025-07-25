import { CheckSquare } from 'lucide-react';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import "../../global.css";
import AddTodoForm from '../../src/components/AddTodoForm';
import FilterBar from '../../src/components/FilterBar';
import TodoItem from '../../src/components/TodoItem';
import TodoStats from '../../src/components/TodoStats';
import { TodoProvider, useTodo } from '../../src/contexts/TodoContext';




function TodoApp() {
  const {
    state,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    setSort,
    setSearch,
    toggleDarkMode,
    filteredTodos,
  } = useTodo();

  const todoCount = {
    all: state.todos.length,
    pending: state.todos.filter(todo => !todo.completed).length,
    completed: state.todos.filter(todo => todo.completed).length,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckSquare className="text-blue-500" size={32} />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              TodoApp
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Stay organized and productive
          </p>
        </div>

        {/* Stats */}
        <TodoStats
          totalTasks={todoCount.all}
          completedTasks={todoCount.completed}
          pendingTasks={todoCount.pending}
        />

        {/* Add Task */}
        <div className="mb-6">
          <AddTodoForm onAdd={addTodo} />
        </div>

        {/* Filters */}
        <div className="mb-6">
          <FilterBar
            filter={state.filter}
            sortBy={state.sortBy}
            searchQuery={state.searchQuery}
            darkMode={state.darkMode}
            onFilterChange={setFilter}
            onSortChange={setSort}
            onSearchChange={setSearch}
            onToggleDarkMode={toggleDarkMode}
            todoCount={todoCount}
          />
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <CheckSquare size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {state.searchQuery
                  ? 'No tasks found'
                  : state.filter === 'completed'
                  ? 'No completed tasks'
                  : state.filter === 'pending'
                  ? 'No pending tasks'
                  : 'No tasks yet'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {state.searchQuery
                  ? 'Try adjusting your search terms'
                  : 'Add a task to get started!'}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Made with ❤️ for productivity</p>
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: state.darkMode ? '#374151' : '#ffffff',
            color: state.darkMode ? '#ffffff' : '#000000',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
