const curry = require('../src')

describe("Curry", () => {
  it("", () => {
    const sum = (a,b) => a+b
    const sum_c = curry(sum)

    expect(sum_c(1,1)).toEqual(2)
  })

  it("", () => {
    const sum = (a,b) => a+b
    const sum_c = curry(sum)

    expect(sum_c(1)(1)).toEqual(2)
  })

  it("", () => {
    const sum = (a,b,c) => a+b+c
    const sum_c = curry(sum)

    expect(sum_c(1)(1)(1)).toEqual(3)
  })

  it("", () => {
    const sum = (a,b,c) => a+b+c
    const sum_c = curry(sum)

    expect(sum_c(1, 1)(1)).toEqual(3)
  })

  it("", () => {
    const sum = (a,b,c) => a+b+c
    const sum_c = curry(sum)

    expect(sum_c(1)(1, 1)).toEqual(3)
  })

  it("", () => {
    const sum = (a,b,c,d) => a+b+c+d
    const sum_c = curry(sum)

    expect(sum_c(1, 1)(1, 1)).toEqual(4)
  })

  it("", () => {
    const sum = (a,b,c,d) => a+b+c+d
    const sum_c = curry(sum)

    expect(sum_c(1, 1, 1)(1)).toEqual(4)
  })

  it("", () => {
    const sum = (a,b,c,d) => a+b+c+d
    const sum_c = curry(sum)

    expect(sum_c(1)(1)(1)(1)).toEqual(4)
  })

  it("", () => {
    const sum = (a,b,c,d) => a+b+c+d
    const sum_c = curry(sum)

    expect(sum_c(1, 1, 1, 1)).toEqual(4)
  })

  it("", () => {
    const sum = (a,b,c,d) => a+b+c+d
    const sum_c = curry(sum)

    expect(sum_c(1)(1, 1, 1)).toEqual(4)
  })
})
