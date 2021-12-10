let xhr = new XMLHttpRequest

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
            outputString += `<p> ${post.PostTitle}, ${post.LevelReq}</p>`
        }
        divElement.innerHTML= outputString;

    }
}