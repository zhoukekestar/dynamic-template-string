module.exports = class Template {
  constructor(str) {
    this._func = new Function(`with(this) { return \`${str}\`; }`);
  }

  fill(data) {
    return this._func.call(data);
  }
}