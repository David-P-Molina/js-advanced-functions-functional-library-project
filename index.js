const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
//
    each: function(collection, iteration) {
      let originalCollection;
      if (typeof collection === "object") {
        originalCollection = Object.assign({}, collection)
        for ( const element in collection ) {
          iteration(collection[element])
        } 
      } else {
        originalCollection = Array.from(collection)
        for ( const element of collection ) {
          iteration(element)
      }
    }
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i, collection))
      }
    } else {
      for ( const property in collection ) {
        newArray.push(callback(collection[property]))
      }
    }
      return newArray
    },

    reduce: function(collection, callback, accumulator ) {
      for ( const element of collection) {
        if (typeof accumulator === "undefined") {
          accumulator = collection[0]
        } else {
        accumulator = callback(accumulator, element, collection)
        }
      }
      return accumulator
    },

    find: function(collection, predicate) {
      
      for (const element of collection) {
       if (element === predicate) {
        return element
       } else {
         return undefined
       }
      }
    },

    filter: function() {

    },
    size: function() {

    },
    first: function() {

    },
    last: function() {

    },
    compact: function() {

    },
    sortBy: function() {

    },
    flatten: function() {

    },
    uniq: function() {

    },    
    keys: function() {

    },
    values: function() {

    },
    functions: function() {

    },





  }
})()

fi.libraryMethod()
