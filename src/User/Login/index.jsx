import * as S from "./styles.js";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <S.Container>
        <S.CtnImg>
          <img src="https://wallpaperaccess.com/full/2853676.jpg" alt="" />
        </S.CtnImg>
        <S.CtnLogin>
          <S.Logo>
            Insta<span>Shooters</span>
          </S.Logo>
          <>

            <S.Form>
              <S.CtnInput>
                <S.Input
                  required
                  type="text"
                ></S.Input>
                <label >Login</label>
              </S.CtnInput>
              <S.CtnInput>
                <S.Input
                  required
                  type="password"
                ></S.Input>
                <label >Senha</label>
              </S.CtnInput>
            </S.Form>
            <S.ButtonLogin>Logar</S.ButtonLogin>
            <S.Line><hr /> ou <hr /></S.Line>
            <S.ButtonRegister>Registrar</S.ButtonRegister>
          </>
        </S.CtnLogin>
      </S.Container>
    </>
  );
}
