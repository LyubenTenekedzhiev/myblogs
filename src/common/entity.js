let nextId = 0;

class Entity {
  constructor({ id, created, modified }) {
    this.id = id || ++nextId;
    this.created = created || new Date();
    this.modified = modified || new Date();
  }
  toString() {
    return `id: ${this.id}, created: ${this.created}, modified: ${this.modified}`;
  }
}

// module.exports = Entity;
export default Entity;