import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifts(category);

    return (
        <>
            <h1>{category}</h1>
                {loading && <p>Cargando</p>}
                <div className='card-grid'>
                {
                    data.map(img => {
                        return <GiftGridItem
                            key={img.id}
                            {...img}
                        />
                    })
                }
            </div>
        </>
    )
}


export default GifGrid;
