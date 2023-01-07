import * as S from "./styles";

export function PlayWeek() {
  return (
    <>
      <S.Container>

        <h3>Video da Semana</h3>
        <S.Video>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CO0-VubUsRc?controls=0&autoplay=true"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </S.Video>
      </S.Container>
    </>
  );
}
