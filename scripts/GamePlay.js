var gamePlayState = new Phaser.Class({
    // Define scene
    Extends: Phaser.Scene,
    initialize: function GamePlay() {
        Phaser.Scene.call(this, {
            key: 'GamePlay'
        });
    },
    gameConfig: {
        numberOfDecks: 1,
        oneCardSet: files.cards.oneSet,
        cardBacks: files.cards.cardBacks
    },
    table: {
        cardDeck: [],
        human: {
            self: "human",
            currentValue: 0,
            cards: [],
            earnedCards: []
        },
        ai: {
            self: "ai",
            currentValue: 0,
            cards: [],
            earnedCards: []
        }
    },

    preload: function () {
        // Preload images for this state

    },

    create: function () {
        // Create objects
        console.log("GamePlay");
        // Creating game card deck
        this.table.cardDeck = new CardDeck(this.gameConfig);
        let playerActiveCardDeck = this.add.sprite(config.width / 1.5, config.height / 1.5, files.cards.back[0]).setInteractive();
        playerActiveCardDeck.scaleY = 0.2;
        playerActiveCardDeck.scaleX = 0.2;
        playerActiveCardDeck.on('pointerdown', () => {
            let drawnCard = this.table.cardDeck.drawACard();
            console.log(drawnCard.card);
            if (drawnCard.lastCard === true) {
                playerActiveCardDeck.destroy();
            }
            let card = this.add.sprite(config.width / 2, config.height / 2, drawnCard.card);
            card.scaleY = 0.2;
            card.scaleX = 0.2;
        });
    },

    update: function () {
        // Update objects & variables
    }
});

// Add scene to list of scenes
warGame.scenes.push(gamePlayState);