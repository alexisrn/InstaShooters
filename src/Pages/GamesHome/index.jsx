import { Footer } from "../../Components/Footer";
import { Games } from "../../Components/Games";
import { Header } from "../../Components/Header";
import * as S from "./styles";

export function GamesHome() {
  return (
    <>
      <Header />
      <S.ContainerImage>
        <img src="https://cutewallpaper.org/21/cool-fortnite-wallpapers/Coolest-Fortnite-Backgroud-Season-X-Outfits-4810-Wallpapers-.jpg" />
      </S.ContainerImage>
      <S.Container>
        <S.ChangeGame>
          <h2>Escolha um jogo</h2>
          <Games />
        </S.ChangeGame>
      </S.Container>
      <Footer />
    </>
  );
}
