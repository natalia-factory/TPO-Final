var posts
var postList = document.createDocumentFragment()

findAllPosts()

function findAllPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    // Genero una lista de 3 objetos para no imprimir los 100 posteos del json
    var miArray = new Array(json[0], json[1], json[2], json[3], json[4])
    startDependencies(miArray)
  })
}

function startDependencies(json){
    posts = json
    printPosts(posts)
}
function printPosts(posts){
    for (let index = 0; index < posts.length; index++) {
        createPost(posts[index], index)
    }
}

function createPost(element, index){
    let container = document.getElementById('postsContainer')
    let article = document.createElement('article')
    let post = ''
    post+='<div class="post">'
    post+='<img src="../imgBlog/post'+index+'.jpg" alt="" class="image">'
    post+='<div class="date">'
    post+='<i class="far fa-clock"></i>'
    post+='<span>20 oct, 2022</span>'
    post+='</div>'
    post+='<h3 class="title">'+element.title+'</h3>'
    post+='<p class="text">'+element.body+element.body+element.body+element.body+'</p>'
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
    article.insertAdjacentHTML('beforeend', post)
    postList.appendChild(article)
    container.appendChild(postList)
    
}