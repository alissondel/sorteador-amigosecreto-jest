import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListParticipant } from "../state/hooks/useListParticipant"
import SortitionPage from "../pages/sortition"
import { useDrawResult } from "../state/hooks/useDrawResult"

jest.mock('../state/hooks/useListParticipant', () => {
  return {
    useListParticipant: jest.fn()
  }
})

jest.mock('../state/hooks/useDrawResult', () => {
  return {
    useDrawResult: jest.fn()
  }
})

describe('Na página de sorteio', () => {
  const participants = ['Ana', 'Alisson', 'Diego']

  const result = new Map([
    ['Ana', 'Alisson'],
    ['Alisson', 'Diego'],
    ['Diego', 'Ana'],
  ])

    beforeEach(() => {
      (useListParticipant as jest.Mock).mockReturnValue(participants),
      (useDrawResult as jest.Mock).mockReturnValue(result)
    })
  
  it('Todos os participantes podem exibir seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <SortitionPage />
      </RecoilRoot>
    )

    const options = screen.queryAllByRole('option')
    expect(options).toHaveLength(participants.length)
  })

  it('O amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <SortitionPage />
      </RecoilRoot>
    )

    const select = screen.getByTitle('Selecionar seu nome')
    fireEvent.change(select, {
      target: {
        value: participants[0]
      }
    })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    const friendSecret = screen.getByRole('alert')
    expect(friendSecret).toBeInTheDocument()
  })
})