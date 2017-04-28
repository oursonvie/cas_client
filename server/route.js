JsonRoutes.add("get", "/api/incoming", function (req, res, next) {
  console.log('GET /api/incoming');

  console.log('req.params:'+req.params.abc)
  console.log('req.query:'+req.query.abc)

  JsonRoutes.sendResult(res, {
    name: 123
  });
});
