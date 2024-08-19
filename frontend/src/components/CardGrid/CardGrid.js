import React from 'react';
import Card from '../Card/Card';
import './CardGrid.css';

function CardGrid({ cards }) {
    return (
        <div className="card-grid">
            {cards.map((card) => (
                <Card key={card.id} title={card.title} description={card.description} />
            ))}
        </div>
    );
}

export default CardGrid;