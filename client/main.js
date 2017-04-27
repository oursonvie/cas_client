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
    Meteor.call('loginAsAdmin', serverState)
  }
})
