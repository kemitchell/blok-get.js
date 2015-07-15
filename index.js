function blokGet(level, parse, digest, callback) {
  level.get(digest, function(error, value) {
    if (error) {
      callback(error) }
    else {
      callback(null, parse(value)) } }) }

module.exports = blokGet
