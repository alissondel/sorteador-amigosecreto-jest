import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ConfigurationPage from "../pages/configuration"

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

describe('A pagina de configuração', () => {
  it('Deve ser reenderizada corretamente', () => {
    const container = render(
      <RecoilRoot>
        <ConfigurationPage />
      </RecoilRoot>
    )

    // Teste de SnapShoot
    expect(container).toMatchSnapshot()
  })
})