

class BankAccount {
    first_acc = "101";
    own_name = "Nayem Islam";
    #balance = 100;

    getName() {
        return ('Account Number: ' + this.first_acc + "\n" + "Owner Name: " + this.own_name);
    }

    deposit(amount) {
        this.#balance += amount;
        console.log("Deposit Balance: " + amount);
    }

    cashOut(amount) {
        if (amount <= 0) {
            console.log("You don't have any balance to withdraw");
            return; 
        }
        
        if (amount > this.#balance) {
            console.log("You don't have that much balance to withdraw");
            return; 
        }

        this.#balance -= amount;
        console.log("Cashout Balance: " + amount);
    }

    checkBalance() {
        return this.#balance;
    }
}

let acc = new BankAccount();

console.log(acc.getName());

acc.deposit(300);
acc.cashOut(0);
console.log("Total balance: " + acc.checkBalance() + " tk");


























