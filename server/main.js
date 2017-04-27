Meteor.methods({
  'loginAsAdmin': function(cookie, callback) {
    //console.log(cookie)

    var loginRequest = {admin: true, password: 'password'};

    Accounts.callLoginMethod({
      methodArguments: [loginRequest],
      userCallback: callback
    });

  }
})
