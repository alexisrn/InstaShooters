import * as S from "./styles";
import { FaPlay } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export function VideoRecents() {
  return (
    <>
      <S.Container>
        <h4>Videos Recentes</h4>
        <S.CtnVideos>
          <span>
            <MdArrowBackIosNew />
          </span>
          <div>
            <FaPlay />
          </div>
          <div>
            <FaPlay />
          </div>
          <span>
            <MdArrowForwardIos />
          </span>
        </S.CtnVideos>
      </S.Container>
    </>
  );
}
