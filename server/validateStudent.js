/* Validate username, sending a specific error message on failure. */
Accounts.validateNewUser(function (user) {
  if (user) {
    const username = user.services.cas.id;
    // console.log(user)
    if (username == "yixiongzhang") {

      //soap callback

      var url = 'http://202.117.1.241/axis2/services/UserInfo?wsdl';
      var args = {auth: username};

      try {
        var client = Soap.createClient(url);
        var result = client.getInfoById(args);

        console.log(result);
      }
      catch (err) {
        if(err.error === 'soap-creation') {
          console.log('SOAP Client creation failed');
        }
        else if (err.error === 'soap-method') {
          console.log('SOAP Method call failed');
        }

      }


      return true
    }

  }
  throw new Meteor.Error(403, 'Test only support one account');
});
