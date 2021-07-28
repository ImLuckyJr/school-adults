export default function({ $auth }) {
    if (!$auth.loggedIn){
      $auth.fetchUser().catch((error) => {
        if (error.message == 'Request failed with status code 401'){
          console.log('Устаревший ключ');
          $auth.strategy.reset()
        }
      })
    }
  }