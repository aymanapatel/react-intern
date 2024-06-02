
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

export function ProductReactQuery() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

function Todos() {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
      res.json()
    ) })

  // Mutations
  const mutation = useMutation({
    mutationFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
      res.json()
    ) ,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <div>
      <h1>Product React Query</h1>
      {/* @ts-ignore:next-line */}
      <ul>{query.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>

      <button

                onClick={() => {
          // @ts-ignore:next-line
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </button>
    </div>
  )
}
