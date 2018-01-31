function hideAuthenticatedUser () {
  $('#user-not-authenticated').addClass('show')
  $('#user-not-authenticated').removeClass('hide')
  $('#user-authenticated').addClass('hide')
  $('#user-authenticated').removeClass('show')
  $('#user-authenticated-signout').addClass('hide')
  $('#user-authenticated-signout').removeClass('show')
}

function showAuthenticatedUser (user) {

  var name = (user.displayName ? user.displayName : 'user').toString()

  $('#user-not-authenticated').addClass('hide')
  $('#user-not-authenticated').removeClass('show')
  $('#user-authenticated').addClass('show')
  $('#user-authenticated').removeClass('hide')
  $('#user-authenticated-signout').addClass('show')
  $('#user-authenticated-signout').removeClass('hide')

  $('#user-authenticated-name').innerHTML = name
}

function hideFirebaseLoginWindow () {
  $('#firebaseui-auth-container').addClass('hide')
}

function showFirebaseLoginWindow () {
  $('#firebaseui-auth-container').addClass('show')
}