const apiConfiguration = {
  baseUrl: "https://us-central1-js-capstone-backend.cloudfunctions.net/api",
  gameId: "",
};

const createGame = async (name) => {
  const response = await fetch(`${apiConfiguration.baseUrl}/games/`, {
    method: "POST",
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify({ name }),
  });

  const content = await response.json();
  const data = content.result.split(" ");
  apiConfiguration.gameId = data[data.length - 2];
  return content;
};

createGame(`My Amzing game`);

const addScore = async (data) => {
  const response = await fetch(
    `${apiConfiguration.baseUrl}/games/${apiConfiguration.gameId}/scores/`,
    {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(data),
    }
  );

  const content = await response.json();
  cleanFields();
  // handleRefersh();
};

const handleAddScore = () => {
  const user = document.querySelector("input[type=name").value;
  const score = document.querySelector("input[type=number").value;
  addScore({ user, score });
};

const cleanFields = () => {
  const user = document.querySelector("input[type=name");
  const score = document.querySelector("input[type=number");
  user.value = ``;
  score.value = ``;
};

document
  .getElementById("submit")
  .addEventListener("click", () => handleAddScore());

const getData = async () => {
  const response = await fetch(
    `${apiConfiguration.baseUrl}/games/${apiConfiguration.gameId}/scores/`,
    {
      method: "GET",
      headers: {
        "Content-Type": `application/json`,
      },
    }
  );

  return response.json();
};

const handleRefersh = async () => {
  const content = await getData();
  var table = document.getElementById("scores-table");
  table.innerHTML = '';
  content.result.map((item) => {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = item.user;
    cell2.innerHTML = item.score;
  });
};

document
  .getElementById("refresh")
  .addEventListener("click", () => handleRefersh());
