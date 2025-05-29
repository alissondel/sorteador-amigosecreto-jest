import { useNavigate } from "react-router-dom"
import { useListParticipant } from "../../state/hooks/useListParticipant"
import { useRaffle } from '../../state/hooks/useRaffle'

export default function Footer () {
  const participants = useListParticipant()
  const navigate = useNavigate()

  const draw = useRaffle()

  function handleClick () {
    draw()
    navigate('/sorteio')
  }

  return (
    <footer className="bg-zinc-50 w-full mt-4">
      <button
        onClick={handleClick}
        disabled={participants.length < 3}
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:bg-gray-500
          ${participants.length < 3 ? 'cursor-not-allowed' : 'cursor-pointer'}  
          `}
        >
          Iniciar Brincadeira
      </button>
      {/* <img src="/images/sacolas.png" alt="Sacolas de compras" className="bg-zinc-50"/> */}
    </footer>
  )
} 