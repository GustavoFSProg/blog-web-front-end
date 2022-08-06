import { Container, ImgLogo, LinksContainer, Button, Input, FormDois, Form } from './style'
import logo from '../../assets/logo.png'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState('none')

  function handleLike() {
    setIsButtonClicked('flex')
  }

  function handleDismissButtonClicked() {
    setIsButtonClicked('none')
  }

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImgLogo src={logo} alt="logo" />
        <Form>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Input type="search" name="search" placeholder="Search..." />

            <BsSearch size="26" color="gray" style={{ marginLeft: '8px' }} />
          </div>
        </Form>
      </div>
      <div
        style={{
          display: 'flex',
          width: '25%',
        }}
      ></div>

      <Button
        onMouseLeave={() => handleDismissButtonClicked()}
        type="button"
        onClick={() => handleLike()}
      >
        <MenuIcon size="35" />
      </Button>

      <LinksContainer>
        <div style={{ marginLeft: '40px' }}>
          <Link style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black' }} to="/">
            HOME
          </Link>
        </div>

        <div style={{ marginLeft: '35px' }}>
          <Link
            style={{ textDecoration: 'none', fontFamily: 'Roboto', color: 'black  ' }}
            to="/register"
          >
            CADASTRO
          </Link>
        </div>
      </LinksContainer>

      <FormDois
        style={{
          display: `${isButtonClicked}`,
          marginTop: '133px',
          marginLeft: '-280px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '17rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            // style={{ width: '14rem' }}
            type="search"
            name="search"
            placeholder="Search..."
          />

          <BsSearch
            onMouseLeave={() => handleDismissButtonClicked()}
            onMouseEnter={() => handleLike()}
            size="26"
            color="white"
            style={{ marginLeft: '8px', marginTop: '11px' }}
          />
        </div>
      </FormDois>
    </Container>
  )
}

export default Header
