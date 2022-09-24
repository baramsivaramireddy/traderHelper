

 import {createAccount,signIn,signout} from './auth.js'
import { showErrorMessage } from './helper.js'

import { tradingDetailsForm } from './app.js'


 function createNav() {
    let nav = document.createElement('nav')
    let title = document.createElement('h1')
    title.innerHTML = 'trader helper'

    let errorMessage = document.createElement('p')
    errorMessage.setAttribute('id','errorMessage')
    errorMessage.style.color='red'
    nav.append(errorMessage)
    nav.appendChild(title)
    return nav
   


}


export  function showApp()  {
    

        createNav()

        let app = document.createElement('div')
        app.setAttribute('id','app')
        let signOutButton = document.createElement('button')
        signOutButton.innerHTML= 'sign out'

        signOutButton.addEventListener('click' ,()=>{
            signout()
        })
        app.append(signOutButton)
        app.append(createNav())
         app.append(tradingDetailsForm())
        document.getElementById('root').append(app)

}

export function hideApp() {
    let appDiv = document.getElementById('app')
    if (appDiv){
        appDiv.style.display= 'none'
    }
}
export  function showLogin(){
    
    let logInDiv = document.createElement('div')
    logInDiv.setAttribute('id','logIn')

    let loginTitle = document.createElement('p')
    
    loginTitle.innerHTML = "Log In"
    logInDiv.append(loginTitle)

    let form =  document.createElement('form')
    let emailInput = document.createElement('input')

    form.append(emailInput)
    let passwordInput = document.createElement('input')

    form.append(passwordInput)

    let logInButton = document.createElement('button')
    logInButton.innerHTML ="Log In"
    logInButton.setAttribute('id','logInButton')


    logInButton.addEventListener('click',(e)=> {
        e.preventDefault()
        
        signIn(emailInput.value,passwordInput.value)
    })
    form.append(logInButton)

    logInDiv.append(form)
    document.getElementById('root').append(logInDiv)



}

export  function hideLogin() {
    console.log('hide login')
    let logindiv = document.getElementById('logIn')
    if (logindiv){
    logindiv.style.display= 'none'
 }
}


export  function showSignUp(){
         
            let signUpDiv = document.createElement('div')
            signUpDiv.setAttribute('id','signUp')

            let signUpTitle = document.createElement('p')
            signUpTitle.innerHTML = 'sign Up '
            signUpDiv.append(signUpTitle)
            let form =  document.createElement('form')
            let emailInput = document.createElement('input')
            emailInput.setAttribute('type' ,'email')
            emailInput.setAttribute('name','email')
            form.append(emailInput)

            let passwordInput = document.createElement('input')
            passwordInput.setAttribute('type','password')
            passwordInput.setAttribute('name','password')

            form.append(passwordInput)

            let conformPasswordInput = document.createElement('input')
            conformPasswordInput.setAttribute('type','password')
            conformPasswordInput.setAttribute('name','conformPassword')


            form.append(conformPasswordInput)
            
            let SingUpButton = document.createElement('button')
            SingUpButton.innerHTML ="sign Up"

           
            SingUpButton.addEventListener('click' ,(e)=>{
                e.preventDefault()
                createAccount(emailInput.value,passwordInput.value,conformPasswordInput.value)
            })


            form.append(SingUpButton)
            signUpDiv.append(form)
            document.getElementById('root').append(signUpDiv)
}



export  function hideSignUp(){
    console.log('hidesignup')

   let signUpdiv = document.getElementById('signUp')
   if (signUpdiv){
   signUpdiv.style.display='none'   
}
}


