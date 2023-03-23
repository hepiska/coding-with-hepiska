const axios = require("axios")

async function orang() {
  const [planet, people] = await Promise.all([
    axios("https://swapi.dev/api/planets/1"),
    axios("https://swapi.dev/api/people/1")
  ])
}


async function runner() {
  console.time("time")
  await orang()
  console.timeEnd("time")
}
runner()