Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  iflogin: function() {
    return LoginState.get('server')
  }
});

Template.hello.events({
  'click button': function() {
    var serverState = LoginState.get('server')
    Meteor.loginAsAdmin('admin-password')
  }
})

Template.caslogin.events({
  'click .cas-login': function casLogin(event, instance) {
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };
    Meteor.loginWithCas(callback);
    return false;
  },
  'click .cas-logout': function casLogout(event) {
    event.preventDefault();
    Meteor.logout();
    return false;
  }
})
