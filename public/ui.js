

 import {createAccount,signIn,signout} from './auth.js'
import { showErrorMessage } from './helper.js'

import { tradingDetailsForm ,ViewTradeDetails,monthlyCharts} from './app.js'


 function createNav() {
    let nav = document.createElement('nav')
   

    let errorMessage = document.createElement('p')
    errorMessage.setAttribute('id','errorMessage')
    errorMessage.style.color='red'
    nav.append(errorMessage)
    
    return nav
   


}


export  function showApp()  {
    

        createNav()

        let app = document.createElement('div')
        app.setAttribute('id','app')
        app.append(createNav())
        let signOutButton = document.createElement('div')

        signOutButton.innerHTML= 'sign out'
        
        signOutButton.setAttribute('class','btn btn-outline-danger')
        signOutButton.addEventListener('click' ,()=>{
            signout()
        })
        app.append(signOutButton)
        
         app.append(tradingDetailsForm())

         app.append(ViewTradeDetails())
         app.append(monthlyCharts())
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


    let form =  document.createElement('form')
    let emailInput = document.createElement('input')
    emailInput.setAttribute('type' , "email")
    emailInput.setAttribute('placeholder', 'email')
    emailInput.setAttribute('class','form-control')

    form.append(emailInput)
    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('type' , 'password')
    passwordInput.setAttribute('placeholder', 'password')
    passwordInput.setAttribute('class','form-control')
    form.append(passwordInput)

    let logInButton = document.createElement('div')
    logInButton.innerHTML ="Log In"
    logInButton.setAttribute('id','logInButton')
    logInButton.setAttribute('class','btn btn-primary')
    logInButton.classList.add('mx-auto')
    logInButton.addEventListener('click',(e)=> {
        e.preventDefault()
        
        signIn(emailInput.value,passwordInput.value)
    })
    form.append(logInButton)

    logInDiv.append(form)
    document.getElementById('root').append(logInDiv)



}

export  function hideLogin() {
 
    let logindiv = document.getElementById('logIn')
    if (logindiv){
    logindiv.style.display= 'none'
 }
}


export  function showSignUp(){
         
            let signUpDiv = document.createElement('div')
            signUpDiv.setAttribute('id','signUp')

            let signUpTitle = document.createElement('p')
            signUpTitle.innerHTML = 'sign Up'
            signUpDiv.append(signUpTitle)
            let form =  document.createElement('form')
            let emailInput = document.createElement('input')
            emailInput.setAttribute('type' ,'email')
            emailInput.setAttribute('placeholder' ,'email')
            emailInput.setAttribute('class' ,'form-control')
            emailInput.setAttribute('name','email')
            form.append(emailInput)

            let passwordInput = document.createElement('input')
            passwordInput.setAttribute('type','password')
            passwordInput.setAttribute('name','password')
            passwordInput.setAttribute('placeholder','password')
            passwordInput.setAttribute('class' ,'form-control')
            form.append(passwordInput)

            let conformPasswordInput = document.createElement('input')
            conformPasswordInput.setAttribute('type','password')
            conformPasswordInput.setAttribute('name','conformPassword')
            conformPasswordInput.setAttribute('placeholder','conform password')
            conformPasswordInput.setAttribute('class','form-control')


            form.append(conformPasswordInput)
            
            let SingUpButton = document.createElement('div')
            SingUpButton.innerHTML ="sign Up"

            SingUpButton.setAttribute('class','btn btn-primary')
           
            SingUpButton.addEventListener('click' ,(e)=>{
                e.preventDefault()
                createAccount(emailInput.value,passwordInput.value,conformPasswordInput.value)
            })


            form.append(SingUpButton)
            signUpDiv.append(form)
            document.getElementById('root').append(signUpDiv)
}



export  function hideSignUp(){
    

   let signUpdiv = document.getElementById('signUp')
   if (signUpdiv){
   signUpdiv.style.display='none'   
}
}


