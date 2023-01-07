import * as S from './styles';
import {IoIosNotifications} from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
export function HeaderGame(){

    return( 
        <>
        <S.Container>

            <div>
            <h3>Instashooters</h3>
            <label>
                
                <input type="text" placeholder='Search'/>
            </label>
            </div>
        

            <p><IoIosNotifications/>/ <AiOutlineUser/> </p>
        </S.Container>
        </>
    )

}