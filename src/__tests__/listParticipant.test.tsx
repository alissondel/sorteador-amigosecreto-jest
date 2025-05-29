import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListParticipant from "../components/List"
import { useListParticipant } from "../state/hooks/useListParticipant"

jest.mock('../state/hooks/useListParticipant', () => {
  return {
    useListParticipant: jest.fn()
  }
})

describe('Uma lista incialmente vazia de participante', () => {
  beforeEach(() => {
    (useListParticipant as jest.Mock).mockReturnValue([])
  })

  it('Deve ser renderizado sem elementos', () => {
    render(
      <RecoilRoot>
        <ListParticipant />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(0)
  })
})

describe('Uma lista participante preenchidos', () => {
  const participants = ['Ana', 'Alisson']
  beforeEach(() => {
    (useListParticipant as jest.Mock).mockReturnValue(participants)
  })
  
  it('Deve ser renderizado sem elementos', () => {
    render(
      <RecoilRoot>
        <ListParticipant />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(participants.length)
  })
})