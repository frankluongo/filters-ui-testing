export class StoreInterface {
  constructor(items = {}) {
    this.items = items;
  }

  addIt(key, item) {
    this.items[key] = [...this.items[key], item];
  }

  getIt(key) {
    return this.items[key];
  }

  removeIt(key, item) {
    const existing = this.items[key];
    if (existing) this.items[key] = existing.filter((i) => i !== item);
  }

  smartAddIt(key, item) {
    const existing = this.items[key];
    if (existing) {
      if (existing.includes(item)) {
        this.removeIt(key, item);
      } else {
        this.addIt(key, item);
      }
    } else {
      this.storeIt(key, item);
    }
  }

  storeIt(key, item) {
    this.items[key] = [item];
  }
}
