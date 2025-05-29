import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Form from '../components/Form'

describe('Testando o comportamento do formulário.tsx', () => {
  it('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    // Encontrar o input pelo placeholder
    const input = screen.getByPlaceholderText('Inserir nomes dos participantes')

    // Encontrar o botão de adicionar
    const button = screen.getByRole('button')

    // Garantir que o input está no documento
    expect(input).toBeInTheDocument()

    // Garantir que o botão está desabilitado
    expect(button).toBeDisabled()
  })

  it('Adiciona um participante quando o input está preenchido', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Inserir nomes dos participantes')
    const button = screen.getByRole('button')

    // Preencher o input
    fireEvent.change(input, { target: { value: 'Alisson Delatim' } })

    // Clicar no botão
    fireEvent.click(button)

    // Verificar que o input ficou com foco
    expect(input).toHaveFocus()

    // Verificar que o input foi limpo
    expect(input).toHaveValue('')
  })

  it('Não permite nomes duplicados na lista', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Inserir nomes dos participantes')
    const button = screen.getByRole('button')

    // Primeira adição
    fireEvent.change(input, { target: { value: 'Alisson Delatim' } })
    fireEvent.click(button)

    // Tentativa de adicionar duplicado
    fireEvent.change(input, { target: { value: 'Alisson Delatim' } })
    fireEvent.click(button)

    // Mensagem de erro visível
    const mensagemErro = screen.getByRole('alert')

    // Verificar mensagem de erro
    expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos!')
  })

   it('A mensagem de erro deve sumir, após os timers', () => {
    jest.useFakeTimers()

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Inserir nomes dos participantes')
    const button = screen.getByRole('button')

    // Primeira adição
    fireEvent.change(input, { target: { value: 'Alisson Delatim' } })
    fireEvent.click(button)

    // Tentativa de adicionar duplicado
    fireEvent.change(input, { target: { value: 'Alisson Delatim' } })
    fireEvent.click(button)

    // Mensagem de erro visível
    let mensagemErro = screen.queryByRole('alert')

    // Verificar mensagem de erro
    expect(mensagemErro).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    // Esperar "N" segundos
    mensagemErro = screen.queryByRole('alert')
    expect(mensagemErro).toBeNull()
  })
})
