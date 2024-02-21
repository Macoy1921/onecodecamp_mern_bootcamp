class Item {
    constructor(name, price, stock, sold = 0) {
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.sold = sold;
    }
  
    logDetails() {
      console.log(`Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Sold: ${this.sold}`);
    }
  
    buy() {
      if (this.stock > 0) {
        this.stock--;
        this.sold++;
      } else {
        console.log(`No more ${this.name} in stock`);
      }
    }
  
    returnItem() {
      if (this.sold > 0) {
        this.stock++;
        this.sold--;
      } else {
        console.log(`No more ${this.name} to return`);
      }
    }
  }
  
  const items = [
    new Item("Chicken", 10, 5),
    new Item("Cooking Oil", 15, 8),
    new Item("Eggs", 20, 3)
  ];
  
  
  for (let i = 0; i < 3; i++) {
    items[0].buy();
  }
  
  items[0].returnItem();
  items[0].logDetails();
  
  for (let i = 0; i < 2; i++) {
    items[1].buy();
    items[1].returnItem();
  }
  
  items[1].logDetails();
  
  for (let i = 0; i < 3; i++) {
    items[2].returnItem();
  }
  
  items[2].logDetails();
  
  

  //Task 2 House

  class House {
    constructor(location, price, lot, type) {
      this.location = location;
      this.price = price;
      this.lot = lot;
      this.type = type;  
    }
  
    calculateDiscount() {
      if (this.type === "Preselling") {
        return 0.20; 
      } else if (this.type === "NotPreselling" || this.type === "Ready for Occupancy") {
        return 0.05; 
      }
      
      return 0;
    }
  
    calculateTotalPrice() {
      const discount = this.calculateDiscount();
      return discount !== 0 ? this.price - this.price * discount : this.price;
    }
  
    show_all() {
      console.log(`Location: ${this.location}`);
      console.log(`Price: ${this.price.toFixed(2)}`);
      console.log(`Lot: ${this.lot}sqm`);
      console.log(`Type: ${this.type}`);
      
      const discount = this.calculateDiscount();
      console.log(`Discount: ${discount !== 0 ? discount.toFixed(2) : 'N/A'}`);
      
      console.log(`Total Price: ${this.calculateTotalPrice().toFixed(2)}`);
      
    }
  }
  
  
  const house1 = new House("La Union", 1500000, 100, "Preselling");
  house1.show_all();
  
  const house2 = new House("Metro Manila", 1000000, 150, "Ready for Occupancy");
  house2.show_all();

  //Task 3 Email Builder
  class EmailBuilder {
    constructor() {
      this.email = { recipient: '', subject: '', body: '', attachments: [] };
    }
  
    to(recipient) { this.email.recipient = recipient; return this; }
    subject(subject) { this.email.subject = subject; return this; }
    body(body) { this.email.body = body; return this; }
    attach(attachment) { this.email.attachments.push(attachment); return this; }
  
    send() {
      console.log('Sending email:', this.email);
     
    }
  }
  
 
  const emailBuilder = new EmailBuilder()
    .to('mark@example.com')
    .subject('See You')
    .body('Run Tomorrow!')
    .attach('letter1.pdf')
    .send();
  

  
  
  