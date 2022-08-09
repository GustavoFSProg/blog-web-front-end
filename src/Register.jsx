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
  TextArea,
  ListContainer
} from './styled-register'
import { useEffect, useState } from 'react'

const token = localStorage.getItem('Token')

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
            <ListContainer

            >
              <h1>Cadastro</h1>
            </ListContainer>
            <br />
            <div
              style={{
                // background: 'yellow',
                fontFamily: 'Roboto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',

              }}
            >
              <FormContainer>
                <form onSubmit={handleSubmit}>

                <div style={{
                  display: 'flex', flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'left',
                    alignItems: 'center',

                }}>

                  <Label>Imagem: </Label>

                <InputFile
                  type="file"
                  id="image"
                  className="botao-imagem"
                  onChange={(e) => setImage(e.target.files[0])}
                  />
                </ div>
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'left'
                }}>

                <Label>Titulo do Post: </Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  // width: '92%',
                  justifyContent: 'left',
                  marginLeft: '4px',
                  width: '100%',

                }}>
                <Label>Texto: </Label>
                  <TextArea
                  rows="22"
                    // cols="63"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                    style={{
                      borderRadius: '8px',
                      border: '1px solid #a6a6a6',

                    }}
                  />
                </div>
                <br />
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'left'
                }}>

                <Label>Autor: </Label>
                  <Input id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
                </div>

                <br />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {token ? (
                  <Button className="confirm-Button" type="submit">
                    Cadastrar
                  </Button>
                ) : (
                  <h2>Unautorized!!!</h2>
                  )}
                </div>

                <br />

                <br />
                </form>
              </FormContainer>

            </div>


          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Register
