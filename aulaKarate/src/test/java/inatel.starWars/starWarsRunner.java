package inatel.starwars.users;

import com.intuit.karate.junit5.Karate;

class starWarsRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("starWars").relativeTo(getClass());
    }    

}
