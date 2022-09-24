export function tradingDetailsForm(){

    let addTradeDetails = document.createElement('div')

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
    })

    addTradeDetails.append(form)
    return addTradeDetails

}