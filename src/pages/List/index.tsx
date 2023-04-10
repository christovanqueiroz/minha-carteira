import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import {
    Container,
    Content,
    Filters
} from './styles'

const List: React.FC = () => {

    const months = [
        {value: 3, label: 'Março'},
        {value: 2, label: 'Fevereiro'},
        {value: 1, label: 'Janeiro'}
    ];

    const years = [
        {value: 2023, label: 2023},
        {value: 2022, label: 2022},
        {value: 2021, label: 2021}
    ];

    return (
        <Container>
            <ContentHeader title='Saídas' lineColor='#E44C4E'>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button
                    type='button'
                    className='tag-filter tag-filter-recurrent'
                >
                    Recorrentes
                </button>

                <button
                    type='button'
                    className='tag-filter tag-filter-eventual'
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard 
                    tagColor='#E44C4E'
                    title='Conta de luz'
                    subtitle='08/04/2023'
                    amount='R$ 130,00'
                />

                <HistoryFinanceCard 
                    tagColor='#E44C4E'
                    title='Conta de luz'
                    subtitle='08/04/2023'
                    amount='R$ 130,00'
                />
            </Content>
        </Container>
    );
}

export default List;