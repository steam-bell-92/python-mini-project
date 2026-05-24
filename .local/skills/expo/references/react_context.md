# React Context Docs

React context usage for shared state:

```tsx
import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';

interface TodoContextValue {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  isLoading: boolean;
}

const TodoContext = createContext<TodoContextValue | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todosQuery = useQuery({ queryKey: ['todos'] });

  const addTodo = (todo: Todo) => {
    setTodos(prev => [...prev, todo]);
  };

  const value = useMemo(() => ({
    todos,
    addTodo,
    isLoading: todosQuery.isLoading,
  }), [todos, todosQuery.isLoading]);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}

// Custom hooks can use the context hook
export function useFilteredTodos(search: string) {
  const { todos } = useTodos();
  return useMemo(() => todos.filter(t => t.title.includes(search)), [todos, search]);
}
```

- Don't wrap RootLayoutNav in context - wrap at root layout level
- React Query provider should be top level, other providers nested inside
