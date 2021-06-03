export default function ({ $axios, store, redirect, $nuxt }) {
    console.log('AXIOS PLUGIN LOADED');
    
    $axios.onRequest(request => {
        console.log('[ REQUEST ]' + request.url);
        $nuxt.$loading.start();
        
        if (store.state.sessionStorage.authUser) {
            request.headers.common['Authorization'] = store.state.sessionStorage.authUser.token_type + ' ' + store.state.sessionStorage.authUser.access_token;
        }
        
        return request;
    });
    
    $axios.onResponse(response => {
        console.log('[ RESPONSE ]' + response.request.responseURL, response);
        // TODO: If token expires, perform a silent refresh
        $nuxt.$loading.finish();
        
        return response;
    });
    
    $axios.onError(error => {
        console.error('[ ERROR ]', error);
        const code = parseInt(error.response && error.response.status);
        $nuxt.$loading.failed();
        
        if (code === 401) {
            store.state.sessionStorage.authUser = null;
            return redirect('/');
        }
        
        return error;
    });
}