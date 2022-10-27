var posts
var postList = document.createDocumentFragment()

findAllPosts()

function findAllPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    console.log(json[0])
    var miArray = new Array(json)
    let fistTen = miArray.slice(0, )
    startDependencies(fistTen)
  })
}

function startDependencies(json){
    posts = json
    printPosts(posts)
}
function printPosts(posts){
    posts.forEach(element => {
        createPost(element)
    });
}

function createPost(element){
    let container = document.getElementById('postsContainer')
    let article = document.createElement('article')
    let post = ""
    post = '<div class="post">'
    post+='<img src="../imgBlog/post1.jpeg" alt="" class="image">'
    post+='<div class="date">'
    post+='<i class="far fa-clock"></i>'
    post+='<span>20 oct, 2022</span>'
    post+='</div>'
    post+='<h3 class="title">'+element.title+'</h3>'
    post+='<p class="text">'+ element.body+'</p>'
    post+='<div class="links">'
    post+='<a href="#" class="user">'
    post+='<i class="far fa-user"></i>'
    post+='<span>por Counselors</span>'
    post+='</a>'
    post+='<a href="#" class="icon">'
    post+='<i class="far fa-comment"></i>'
    post+='<span>(45)</span>'
    post+='</a>'
    post+='<a href="#" class="icon">'
    post+='<i class="far fa-share-square"></i>'
    post+='<span>(29)</span>'
    post+='</a>'
    post+='</div>'
    post+='</div>'
    article.append(post)
    postList.appendChild(article)
    container.appendChild(postList)
    
}