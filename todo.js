var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function(event){
            // alert();
            if(this.newItem == '') return;
            var todo = {
                item: this.newItem,
                isDone: false
            };

            this.todos.push(todo);

            //クリア処理
            this.newItem = '';
        },
        deleteItem: function(index){
            this.todos.splice(index,1)
        }
    }
})