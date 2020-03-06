
//### BUSCANDO No local storage o que esta salvo ####

export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
 
      ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
//### BUSCANDO No local storage o que esta salvo ####


logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
 
    }

//### Salvando no localStorage
localStorage.setItem('currentUser', JSON.stringify(user));
//### Salvando no localStorage

    login(username: string, password: string, localip:string) {


            return this.http.post<any>(
                                        url, 
                                        body, 
                                        { headers: headers ,
                                          
                                          } 
                                      )
              .pipe(map(user => {

                  if (user && user.token ) {

                      localStorage.setItem('currentUser', JSON.stringify(user));

                  }else{
                    console.log("aquii no erro")
                  }
  
                  return user;
              }))
  
      }