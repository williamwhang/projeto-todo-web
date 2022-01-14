import React from 'react';
import * as S from './styles';

import iconDefault from '../../assets/default.png';

function TaskCard() {
    return (
        <S.Container>
            <S.TopCard>
                <img src={iconDefault} alt="Icone da Tarefa"/>
                <h3>Título da Tarefa</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>14/01/2022</strong>
                <span>11:00</span>
            </S.BottomCard>
        </S.Container>
    )
}

export default TaskCard;