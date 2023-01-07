import * as S from "./styles";


export function Register() {
  return (
    <>
      <S.Container>
        <S.Input>
          <S.CtnLogo>
            <S.Logo>Insta<span>Shooters</span></S.Logo>
            <h6>Participe da maior rede de Atiradores !</h6>
          </S.CtnLogo>
          <S.CtnInputs>
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirmar senha" />
          </S.CtnInputs>
          <S.CtnBtn>
            <h6>Com este registo, aceitas os nossos Termos, a Política de Privacidade e a Política de Cookies.</h6>
            <button>Registrar-se</button>
          </S.CtnBtn>
        </S.Input>
      </S.Container>
    </>
  );
}
