const statusArr = ["Powered Up", "Big", "Small", "Dead"];

class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
  }

  setName(namePicked) {
    this.name = namePicked;
  }

  gotHit() {
    const statusIndex = statusArr.indexOf(this.status);
    if (statusIndex > 0) {
      this.status = statusArr[statusIndex - 1];
    } else {
      this.status = "Dead";
      stopPlaying();
    }
  }

  gotPowerup() {
    if (!this.hasStar) {
      console.log("you got a star!");
      this.hasStar = true;
      this.status = "Powered Up";
    }
  }

  addCoin() {
    this.totalCoins += 1;
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Total Coins: ${this.totalCoins}`);
    console.log(`Status: ${this.status}`);
    console.log(`Star: ${this.hasStar}`);
    console.log("---------------");
  }
}

const intervalId = setInterval(() => {
  randomNum();
}, 1000);

function randomNum() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    player.gotHit();
  } else if (num === 1) {
    player.gotPowerup();
  } else {
    player.addCoin();
  }

  player.print();
}

function stopPlaying() {
  clearInterval(intervalId);
  console.log("game over! you died");
}

const player = new Player("", 0, "Small", false);
player.setName("Mario");
