let xhr = new XMLHttpRequest

filterPosts()

document.addEventListener('DOMContentLoaded', function(evt){
    xhr.open('GET', `/postsData`, true)
    xhr.send()
})

xhr.onload = function(evt){
    let divElement = document.getElementById('PostContainer')
    divElement.style.color = 'White'
    let incomingData = JSON.parse(this.responseText)
    let outputString = "";
    if (incomingData.createdPosts){
        for (let post of incomingData.createdPosts){
            outputString += `<p>Title: <span>${post.PostTitle}</span>, Level Requirement: ${post.LevelReq}</p>`
        }
        divElement.innerHTML= outputString;

    }
}


function filterPosts (){
    let filterInput = document.getElementById("filterInput")

    document.getElementById("FilterData").addEventListener("click" , function(){
        
        console.log(document.getElementById("PostContainer").children[1])

    })
}