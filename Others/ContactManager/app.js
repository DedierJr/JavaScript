class ContactManager {
    constructor() {
        this.contacts = [];
    }
    
    addContact(name, ...phones) {
        const contact = {name}
        phones.forEach((phone, index) => contact[`phone${index+1}`] = phone)
        this.contacts.push(contact)
    }
    
    getContact(name) {
        return this.contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase())
    }
    
    getAllContacts() {
      return this.contacts
    }
    removeContact(name){
      const {contacts} = this
      const idx = contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase())
      if(idx !== -1) contacts.splice(idx, 1)
    }
}

// Exemplo de uso:
const manager = new ContactManager();

manager.addContact("Alice", "123-4567", "987-6543");
manager.addContact("Bob", "555-1234");
manager.addContact("Carol", "222-3333", "444-5555", "666-7777");

manager.removeContact('bob')

console.log(manager.getContact("Alice"));
console.log(manager.getAllContacts());

