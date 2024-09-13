import { useEffect, useState } from 'react'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goal'
import { Sumarry } from './components/summary'
import { Dialog } from './components/ui/dialog'

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export function App() {
  const [summary, setSummary] = useState<SummaryResponse | null>(null)

  useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setSummary(data.summary)
      })
  }, [])

  return (
    <Dialog>
      {summary?.total && summary.total > 0 ? <Sumarry /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
