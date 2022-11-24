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
  LikeButton,
  AutorContainer,
  LikeContainer,
  ContainerFace,
} from './style-profile'
import { useEffect, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { AuthContext } from './Auth/AuthContext'
import { useContext } from 'react'

function Profile() {
  const [post, setPosts] = useState({})
  const [buttonAbled, setButtonAbled] = useState(false)
  const { setpostId, postId } = useContext(AuthContext)

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  async function handleLikes(id) {
    await api.put(`/likes/${id}`)
    handlePostsProfile()
    setButtonAbled(true)
  }

  async function handlePostsProfile() {
    const PostId = localStorage.getItem('PostId')

    const { data } = await api.get(`/profile/${PostId}`)

    setPosts(data)
  }

  console.log(post.autor)

  useEffect(() => {
    handlePostsProfile()
  }, [])

  return (
    <>
      <Header />

      <div
        style={{
          width: '98.8vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '98.8vw',
            height: '100%',
            background: '#f2f2f2',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <div>
            <Sidebarleft />
          </div>

          <ContainerWrapper>
            <div
              style={{
                display: 'flex',
                // justifyContent: 'top',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',

                // alignItems: 'flex-start',

                // marginLeft: '13px'
              }}
            >
              <div
                style={{
                  // background: 'blue',

                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginBottom: '60px',
                  width: '100%',

                  // marginLeft: '13px'
                }}
              >
                <ContainerApp>
                  <ImgBody src={post.image} alt="foto1" />
                </ContainerApp>
                <AutorContainer>
                  <ContainerFace>
                    <div
                      style={{
                        display: 'flex',
                        width: '100%',
                        // marginTop: '5px',
                        // justifyContent: 'left',
                      }}
                    >
                      <ImgFace src={face} alt="face" />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        width: '80%',
                        justifyContent: 'left',
                        flexDirection: 'column',
                        // background: 'orange',
                        // marginTop: '14px',

                        // marginLeft: '-22px',
                      }}
                    >
                      <span
                        style={{
                          width: '160px',
                          fontFamily: 'Roboto',
                          fontSize: '0.84rem',
                          paddingBottom: '1px',
                          color: '#595959',
                        }}
                      >
                        {post.autor}
                      </span>
                      <span
                        style={{
                          width: '160px',
                          paddingBottom: '2px',
                          fontFamily: 'Roboto',
                          fontSize: '0.76rem',
                          color: '#595959',
                          // background: 'yellow',
                          height: 'auto',
                        }}
                      >
                        {getDateWithoutTime(post.createdAt)}
                      </span>
                    </div>
                  </ContainerFace>

                  <LikeContainer>
                    <LikeButton disabled={buttonAbled} onClick={() => handleLikes(post.id)}>
                      <AiFillLike size="25" color="blue" />
                    </LikeButton>
                    <span
                      style={{
                        marginLeft: '4px',
                        color: 'blue',
                        fontFamily: 'Roboto',
                        fontSize: '15px',
                      }}
                    >
                      <strong>{post.likes}</strong>
                    </span>
                  </LikeContainer>
                </AutorContainer>
                <div
                  style={{
                    display: 'flex',
                    width: '88%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '45px',
                  }}
                >
                  <H1>{post.title}</H1>
                </div>

                <ContainerParagraph>
                  <Span> {post.description}</Span>
                </ContainerParagraph>
              </div>
            </div>
          </ContainerWrapper>

          <div>
            <SidebarRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
