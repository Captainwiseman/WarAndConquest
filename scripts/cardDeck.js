class CardDeck {
    constructor(config) {
        this.deckOptions = {};
        this.deckOptions.numberOfDecks = config.numberOfDecks;
        this.deckOptions.oneCardSet = config.oneCardSet;
        this.deckOptions.cardBacks = config.cardBacks;
        this.deck = this.generateCardDeck();
        
    }

    shuffleCardDeck(cardDeck) {
        // Shuffling the deck by going through all the deck from the last card to the first
        //and swiping it with another card from the deck

        let cardToShuffle = cardDeck.length,
            temporaryValue, randomIndex;

        while (cardToShuffle !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * cardDeck.length);
            cardToShuffle -= 1;

            // And swap it with the current element.
            temporaryValue = cardDeck[cardToShuffle];
            cardDeck[cardToShuffle] = cardDeck[randomIndex];
            cardDeck[randomIndex] = temporaryValue;
        }
        return cardDeck;
    }

    generateCardDeck() {
        let cardDeck = []
        for (let i = 0; i < this.deckOptions.numberOfDecks; i++) {
            cardDeck.push(...this.shuffleCardDeck(this.deckOptions.oneCardSet));
        }
        return this.shuffleCardDeck(cardDeck);
    }

    drawACard() {
        let topCard = this.deck.length - 1;
        let drawnCard = {
            card: this.deck[topCard],
            lastCard: false
        };
        console.log("Before", this.deck.length);
        this.deck.splice(topCard, 1);
        console.log("After", this.deck.length);
        console.log(this.deck)
        if (this.deck.length === 0) {
            drawnCard.lastCard = true;
        }
        return drawnCard;
    }

};