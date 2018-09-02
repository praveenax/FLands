//$(document).ready(function(){
//    console.log("test");
//    $("#faction1").load("html/faction-card.html",function(){
////        console.log(responseTxt);
//        setTimeout(function() {
//            var element = $(this).find("faction-title");
//            console.log(element);
//            console.log($(element).html());
//            $(element).val("teeessst");
//            var compiled = _.template("hello: <%= name %>");
//            var valCom = compiled({name: 'moe'});
//            console.log(valCom);
//        },400);
//        
//    });
////    $("#faction2").load("html/faction-card.html");
////    $("#faction3").load("html/faction-card.html");
////    $("#faction4").load("html/faction-card.html");
//});

//import Vue from 'vue'
//import App from './App'
//
//Vue.config.productionTip = false
//
///* eslint-disable no-new */
//new Vue({
//  el: '#app',
//  template: '<App/>',
//  components: { App }
//})

//var app = new Vue({
//  el: '#app',
//  data: {
//    message: 'Hello Vue!'
//  }
//})

//Vue.component('todo-item', {
//  template: '<li>This is a todo</li>'
//})
//Vue.component('button-counter', {
//  data: function () {
//    return {
//      count: 0
//    }
//  },
//  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
//})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript',message:"Elf" },
      { text: 'Learn Vue',message:"Dwarf" },
      { text: 'Build something awesome',message:"Human" },
      { text: 'Build something 2',message:"Orc" }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
      range:[0,1,2,3,4,5,6,7,8,9],
      range2:["Elf","Dwarf","Human","Orc"],
    todos: [
      { text: 'Learn JavaScript',message:"Player 1" },
      { text: 'Learn Vue',message:"Player 2" }
    ]
  }
})

