var preloadState = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function Preload() {
        Phaser.Scene.call(this, {
            key: 'Preload'
        });
    },
    preload: function () {
        // Preload images for this state
        for (i = 0; i < files.cards.oneSet.length; i++) { //Load all the cards
            this.load.image(files.cards.oneSet[i], `assets/Cards/${files.cards.oneSet[i]}.png`);
        }
        for (i = 0; i < files.cards.back.length; i++) {
            this.load.image(files.cards.back[i], `assets/Cards/${files.cards.back[i]}.png`);
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