var gamePlayState = new Phaser.Class({
    // Define scene
    Extends: Phaser.Scene,
    initialize: function GamePlay() {
        Phaser.Scene.call(this, {
            key: 'GamePlay'
        });
    },
    tableStats: {
        playerCardValue: 0,
        enemyCardValue: 0
    },

    preload: function () {
        // Preload images for this state
    },

    create: function () {
        // Create objects
        console.log("GamePlay");

        let cardDeck = this.add.sprite(config.width / 1.5, config.height / 1.5, cardBacks[0]).setInteractive();
        cardDeck.scaleY = 0.2;
        cardDeck.scaleX = 0.2;
        cardDeck.on('pointerdown', () => {
            let drawnCard = drawACard();
            console.log(drawnCard);
            let card = this.add.sprite(config.width / 2, config.height / 2, drawnCard);
            card.scaleY = 0.2;
            card.scaleX = 0.2;
        })
    },

    update: function () {
        // Update objects & variables
    }
});

function drawACard() {
    let cardIndex = Math.floor((Math.random() * completeCardDeck.length));
    console.log(cardIndex)
    console.log("Before", completeCardDeck.length);
    completeCardDeck.splice(cardIndex, 1);
    console.log("After", completeCardDeck.length);
    console.log(completeCardDeck)
    console.log(completeCardDeck[cardIndex])
    return completeCardDeck[cardIndex];
}
// Add scene to list of scenes
warGame.scenes.push(gamePlayState);