import { useRecoilValue } from "recoil"
import { listParticipantState } from "../atom"

export const useListParticipant = () => {
  return useRecoilValue(listParticipantState)
}