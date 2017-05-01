JsonRoutes.add("get", "/_cas/", function (req, res, next) {
  var id = req.params.id;
  console.log(req.params);
  console.log(req.query);

  JsonRoutes.sendResult(res, {
    data: {name:123}
  });
});
