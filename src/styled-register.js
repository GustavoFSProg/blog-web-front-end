import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 888px;
  /* background: green; */
  padding-bottom: 200px;

  /* background: #f2f2f2; */
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`

export const DivListagemProdutos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 23px;
  margin-top: 50px;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 10px;
    margin-left: -32px;
  width: 00%;

  }
`
export const ProductContainer = styled.div`
  /* background: #cce6ff; */
  /* background: #e6e6e6; */
  /* background: yellow; */

  margin-left: 5px;
  border-radius: 15px;
  width: 100%;

  @media screen and (max-width: 900px) {
    margin-top: 20px;
    width: 98%;
  }
`
export const Input = styled.input`
  background: #ffffe6;
  border-radius: 8px;
  height: 38px;
  margin-bottom: 10px;
  margin-top: 5px;
  border: 1px solid #a6a6a6;
  width: 30rem;

  @media screen and (max-width: 900px) {
    /* margin-left: -14px; */
      width: 18rem;

  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 50vw;

  /* background: green; */


  @media screen and (max-width: 900px) {
    /* margin-left: -114px; */
      width: 100%;

  }

`
export const Label = styled.label`
  /* margin-left: -350px; */
  font-family: 'Roboto';
  display: flex;
  align-items: flex-start;
  justify-content: left;
  font-size: 16px;
  color: #004d4d;
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 3px;
`

export const InputFile = styled.input`
  /* background: red; */
  border-radius: 12px;
  height: 30px;
  width: 90%;
  margin-bottom: 10px;
  margin-top: 20px;
`
export const Button = styled.button`
  width: 90%;
  height: 40px;
  cursor: pointer;
  background: #b3daff;
  border: 1px solid #80c1ff;
  border-radius: 10px;
  color: #004f99;
  margin-bottom: 40px;
  /* display: none; */
`

export const TextArea = styled.textarea`
  display: flex;
  align-items: center;
  width: 80%;
  background: #ffffe6;
  width: 30rem;



  @media screen and (max-width: 900px) {
      width: 18rem;

  }
`

export const ListContainer = styled.div`
  color: #004d4d;
  font-family: Roboto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background: blue; */



  @media screen and (max-width: 900px) {
      width: 80%;

  }
`
  
