
module.exports = fn => {
  return (function acc(...prev) {
    return function(...args) {
      args = prev.concat(args)

      if (args.length >= fn.length) {
        return fn(...args)
      } else {
        return acc(...args)
      }
    }
  })()
}
