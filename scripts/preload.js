var preloadState = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function Preload() {
        Phaser.Scene.call(this, {
            key: 'Preload'
        });
    },
    preload: function () {
        // Preload images for this state
        for (i = 0; i < oneCardDeck.length; i++) { //Load all the cards
            this.load.image(oneCardDeck[i], `assets/Cards/${oneCardDeck[i]}.png`);
        }
        for (i = 0; i < cardBacks.length; i++) {
            this.load.image(cardBacks[i], `assets/Cards/${cardBacks[i]}.png`);
        }

    },

    create: function () {
        console.log("Preload");
        game.scene.start('MainMenu');
    },
    update: function () {
        // Update objects & variables
    }
});

// Add scene to list of scenes
warGame.scenes.push(preloadState);