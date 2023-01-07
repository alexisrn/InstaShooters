import * as S from "./styles";
import {BsFacebook, BsInstagram, BsYoutube} from 'react-icons/bs'

export function Footer() {
  return (
    <>
      <S.Container>
        <S.Footer>
          <button>Logo</button>
          <ul>
            <li><BsInstagram/></li>
            <li><BsFacebook/></li>
            <li><BsYoutube/></li>
          </ul>
        </S.Footer>
        <p>
            Desenvolvido por Raphael Alexis
        </p>
      </S.Container>
    </>
  );
}
