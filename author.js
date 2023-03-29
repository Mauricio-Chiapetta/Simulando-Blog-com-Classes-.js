const Post = require('./post')

class Author{
    constructor(name){
        this.name = name
        this.posts = []
    }

    WritePost(title,body){
        const post = new Post(title,body,this.name,this.posts) 
        this.posts.push(post)
        return post 

    }
}

module.exports = Author