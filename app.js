 const app = Vue.createApp({
    //data - tempelete - methods - computed
    data(){
        return{
            auther: "ahmed",
            book: "book1",
            age:40,
            show: false,
            showBooks: true,
            x:0,
            y:0,
            Books:[
                {title: "history",auther:"mohamed abd elkoy" ,isFav:false , image:'assets/1.jpg'},
                {title: "ro3b",auther:"mohamed 2smat"  ,isFav:true, image:'assets/2.jpg'},
                {title: "la tahzn",auther:"4a2d elkorany" ,isFav:false, image:'assets/1.jpg' },
                {title: "la tahzn",auther:"4a2d elkorany" ,isFav:false, image:'assets/1.jpg' },
            ],
         
        }
    },
    methods: {

        changename(name){
            this.auther = name
        },

        toggleShowBlock(){
            this.show = !this.show
        },
        toggleShowBook(){
            this.showBooks = !this.showBooks
        },
        toggleBook(Book){
          Book.isFav = !Book.isFav
        },
        handleEvnent(e){
            console.log(e)
            this.x = e.offsetX
            this.y = e.offsetY
        }



        
    },

    computed:{
        favbooks(){
           return  this.Books.filter((book)=>book.isFav)
        }
    }



 }).mount("#app")
//  app.mount("#app")

