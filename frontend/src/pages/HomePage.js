import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import CardGrid from '../components/CardGrid/CardGrid';
import Footer from '../components/Footer/Footer';
import { getCards } from '../services/api';
import './HomePage.css';

function HomePage() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const fetchedCards = await getCards();
            setCards(fetchedCards);
            setFilteredCards(fetchedCards);
        } catch (error) {
            console.error('Error fetching cards:', error);
        }
    };

    const handleSearch = (searchTerm) => {
        const filtered = cards.filter(
            (card) =>
                card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                card.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCards(filtered);
    };

    return (
        <div className="home-page">
            <Header />
            <main className="main-content">
                <SearchBar onSearch={handleSearch} />
                <CardGrid cards={filteredCards} />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;



