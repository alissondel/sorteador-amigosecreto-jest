import { useState } from "react"
import { useListParticipant } from "../state/hooks/useListParticipant"
import { useDrawResult } from "../state/hooks/useDrawResult"
import Card from "../components/Card"

function SortitionPage() {
  const participants = useListParticipant()
  const result = useDrawResult()
  
  const [drawn, setDrawn] = useState(participants[0])
  const [friendSecret, setFriendSecret] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (result.has(drawn)) setFriendSecret(result.get(drawn)!)
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-zinc-500">
      <Card>
        <h2 className="text-3xl font-semibold mb-2">Quem vai tirar o papelzinho?</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <select
            required
            name="participant"
            id="participant"
            value={drawn}
            onChange={e => setDrawn(e.target.value)}
            title="Selecionar seu nome"
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          >
            {participants.map((participant) => {
              return (
                <>
                  <option key={participant}>{participant}</option>
                </>
              )
            })}
          </select>
          <p className="text-base text-center mb-2">Clique em sortear para ver quem é seu amigo secreto!</p>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
            focus:shadow-outline w-full disabled:bg-gray-500`}>
              Sortear
          </button>
      </form>
      {friendSecret && (
        <p className="text-lg font-semibold text-center text-blue-500" role="alert">
          <span className="text-lg font-semibold text-center text-zinc-950">Sorteado(a) foi:</span> {friendSecret}</p>
      )}
      <footer className="mx-auto mt-2">
        <img src="/images/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
      </footer>
    </Card>
    </section >
  )
}

export default SortitionPage