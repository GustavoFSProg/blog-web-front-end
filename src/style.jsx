import styled from 'styled-components'

export const ContainerApp = styled.div`
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* margin-top: -26.5rem; */

  @media screen and (max-width: 800px) {
    /* margin-top: -34.4rem; */
    margin-top: 2rem;
    width: 90%;
    margin-left: 7px;
    height: auto;
  }
`
export const ImgBody = styled.img`
  /* width: 710px; */
  height: 325px;
  width: 95%;

  display: flex;
  border-radius: 9px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 165px;
    /* margin-top: -12rem; */
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
  width: 99vw;
  height: auto;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 105rem;

  @media screen and (max-width: 700px) {
    margin-top:113rem;
  width: 100vw;

  }
`

export const AutorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 17px;
  margin-top: 45px;
 width: 100% ;
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



  @media screen and (max-width: 670px) {
        margin-right: -30px;


  }
`
