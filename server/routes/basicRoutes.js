module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({bye: 'hello' });
  })
}
