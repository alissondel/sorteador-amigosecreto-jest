import { holdDraw } from "./holdDraw"

describe('Dado um sorteio de amigo secreto', () => {
  it('Cada participante não sortei o proprio nome', () => {
    const participants = ['Ana', 'Alisson', 'Diego', 'Gabriela', 'Gustavo', 'Leticia']

    const sortition = holdDraw(participants)
    participants.forEach(participant => {
      const friendSecret = sortition.get(participant)
      expect(friendSecret).not.toEqual(participant)
    })
  })
})