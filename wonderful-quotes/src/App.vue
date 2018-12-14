<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes ="quotes" @quoteDelete="quoteDelete"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info:click on a quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import  Header from "./components/Header.vue";
    import  QuoteGrid from "./components/QuoteGrid.vue";
    import  NewQuote from "./components/NewQuote.vue";

    export default {
        data: function(){
            return {
                quotes: ['Just a quote see something'],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    return alert('please delete quote first')
                }
                this.quotes.push(quote);
            },
            quoteDelete(index){
                this.quotes.splice(index,1);
            }
        },
        components:{
            appHeader: Header,
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
