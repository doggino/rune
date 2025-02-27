const board = document.getElementById("board")
const playersSection = document.getElementById("playersSection")
const selectSound = new Audio("select.wav")

let cellButtons, playerContainers

function initUI(cells, playerIds, players, yourPlayerId) {
  cellButtons = cells.map((_, cellIndex) => {
    const button = document.createElement("button")
    button.addEventListener("click", () => Rune.actions.claimCell(cellIndex))
    board.appendChild(button)
    return button
  })

  playerContainers = playerIds.map((playerId, index) => {
    const li = document.createElement("li")
    li.setAttribute("player", index)
    li.innerHTML =
           `<img src="${players[playerId].avatarUrl}" />
           <span>${
             players[playerId].displayName +
             (players[playerId].playerId === yourPlayerId ? " (You)" : "")
           }</span>`
    playersSection.appendChild(li)
    return li
  })
}

function onChange({ game, players, yourPlayerId, action }) {
  const { cells, playerIds, winCombo, lastMovePlayerId, freeCells } = game
  if (!cellButtons) initUI(cells, playerIds, players, yourPlayerId)

  cellButtons.forEach((button, i) => {
    button.setAttribute("player", playerIds.indexOf(cells[i]))
    button.setAttribute("dim", (winCombo && !winCombo.includes(i)) || !freeCells)
    if(cells[i] || lastMovePlayerId === yourPlayerId)
      button.setAttribute("disabled", "")
    else
      button.removeAttribute("disabled")
  })

  playerContainers.forEach((container, i) => {
    container.setAttribute("your-turn", playerIds[i] !== lastMovePlayerId)
  })

  if (action && action.name === "claimCell") selectSound.play()
}

Rune.initClient({ onChange })