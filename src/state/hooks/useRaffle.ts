import { useListParticipant } from "./useListParticipant"
import { useSetRecoilState } from "recoil"
import { resultSecretFriend } from "../atom"
import { holdDraw } from "../helpers/holdDraw"

export const useRaffle = () => {
  const participants = useListParticipant()
  const setResult = useSetRecoilState(resultSecretFriend)
  
  return () => {
    const result = holdDraw(participants)
    setResult(result)
  }
}