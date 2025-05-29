import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Footer from "../components/Footer"
import { useListParticipant } from "../state/hooks/useListParticipant"

jest.mock('../state/hooks/useListParticipant', () => {
  return {
    useListParticipant: jest.fn()
  }
})

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

const mockSortition = jest.fn()
jest.mock('../state/hooks/useRaffle', () => {
  return {
    useRaffle: () => mockSortition
  }
})

describe('Quando não existe participantes suficientes', () => {
    beforeEach(() => {
      (useListParticipant as jest.Mock).mockReturnValue([])
    })

  it('A brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
  })
})

describe('Quando existe participantes suficientes', () => {
    const participants = ['Ana', 'Alisson', 'Diego']
    beforeEach(() => {
      (useListParticipant as jest.Mock).mockReturnValue(participants)
    })

  it('A brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const btn = screen.getByRole('button')
    expect(btn).not.toBeDisabled()
  })

  it('A brincadeira foi inciada', () => {
        render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio')
    expect(mockSortition).toHaveBeenCalledTimes(1)
  })
})