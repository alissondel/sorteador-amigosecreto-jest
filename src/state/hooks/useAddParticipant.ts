import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listParticipantState } from "../atom"

export const useAddParticipant = () => {
  const setList = useSetRecoilState(listParticipantState)
  const list = useRecoilValue(listParticipantState)
  const setError = useSetRecoilState(erroState)
  return (nameParticipant: string) => {
    if(list.includes(nameParticipant)) {
      setError('Nomes duplicados não são permitidos!')
      setTimeout(() => {
        setError("")
      }, 5000)
      return
    }
    return setList(listCurrent => [...listCurrent, nameParticipant]) 
  }
}