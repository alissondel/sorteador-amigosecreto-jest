import shuffle from "just-shuffle"

export function holdDraw(participants: Array<string>) {
  const totalAtParticipant = participants.length
  const shuffled = shuffle(participants)
  const result = new Map<string, string>()

  for (let index = 0; index < totalAtParticipant; index++) {
    const indexFriend = index === (totalAtParticipant - 1) ? 0 : index + 1
    result.set(shuffled[index], shuffled[indexFriend])
  }

  return result
}