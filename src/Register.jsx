import Header from './components/header/Header'
import moment from 'moment'
import api from './api'
import {
  Container,
  ProductContainer,
  DivListagemProdutos,
  Input,
  FormContainer,
  Label,
  InputFile,
  Button,
} from './styled-register'
import { useEffect, useState } from 'react'

function Register() {
  const [post, setPosts] = useState([])

  const [title, setTitle] = useState('')
  const [autor, setAutor] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState([])

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('title', title)
      data.append('text', text)
      data.append('autor', autor)
      data.append('image', image)

      await api.post(`/register`, data)

      return alert('Cadastro realizado com sucesso!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <DivListagemProdutos>
          <ProductContainer>
            <div
              style={{
                color: '#0059b3',
                fontFamily: 'Roboto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1>Cadastrar Post</h1>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <InputFile
                  type="file"
                  id="image"
                  className="botao-imagem"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Label>Titulo do Post: </Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <Label>Texto: </Label>
                <textarea
                  rows="22"
                  cols="52"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <br />

                <Label>Autor: </Label>
                <Input id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
                <br />
                {/* {token ? ( */}
                {/* <Button  className="confirm-Button" type="submit">
                  Cadastrar
                </Button> */}
                {/* ) : (
                  <h2>Unautorized!!!</h2>
                )} */}
                <br />
                <br />
              </FormContainer>
            </form>
          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Register
