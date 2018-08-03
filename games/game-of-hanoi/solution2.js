let gameData = {
  moveDisk: false,
  score: 0,

  toggleMove: function() {
    this.moveDisk = !this.moveDisk;
  }
};

let gameView = {
  scoreHeader: document.querySelector("#score"),
  gameData,
  diskToMove: null,
  docks: [...document.querySelectorAll(".dock")],
  toggleSelected: function(element) {
    element.classList.toggle("selected");
  },
  popDisk: function(dock) {
    this.toggleSelected(dock);
    this.diskToMove = dock.querySelector(".disk");
  },
  incrementScore: function() {
    this.gameData.score++;
    this.scoreHeader.innerHTML = this.gameData.score;
  },
  checkMovePossible: function(firstDisk) {
    return firstDisk && this.diskToMove.dataset.size > firstDisk.dataset.size;
  },
  moveDisk: function(disk) {
    let firstDisk = disk.querySelector(".disk");
    if (this.checkMovePossible(firstDisk)) return;
    this.incrementScore();
    disk.insertBefore(this.diskToMove, disk.firstChild);
    this.toggleSelected(document.querySelector(".selected"));
  },
  dockClick: function(dock) {
    if (!this.gameData.moveDisk) {
      this.popDisk(dock);
    } else {
      this.moveDisk(dock);
    }
    this.gameData.toggleMove();
  },
  addEventListeners: function() {
    this.docks.forEach(dock => {
      dock.addEventListener("click", this.dockClick.bind(this, dock));
    });
  }
};

gameView.addEventListeners();