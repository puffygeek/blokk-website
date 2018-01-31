var ui, uiConfig
$(function () {

  uiConfig = {
    signInSuccessUrl: '#',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  }

  firebase.initializeApp(config)
  ui = new firebaseui.auth.AuthUI(firebase.auth())

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      showAuthenticatedUser(user)
      ui.reset()
    } else {
      hideAuthenticatedUser()
    }
  })
})

function hideAuthenticatedUser () {
  $('#user-not-authenticated').removeClass('hide')
  $('#user-authenticated').addClass('hide')
  $('#user-authenticated-signout').addClass('hide')
}

function showAuthenticatedUser (user) {
  var name = user.displayName ? user.displayName : 'Username'
  $('#user-not-authenticated').addClass('hide')
  $('#user-authenticated').removeClass('hide')
  $('#user-authenticated-signout').removeClass('hide')
  $('#user-authenticated-name').html(name);
}

function hideFirebaseLoginWindow () {
  $('#firebaseui-auth-container').addClass('hide')
}

function showFirebaseLoginWindow () {
  $('#firebaseui-auth-container').removeClass('hide')
}

$('#firebase-sign-in').click(function (event) {
  ui.start('#firebaseui-auth-container', uiConfig)
  showFirebaseLoginWindow()
  event.stopPropagation();
  $(document).click(function() {
    ui.reset();
    $(document).unbind("click");
  });
})

$('#firebase-sign-out').click(function (event) {
  firebase.auth().signOut()
})

$('#firebaseui-auth-container').click(function (event) {
  event.stopPropagation()
})