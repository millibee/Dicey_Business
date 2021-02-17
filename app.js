let dice = [];
let btnGenerate = $("#btn-generate");
let btnRoll = $("#btn-roll");

class Die {
  constructor() {
    this.div = $("<div></div>");
    this.roll();
    $(this.div).appendTo("#dice-container");
    dice.push(this);
    $(this.div).click(() => {
      this.roll();
    });
  }

  roll() {
    this.value = Math.floor(Math.random() * 6 + 1);
    this.getChar();
    $(this.div).text("" + this.char + "");
    $(this.div).addClass("die");
  }

  getChar() {
    if (this.value === 1) {
      this.char = "1";
    } else if (this.value === 2) {
      this.char = "2";
    } else if (this.value === 3) {
      this.char = "3";
    } else if (this.value === 4) {
      this.char = "4";
    } else if (this.value === 5) {
      this.char = "5";
    } else {
      this.char = "6";
    }
  }
}

$(btnGenerate).click(() => {
  let die = new Die();
});

$(btnRoll).click(() => {
  for (let i = 0; i < dice.length; i++) {
    dice[i].roll();
  }
});

//
