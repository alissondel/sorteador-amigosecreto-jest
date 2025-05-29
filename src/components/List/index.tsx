import { useListParticipant } from "../../state/hooks/useListParticipant"

export default function ListParticipant() {
  const partipants: Array<string> = useListParticipant()
  return (
    <>
      {partipants.length === 0 ? (
        <p className="text-center text-lg font-semibold text-zinc-950">Não há participantes no momento...</p>
      ) : (
        <ul className="text-center py-4 ">
          {partipants.map((participant, index) => {
            return (
              <li key={index}>{participant}</li>
            )
          })}
        </ul>
      )}
    </>
  )
} 