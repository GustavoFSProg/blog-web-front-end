import Header from './components/header/Header'
import Sidebarleft from './components/sidebar-left/sidebar-left'
import SidebarRight from './components/sidebar-right/sidebarRight'
import moment from 'moment'
// import foto1 from './assets/foto1.png'
import face from './assets/face-icon.png'
import api from './api'
import {
  ContainerApp,
  ContainerParagraph,
  ContainerWrapper,
  Span,
  ImgBody,
  ImgFace,
  H1,
  AutorContainer,
} from './style'
import { useEffect, useState } from 'react'

function Register() {
  const [post, setPosts] = useState([])

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  async function handlePosts() {
    const { data } = await api.get(`/all`)

    setPosts(data)
  }

  useEffect(() => {
    handlePosts()
  }, [])
  return (
    <>
      <Header />

      <div
        style={{
          width: '98.8vw',
          height: '100vh',
          background: '#f2f2f2',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h2>
          Cadastro
        </h2>
      </div>
    </>
  )
}

export default Register
