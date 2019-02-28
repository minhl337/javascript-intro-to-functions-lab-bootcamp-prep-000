function shout(x){
  return x.toUpperCase()
}

function whisper(x){
  return x.toLowerCase()
}

function logShout(x){
  console.log(x.toUpperCase())
}

function logWhisper(x){
  console.log(x.toLowerCase())
}

function sayHiToGrandma(x){
  if(x.toLowerCase()===lowercase){
    return "I can't hear you!"
  } else if (x===uppercase){
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}



describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
