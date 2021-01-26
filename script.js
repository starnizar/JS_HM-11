class User {
    constructor(name, email, address, phone) {
        this.data = {
            name: name,
            email: email,
            address: address,
            phone: phone
        }
    }

    get () {
        return this.data;
    }
}


class Contacts {
   constructor() {
       this.users =  []
   }

   add (name, email, address, phone) {
    const user = new User (name, email, address, phone)
    const myUser = user.get()
    this.users.push({id: this.users.lenght, ...myUser})

   }

   edit (id, name, email, address, phone) {
    this.users[id].name = name;
    this.users[id].email = email;
    this.users[id].address = address;
    this.users[id].phone = phone;
   }
   remove (id) {
    delete this.users[id]
   }

   get () {
       return this.users;
   }
}



class ContactsApp extends Contacts {
    constructor() {
        super() //для добавления новых методов
    }

    display() {
        const self = this

        const form = document.createElement('form')
        form.innerHTML = `
            <input type = 'text'>
            <input type = 'text'>
            <input type = 'text'>
            <input type = 'text'>
            <button type = 'submit'> Add </button>
        `

        form.addEventListener('submit', (event) => {
            event.preventDefault()  //запрет обновления страницы
            const name = event.currentTarget[0].value
            const email = event.currentTarget[1].value
            const address = event.currentTarget[2].value
            const phone = event.currentTarget[3].value

            event.currentTarget[0].value = event.currentTarget[1].value = event.currentTarget[2].value = event.currentTarget[3].value = ''
            self.add(name, email, address, phone)
        
           

            this.displayContacts()
        })

        document.body.appendChild(form)
    }

    editModalWimdow(contactID, userData) {
        const {id, name, email, address, phone} = userData

        const editBlock = document.getElementById(contactID)

        const editForm = document.createElement('div')
        const inputName = document.createElement('input')
        const inputEmail = document.createElement('input')
        const inputAddress = document.createElement('input')
        const inputPhone = document.createElement('input')
        const save = document.createElement('button')
        save.innerHTML = 'Save'

        inputName.value = name
        inputEmail.value = email
        inputAddress.value = address
        inputPhone.value = phone

        editForm.appendChild(inputName)
        editForm.appendChild(inputEmail)
        editForm.appendChild(inputAddress)
        editForm.appendChild(inputPhone)
        editForm.appendChild(save)

        save.addEventListener('click', (event) => {

            this.displayContacts()
        })

        document.getElementById(contactID).appendChild(editForm)
    }

    

    displayContacts() {
        const users = this.get
        const self = this

        if (document.getElementById('contactsBlock')){
            document.getElementById('contactsBlock').remove()
        }

        const contactsBlock = document.createElement('div')
        contactsBlock.id = 'contactsBlock'
        self.users.map(user => {
            const contact = document.createElement('div')
            const CONTACT_ID = user.name + '_' + user.id
            contact.id = CONTACT_ID
            contact.innerHTML = `
                Name: ${user.name} <br>
                Email: ${user.email} <br>
                Address: ${user.address} <br>
                Phone: ${user.phone} <br>
            `;
            const remove = document.createElement('button');
            remove.innerHTML = 'Delete'
            remove.addEventListener('click', () => {
                self.remove(user.id)
                self.displayContacts()
            })
            contact.appendChild(remove)

            const edit = document.createElement('button')
            edit.innerHTML = 'Edit'
            edit.addEventListener ('click', () => {
                this.editModalWimdow(CONTACT_ID, user)
                
            })
            contact.appendChild(edit)

            contactsBlock.appendChild(contact)
        })
        document.body.appendChild(contactsBlock)
    }

}

const app = new ContactsApp()
app.display()
app.displayContacts()
