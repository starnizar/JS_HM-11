class Contacts {
   constructor() {
       this.data = {
           list: []
       }
   }

   add = () => {

   }

   edit = (id, obj) => {

   }
   remove = (id) => {

   }

   get = () => {
       return this.data;
   }
}

class User {
    constructor() {
        this.data = {
            id: '',
            name: '',
            email: '',
            address: '',
            phone: ''
        }
    }

    edit = (obj) => {
        this.data.id = obj.id
        this.data.name = obj.name
        this.data.email = obj.email
        this.data.address = obj.address
        this.data.phone = obj.phone
    }

    get = () => {
        return this.data;
    }
}

class ContactsApp extends Contacts {
    
}


let stalin = new User;

stalin.edit({id: '1', name: 'Stalin', email:'ussr@world.ru', address: 'USSR', phone:'+1-111'})
console.log(stalin.get());