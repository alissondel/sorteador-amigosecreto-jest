import { useRecoilValue } from "recoil"
import { resultSecretFriend } from "../atom"

export const useDrawResult = () => {
  return useRecoilValue(resultSecretFriend)
}