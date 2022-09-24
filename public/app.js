import { 
    addDocumentToCollection , 
    getDocuments, 
        } from './database.js'

import { auth } from './index.js'


export function tradingDetailsForm(){

    let addTradeDetails = document.createElement('div')
    let title = document.createElement('p')
    title.innerHTML = 'Add Trade details'
    addTradeDetails.append(title)
    let form = document.createElement('form')
    form.setAttribute('name','addTradeDetails')
    let nameOfStock = document.createElement('input')
    nameOfStock.setAttribute('type', 'text')
    nameOfStock.setAttribute('placeholder' , "name of stock")
    
    form.append(nameOfStock)
    let date = document.createElement('input')
    date.setAttribute('type', 'date')
    date.setAttribute('placeholder' , 'date')
    
    form.append(date)
    let buyingPrice = document.createElement('input')
    buyingPrice.setAttribute('type' ,'Number')
    buyingPrice.setAttribute('placeholder', 'buying price')
    form.append(buyingPrice)


    let sellingPrice = document.createElement('input')
    sellingPrice.setAttribute('placeholder' , 'selling price')
    sellingPrice.setAttribute('type' , 'Number')
    form.append(sellingPrice)

    let addButton =  document.createElement('button')
    addButton.innerHTML = "Add"
    form.append(addButton)
    addButton.addEventListener('click' ,(e)=>{
        e.preventDefault()
        console.log(sellingPrice.value,buyingPrice.value,nameOfStock.value,date.value)
        addDocumentToCollection('trade' ,{
           "selling price": sellingPrice.value,
           "buying price" :buyingPrice.value,
           'name ':nameOfStock.value,
           'date' : date.value,
            'userId' :  auth.currentUser.uid
        }
        )
    })

    addTradeDetails.append(form)
    return addTradeDetails

}


function createTableRow(obj){
 
    let tr  = document.createElement('tr')

    for (let i = 0 ;i< obj.length ; i++) {
        let td = document.createElement('td')
        td.innerHTML = obj[i]
        tr.append(td)
    }

    return tr
}
export function ViewTradeDetails() {
    
    let TradeDetails = document.createElement('div')
    let title = document.createElement('p')
    title.innerHTML = 'Trade   Details'
    TradeDetails.append(title)

    let tradeTable = document.createElement('table')
    
    tradeTable.append( createTableRow(['name' ,'buying price', 'selling price']))

    TradeDetails.append(tradeTable)
    return TradeDetails
}