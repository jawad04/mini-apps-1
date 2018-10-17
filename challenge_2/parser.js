/***********PARSER***************/
class Parser {
  constructor() {

  }
  cvsCreator(obj) {
    var csv = '';
    var keys = Object.keys(obj);
    keys.pop();
    csv = keys.join() + '\n';
    var result = [];
    for (var key of keys) {
      result.push(obj[key]);
    }
    csv += result.join() + '\n';

    for (var child of obj.children || []) {
      csv += this.cvsCreator(child); 
    }

    return csv;
  }
}
module.exports = Parser;