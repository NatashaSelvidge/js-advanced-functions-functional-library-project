const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, alert) {
    if (Array.isArray(collection)){
      for (let i = 0; i < collection.length; i++){
        alert(collection[i]);    
        }
    }else {
      var collect = Object.values(collection)
      for (let i = 0; i < collect.length; i++){
        alert(collect[i]);
      }
    }
    return collection
    },

    map: function () {},

    reduce: function () {},

    functions: function () {},
  };
})();

fi.libraryMethod();
