async function runner() {
  console.log("tunggu")
  await timer(1000)
  console.log("selesai")

}

async function timer(time) {
  return new Promise((res) => {
    return setTimeout(() => {
      return res()
    }, time)
  })
}



runner()