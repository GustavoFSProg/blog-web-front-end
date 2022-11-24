import Header from './components/header/Header'
import api from './api'
import {
  Container,
  ProductContainer,
  Input,
  Label,
  ListContainer,
  Button,
  Form,
} from './styled-register'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login() {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const dataes = { email, password }

      const { data } = await api.post(`login`, dataes)


      localStorage.setItem('Token', data)

      history.push('/')

      return alert('Login realizado com sucesso!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <ProductContainer>
          <ListContainer style={{ marginTop: '15px' }}>
            <h1>Login</h1>
            <br />

            <Form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Label>Email: </Label>
                </div>

                <Input id="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>


              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Label>Senha: </Label>
                </div>

                <Input id="password" value={password} type="password"
                  onChange={(e) => setPassword(e.target.value)} />
              </div>

              <br />
              <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Button className="confirm-Button" type="submit">
                  Logar
                </Button>
              </div>

              <br />

              <br />
            </Form>
          </ListContainer>

        </ProductContainer>
      </Container>
    </>
  )
}

export default Login
