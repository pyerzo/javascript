// Sequence memory game code

const btnStart = document.getElementById('btnStart')
const cyan = document.getElementById('cyan')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')

const LAST_LEVEL = 5

class Game {

  constructor() {
    this.setup()
    this.setSequence()
    setTimeout(() => {
      this.nextLevel()
    }, 300)
  }

  setup() {
    btnStart.classList.add('hide')
    this.colors = [cyan, violet, orange, green]
    this.chooseColor = this.chooseColor.bind(this)
    this.restartGame(true)
  }

  setSequence() {
    this.sequence = new Array(LAST_LEVEL).fill(0).map(val => Math.floor(Math.random() * 4))
  }

  nextLevel() {
    this.sublevel = 0
    this.startSequence()
    this.addClickEvent()
  }

  startSequence() {
    for(let i = 0; i < this.level; i++) {
      const index = this.sequence[i]
      const color = this.colors[index]
      setTimeout(() => this.focusColor(color), 1000 * i)
    }
  }

  focusColor(color) {
    color.classList.add('light')
    setTimeout(() => color.classList.remove('light'), 350)
  }

  addClickEvent() {
    this.colors.forEach(color => {
      color.addEventListener('click', this.chooseColor)
    });
  }

  removeClickEvent() {
    this.colors.forEach(color => {
      color.removeEventListener('click', this.chooseColor)
    });
  }

  identifyColor(id) {
    return document.getElementById(id)
  }

  restartGame(start=false) {
    this.removeClickEvent()
    this.sublevel = 0
    this.level = 1
    if (!start) {
      btnStart.classList.remove('hide')
    }
  }

  chooseColor(event) {
    const choice = event.target.dataset.color
    const color = this.identifyColor(choice)
    const colorIndex = this.colors.indexOf(color)
    this.focusColor(color)
    if (colorIndex === this.sequence[this.sublevel]) {
      this.sublevel++
      if (this.sublevel === this.level) {
        this.level++
        // this.removeClickEvent()
        console.log(this.level)
        if (this.level === (LAST_LEVEL + 1)) {
          swal("Good job!", "You have a good memory skill", "success");
          this.restartGame()
        } else {
          setTimeout(() => this.nextLevel(), 1000)
        }
      }
    } else {
      swal("You failed...", "You can do it better", "error");
      this.restartGame()
    }
  }

}

function startGame() {
  game = new Game()
}
