const Card = require('../models/cardModel');

// Create a new card
const createCard = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required.' });
        }

        const existingCard = await Card.findOne({ title });
        if (existingCard) {
            return res.status(400).json({ message: 'Card with this title already exists.' });
        }

        const newCard = new Card({ title, description });
        await newCard.save();

        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

const getCardByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        const card = await Card.findOne({ title });

        if (!card) {
            return res.status(404).json({ message: 'Card not found.' });
        }

        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

module.exports = {
    createCard,
    getAllCards,
    getCardByTitle,
};
