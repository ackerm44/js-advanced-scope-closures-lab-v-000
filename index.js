function produceDrivingRange (max) {
  return function (block1, block2) {
    let distance = parseInt(block2.match(/\d*/), 10) - parseInt(block1.match(/\d*/), 10)
    let difference = Math.abs(distance - max)
    if (distance > max) {
      return `${difference} blocks out of range`
    } else {
      return `within range by ${difference}`
    }
  }
}

function produceTipCalculator (percent) {
  return function (amount) {
    return amount * percent
  }
}
