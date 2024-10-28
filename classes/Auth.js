const { Customer } = require('./Customer')

class Auth {
    constructor() {
        this.customers = []
    }

    register(name, email, shippingAddress) {
        const newCustomer = new Customer(name, email, shippingAddress)
        this.customers.push(newCustomer)
    }

    login(email) {

        for (let i = 0; i < this.customers.length; i++) {
            let currentCustomer = this.customers[i]
            if (currentCustomer.email == email) {
                return currentCustomer
            }
        }
        return null
    }
}

module.exports = {
    Auth
}