import Entity from './../common/entity.js';

class User extends Entity {
  status = "active";
  constructor(firstName, lastName, username, password, gender, role, imageURL, info) {
    super({});
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.gender = gender;
    this.role = role;
    this.imageURL = imageURL;
    this.info = info;
  }
  toString() {
    return `${super.toString()}, firstName: ${this.firstName}, lastName: ${this.lastName}, username: ${this.username}, 
            password: ${this.password}, gender: ${this.gender}, role: ${this.role}, imageURL: ${this.imageURL}, info: ${this.info}`;
  }
}

export default User;