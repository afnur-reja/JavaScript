let DATA = "Secret Data" 

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        return `Data = ${DATA}`
    }
}

class Admin extends User {
    constructor(name, email){
      super(name, email)
    }
    editData () {
        DATA = "new Secret Data"
    }
}


const st1 = new User("Moky", "moky234@gmail.com");
const st2 = new User("naba", "naba123@gamil.com");
const admin1 = new Admin("admin1", "admin1@gmail.com");
console.log(admin1)
admin1.editData();

