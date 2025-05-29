import { atom } from "recoil";

export const listParticipantState = atom<string[]>({
  key: 'listParticipantState',
  default: [],
})

export const resultSecretFriend = atom<Map<string, string>>({
  key: 'resultSecretFriend',
  default: new Map(),
})

export const erroState = atom<string>({
  key: 'erroState',
  default: ''
})