import * as S from './styles';
import { FaPlay } from 'react-icons/fa';
import { MdArrowBackIosNew,MdArrowForwardIos } from 'react-icons/md';

export function VideoRecents(){

    return(
        <>
        <S.Container>
            <h4>Videos Recentes</h4>
            <S.CtnVideos>
                <span><MdArrowBackIosNew/></span>
                <div>
                <iframe width='40%' height="200" src="https://www.youtube.com/embed/ggBSwMsTFi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div><FaPlay/></div>
                <span><MdArrowForwardIos/></span>
            </S.CtnVideos>
        </S.Container>
        </>
    )
}