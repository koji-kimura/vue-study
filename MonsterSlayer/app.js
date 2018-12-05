new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns : []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      var damage = this.calcurateDamage(10, 3)
      this.monsterHealth -= damage;
      //trueになったらそこで処理が完了
      //それ以外は素通り
      if (this.checkWin()) {
        return;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for' + damage
      });
      this.monsterAttack();
    },
    specialAttack: function() {
      damage = this.calcurateDamage(20, 10)
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits hard Monster for' + damage
      });
      //trueになったらそこで処理が完了
      //それ以外は素通り
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.monsterAttack();
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      });
    },
    giveup: function() {
      this.gameIsRunning = false;
    },
    calcurateDamage: function(max, min) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    monsterAttack: function() {
      var damage = this.calcurateDamage(12, 5)
      this.playerHealth -= damage;
      this.turns.unshift({
          isPlayer: false,
          text: 'Monster hits player for' + damage
        });
      this.checkWin();
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You won! New game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});