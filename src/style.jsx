import styled from 'styled-components'

export const ContainerApp = styled.div`
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
    margin-top: 3rem;

  /* margin-top: -26.5rem; */

  @media screen and (max-width: 800px) {
    /* margin-top: -34.4rem; */
    margin-top: 1rem;
    /* margin-left: 7px; */
    height: auto;
    width: 100%;
  }
`
export const ImgBody = styled.img`
  /* width: 710px; */
  height: 325px;
  width: 95%;
  align-items: center;

  display: flex;
  border-radius: 9px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 94%;
    height: 175px;
  }
`
export const ImgFace = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 66px;

  @media screen and (max-width: 800px) {
    margin-left: -10px;
  }
`

export const H1 = styled.h1`
  font-size: 2rem;
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    font-size: 1.1rem;
    margin-left: -26px;
  }
`

export const ContainerWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 114rem;

  @media screen and (max-width: 700px) {
    margin-top: 107rem;
    width: 100vw;
  }
`

export const AutorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 17px;
  margin-top: 35px;
  margin-bottom: 5px;
  width: 100%;
  @media screen and (max-width: 700px) {
    margin-top: 18px;
    margin-left: 57px;
    width: 220px;
  }
`
export const LikeButton = styled.div`
  display: flex;
  background: transparent;
  transition: ease 0.7s;
  border: none;

  cursor: pointer;
  :hover {
    background: lightblue;
  }
`

export const ContainerParagraph = styled.div`
  display: flex;
  width: 89%;
  align-items: center;
  justify-content: center;
  margin-left: 45px;

  @media screen and (max-width: 700px) {
    margin-left: 25px;
    width: 85%;
  }
`
export const Span = styled.span`
  font-size: 1.1rem;
  line-height: 25px;
  color: #333333;
  text-indent: 15px;
  font-family: Roboto;

  @media screen and (max-width: 670px) {
    /* font-size: 1.4rem; */
  }
`

export const LikeContainer = styled.div`
  display: flex;
  width: 53px;
  padding-top: 8px;
  display: flex;
  align-items: center;
  margin-right: 85px;
  /* background: orange; */

  @media screen and (max-width: 470px) {
    margin-right: -15px;
  }


  @media screen and (min-width: 470px) and (max-width: 700px) {
    margin-right: -155px;
  }
`

export const ContainerFace = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 29%;
  margin-left: 37px;

  @media screen and (max-width: 670px) {
    margin-left: -15px;
  }
`
