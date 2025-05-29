import { useState, useRef } from "react"
import { useAddParticipant } from "../../state/hooks/useAddParticipant"
import { useMessageError } from "../../state/hooks/useMessageError"

export default function Form ()  {
  const [username, setUserName] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const addInList = useAddParticipant()
  const messageErro = useMessageError()

  function addParticipant (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addInList(username)
    setUserName('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={addParticipant}>
      <div className="flex flex-col items-center bg-zinc-50 w-full mt-4">
        <input 
          type="text" 
          ref={inputRef}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Inserir nomes dos participantes"
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button 
          disabled={!username} 
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:bg-gray-500
          ${!username ? 'cursor-not-allowed' : 'cursor-pointer'}  
          `}
        >
            Adicionar
        </button>
      </div>
      {messageErro && <p role="alert" className="text-red-500 text-lg">{messageErro}</p> }
    </form>
  )
}