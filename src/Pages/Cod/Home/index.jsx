import { BannerHome } from '../../../Components/BannerHome';
import { HeaderGame } from '../../../Components/HeaderGame';
import { PlayWeek } from '../../../Components/PlayWeek';
import { SideMatches } from '../../../Components/SideMatches';
import { SideMenu } from '../../../Components/SideMenu';
import { VideoRecents } from '../../../Components/VideosRecents';
import * as S from './styles';

export function HomeCod (){ 

    return(
        <>
        
        <S.Container>
        <SideMenu/>
        <HeaderGame/>
        <S.CtnTop>
        <SideMatches/>
         <BannerHome/>
         <VideoRecents/>
         <PlayWeek/>
        </S.CtnTop>
        </S.Container>
        
        </>
    )

}