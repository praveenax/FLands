$(function () {


    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
    
    
    Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})
    
    

});
