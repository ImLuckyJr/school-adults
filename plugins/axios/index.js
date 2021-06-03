export default function({ $axios, store, redirect }) {
  console.log('AXIOS PLUGIN LOADED');

  $axios.onRequest(request => {
    console.log('[ REQUEST ]' + request.url)
    if (store.state.sessionStorage.authUser) {
      request.headers.common['Authorization'] = store.state.sessionStorage.authUser.token_type + ' ' + store.state.sessionStorage.authUser.access_token;
    }

    return request
  })

  $axios.onResponse(response => {
    console.log('[ RESPONSE ]' + response.request.responseURL, response)
    // TODO: If token expires, perform a silent refresh

    return response
  })

  $axios.onError(error => {
    console.error('[ ERROR ]', error)
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      store.state.sessionStorage.authUser = null
      return redirect('/')
    }

    return error
  })
}