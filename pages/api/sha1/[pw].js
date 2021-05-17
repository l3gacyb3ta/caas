var crypto = require('crypto')
const fs = require('fs')

function solve(strin) {
  try {
    const data = fs.readFileSync('/home/runner/crackasaservice/data/top10000.txt', 'utf8')
    const sha1 = fs.readFileSync('/home/runner/crackasaservice/data/top10k1.txt', 'utf8')


    var dat = data.split('\n')
    //console.log(dat)
    var sha = sha1.split('\n')
    //console.log(sha)

    for (let hash in dat) {
      // console.log(hash)

      let hashed = sha[hash]

      if (hashed == strin) {
        // console.log('solve')
        return dat[hash]
      }
    }

    return "No solve"
  }
  catch (err) {
    return "error";
  }
  
}

export default (req, res) => {
  const { pw } = req.query
  
  res.status(200).json({ solution: solve(pw) })
}
