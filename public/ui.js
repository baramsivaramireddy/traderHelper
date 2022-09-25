

 import {createAccount,signIn,signout ,passwordReset} from './auth.js'
import { showErrorMessage } from './helper.js'

import { tradingDetailsForm ,ViewTradeDetails,monthlyCharts} from './app.js'


 function createNav() {
    let nav = document.createElement('nav')
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
    logInDiv.setAttribute('class','mx-5  d-flex align-items-center justify-content-center')

    let form =  document.createElement('form')
    let emailInput = document.createElement('input')
    emailInput.setAttribute('type' , "email")
    emailInput.setAttribute('placeholder', 'email')
    emailInput.setAttribute('class','form-control w-100 mt-1')

    form.append(emailInput)
    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('type' , 'password')
    passwordInput.setAttribute('placeholder', 'password')
    passwordInput.setAttribute('class','form-control w-100 mt-1')
    form.append(passwordInput)

    let passwordForgot = document.createElement('p')
    passwordForgot.innerHTML = 'Forgot password ?'
    passwordForgot.style.color = 'red'
    form.append(passwordForgot)
    passwordForgot.addEventListener('click' ,()=> {
        if (!emailInput.value)
        { 
            showErrorMessage(' plz enter mail ')
        }
        else {
            passwordReset(emailInput.value)
        }  
           

    })

    let logInButton = document.createElement('div')
    logInButton.innerHTML ="Log In"
    logInButton.setAttribute('id','logInButton')
    logInButton.setAttribute('class','btn btn-primary w-100 mt-2')
    logInButton.classList.add('mx-auto')


    logInButton.addEventListener('click',(e)=> {
        e.preventDefault()
        
        signIn(emailInput.value,passwordInput.value)
    })
    form.append(logInButton)


    logInDiv.append(form)
    document.getElementById('root').append(logInDiv)



}
function emptyElement(element){
    if (element.childElementCount){
        while (element.childElementCount > 0)
    {
      element.firstChild.remove()
    }
    }
    
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
            signUpDiv.setAttribute('class','mt-5 mx-5  d-flex align-items-center justify-content-center')
            
            let form =  document.createElement('form')
            let emailInput = document.createElement('input')
            emailInput.setAttribute('type' ,'email')
            emailInput.setAttribute('placeholder' ,'email')
            emailInput.setAttribute('class' ,'form-control w-100 mt-1 ')
            emailInput.setAttribute('name','email')
            form.append(emailInput)

            let passwordInput = document.createElement('input')
            passwordInput.setAttribute('type','password')
            passwordInput.setAttribute('name','password')
            passwordInput.setAttribute('placeholder','password')
            passwordInput.setAttribute('class' ,'form-control w-100 mt-1')
            form.append(passwordInput)

            let conformPasswordInput = document.createElement('input')
            conformPasswordInput.setAttribute('type','password')
            conformPasswordInput.setAttribute('name','conformPassword')
            conformPasswordInput.setAttribute('placeholder','conform password')
            conformPasswordInput.setAttribute('class','form-control w-100 mt-1')


            form.append(conformPasswordInput)
            
            let SingUpButton = document.createElement('div')
            SingUpButton.innerHTML ="sign Up"

            SingUpButton.setAttribute('class','btn btn-primary w-100 mt-2')
           
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


