export function showErrorMessage(message){
    let messageDiv = document.getElementById('errorMessage')
    messageDiv.innerHTML = message
}

export function emptyElement(element){
    if (element.childElementCount){
        while (element.childElementCount > 0)
    {
      element.firstChild.remove()
    }
    }
    
}
