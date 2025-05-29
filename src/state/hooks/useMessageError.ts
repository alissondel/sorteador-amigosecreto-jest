import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMessageError = () => {
  const message = useRecoilValue(erroState)
  return message
}