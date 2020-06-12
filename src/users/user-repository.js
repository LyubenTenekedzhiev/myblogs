import User from './user.js';

class UserRepository {
  users = new Map();
  constructor(user) {
    this.user = user;
  }
  create(user) {
    this.users.set(user.id, user);
  }
  findAll() {
    return this.users.values();
  }
  findById(id) {
    return this.users.get(id);
  }
  update(user) {
    this.users.set(user.id, user);
    return user;
  }
  deleteById(id) {
    return this.users.delete(id);
  }
  getCount() {
    return this.users.size;
  }
}

const userRepo = new UserRepository();

userRepo.create(new User("Lyuben", "Tenekedzhiev", "lyuben", 124, "male", "admin", "www", "no"));
userRepo.create(new User("SADASF", "WFAWGAW", "lyuben", 124, "male", "admin", "www", "no"));

const user1 = userRepo.findById(1);
user1.password = "mynewpass";
userRepo.update(user1);
userRepo.deleteById(1);

const MOCK_USERS = Array.from(userRepo.findAll());

console.log(MOCK_USERS);

export default UserRepository;