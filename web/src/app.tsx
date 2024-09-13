import { useQuery } from '@tanstack/react-query'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goal'
import { Sumarry } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Sumarry /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
