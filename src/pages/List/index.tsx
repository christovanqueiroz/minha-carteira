import React from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import {
    Container,
    Content
} from './styles'

const List: React.FC = () => {

    const options = [
        {value: 'Christovan', label: 'Christovan'},
        {value: 'João', label: 'João'},
        {value: 'Maria', label: 'Maria'}
    ];

    return (
        <Container>
            <ContentHeader title='Saídas' lineColor='#E44C4E'>
                <SelectInput options={options}/>
            </ContentHeader>

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