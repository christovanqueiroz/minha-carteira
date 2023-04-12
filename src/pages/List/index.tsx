import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

import {
    Container,
    Content,
    Filters
} from './styles'

interface IData {
    id: string;
    description: string;
    formattedAmount: string;
    frequency: string;
    formattedDate: string;
    tagColor: string;
}

const List: React.FC = () => {
    
    const [data, setData] = useState<IData[]>([]);

    const { type } = useParams<{ type: string }>();
    
    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    },[type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#4E41F0' : '#E44C4E'
    },[type])

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[type])
    
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

    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                formattedAmount: item.amount,
                frequency: item.frequency,
                formattedDate: item.date,
                tagColor: item.frequency === 'recorrente' ? '#F7931B' : '#4E41F0'
            }
        })

        setData(response)
    },[]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
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
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.formattedDate}
                            amount={item.formattedAmount}
                        />
                    ))
                }  
            </Content>
        </Container>
    );
}

export default List;