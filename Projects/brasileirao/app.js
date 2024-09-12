const data = {
  matches: [
    {
      date: "2024-08-25",
      opponent: "Criciúma",
      competition: "Campeonato Brasileiro",
      result: "Grêmio 1-0 Criciúma",
    },
    {
      date: "2024-08-20",
      opponent: "Fluminense",
      competition: "Copa Libertadores",
      result: "Fluminense 2-1 Grêmio (4-2 nos pênaltis)",
    },
    {
      date: "2024-08-17",
      opponent: "Bahia",
      competition: "Campeonato Brasileiro",
      result: "Grêmio 0-2 Bahia",
    },
    {
      date: "2024-08-13",
      opponent: "Fluminense",
      competition: "Copa Libertadores",
      result: "Grêmio 2-1 Fluminense",
    },
    {
      date: "2024-08-10",
      opponent: "Cuiabá",
      competition: "Campeonato Brasileiro",
      result: "Grêmio 3-1 Cuiabá",
    },
    {
      date: "2024-08-07",
      opponent: "Corinthians",
      competition: "Copa do Brasil",
      result: "Grêmio 0-0 Corinthians",
    },
    {
      date: "2024-08-04",
      opponent: "Athletico-PR",
      competition: "Campeonato Brasileiro",
      result: "Grêmio 2-0 Athletico-PR",
    },
    {
      date: "2024-07-31",
      opponent: "Corinthians",
      competition: "Copa do Brasil",
      result: "Grêmio 0-0 Corinthians",
    },
    {
      date: "2024-07-28",
      opponent: "Vasco",
      competition: "Campeonato Brasileiro",
      result: "Grêmio 1-0 Vasco",
    },
    {
      date: "2024-07-25",
      opponent: "Corinthians",
      competition: "Campeonato Brasileiro",
      result: "Grêmio 2-2 Corinthians",
    },
  ],
};

class Chart {
  constructor({ matches }) {
    this.matches = matches;
    this.makeChart(matches);
    this.isWinner();
  }

  makeChart(matches) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");

    const headers = ["Date", "Opponent", "Competition", "Result"];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      th.classList.add(`${headerText}`);
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);

    matches.forEach((match) => {
      const tr = document.createElement("tr");
      Object.values(match).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    document.body.appendChild(table);
  }

  isWinner() {
    function extractNumbers(s) {
      const numbers = s.match(/\d+/g); // Encontrar todos os grupos de dígitos
      return numbers ? numbers.map(Number) : []; // Converta para números ou retorne um array vazio se nenhum número for encontrado
    }

    const allTr = document.querySelectorAll("tr");
    allTr.forEach((tr) => {
      const resultTd = tr.lastElementChild;
      if (resultTd) {
        resultTd.classList.add("result");

        const result = resultTd.innerText;
        console.log(result);
        const goals = extractNumbers(result)
        if(goals[0] > goals [1]) resultTd.classList.add('winner')
        else if (goals[0] < goals [1]) resultTd.classList.add('loser')
      }
    });
  }
}

const chart1 = new Chart(data);

console.log(extractNumbers(data.matches[0].result));
