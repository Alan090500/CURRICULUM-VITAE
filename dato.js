function type (value) {
    var r;
    return ((typeof value === 'object') ? 
      (value === null) ? 
        'null' : 
        (typeof value.constructor === 'function' &&
         (r = value.constructor.name) !== 'Object') ? 
          (r === '' || r === undefined) ? 
            Function.prototype.toString.call (value.constructor)
                    .match (/^\n?(function|class)(\w?)/)[ 2 ] || 'anonymous' : 
            r : 
          Object.prototype.toString.call (value).match (/\s(.*)\]/)[ 1 ] : 
      (typeof value === 'number') ? 
        (isNaN (value)) ? 
          'NaN' : 
          'number' : 
        typeof value);
  }

console.assert( typeof true === 'boolean' ); 
console.assert( typeof [] === 'object' ); 
console.assert( typeof new Date() === 'object' );