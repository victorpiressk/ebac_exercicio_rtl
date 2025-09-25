import { fireEvent, render, screen } from '@testing-library/react'
import PostComment from '..'

describe('Teste para o componente PostComment', () => {
    test('Deve adicionar dois comentários', () => {
        render(<PostComment />)

        const botao = screen.getByTestId('btn-comentar')
        const areaTexto = screen.getByTestId('adicionar-comentario')

        fireEvent.change(areaTexto, {
            target: {
                value: 'Primeiro comentário',
            }
        })
        fireEvent.click(botao)
        
        fireEvent.change(areaTexto, {
            target: {
                value: 'Segundo comentário',
            }
        })
        fireEvent.click(botao)

        expect(screen.getAllByTestId('post-comentario')).toHaveLength(2);
    })
})