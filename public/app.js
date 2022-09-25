import { 
    addDocumentToCollection , 
    getDocuments
   } from './database.js'

   import { showErrorMessage } from './helper.js'

import { 
        doc,
        getDoc,
        collection,
        addDoc,
        getDocs,
        query,
        where, 
        limit ,
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

import {db,app  } from './index.js'
function emptyElement(element){
    if (element.childElementCount){
        while (element.childElementCount > 0)
    {
      element.firstChild.remove()
    }
    }
    
  }

export function tradingDetailsForm(){

    let addTradeDetails = document.createElement('div')
    let title = document.createElement('p')
    title.innerHTML = 'Add Trade details'
    title.setAttribute('class','shadow-sm p-3 mb-5  bg-body rounded')
    title.classList.add('mx-5')
    title.classList.add('mt-3')

    addTradeDetails.append(title)
    let form = document.createElement('form')
    form.setAttribute('name','addTradeDetails')
    let nameOfStock = document.createElement('input')
    nameOfStock.setAttribute('type', 'text')
    nameOfStock.setAttribute('placeholder' , "name of stock")
    nameOfStock.setAttribute('class','form-control')
    nameOfStock.classList.add('mx-5')
    nameOfStock.classList.add('w-25')
    nameOfStock.classList.add('mt-0')
    
    form.append(nameOfStock)
    let date = document.createElement('input')
    date.setAttribute('type', 'date')
    date.setAttribute('placeholder' , 'date')
    date.setAttribute('class','form-control')
    date.classList.add('mx-5')
    date.classList.add('mt-0')
    date.classList.add('w-25')
    form.append(date)
    let buyingPrice = document.createElement('input')
    buyingPrice.setAttribute('type' ,'Number')
    buyingPrice.setAttribute('placeholder', 'buying price')
    buyingPrice.setAttribute('class','form-control')
    buyingPrice.classList.add('mx-5')
    buyingPrice.classList.add('mt-0')
    buyingPrice.classList.add('w-25')
    form.append(buyingPrice)


    let sellingPrice = document.createElement('input')
    sellingPrice.setAttribute('placeholder' , 'selling price')
    sellingPrice.setAttribute('type' , 'Number')
    sellingPrice.setAttribute('class','form-control')
    sellingPrice.classList.add('mx-5')
    sellingPrice.classList.add('mt-0')
    sellingPrice.classList.add('w-25')
    form.append(sellingPrice)

    let addButton =  document.createElement('button')
    addButton.innerHTML = "Add"
    addButton.setAttribute('class','btn btn-outline-success')
    addButton.classList.add('mx-5')
    addButton.classList.add('mt-1')
  
    
    form.append(addButton)
    addButton.addEventListener('click' ,(e)=>{
        e.preventDefault()
        console.log(sellingPrice.value,buyingPrice.value,nameOfStock.value,date.value)
        addDocumentToCollection('trade' ,{
           "sellingPrice": sellingPrice.value,
           "buyingPrice" :buyingPrice.value,
           'name':nameOfStock.value,
           'date' : date.value,
            
        }
        
        )
        emptyElement(document.getElementById('root'))
        
    })

    addTradeDetails.append(form)
    return addTradeDetails

}


function createTableHead(obj){
 
    let tr = document.createElement('tr')

    for (let i = 0 ;i< obj.length ; i++) {
        let td = document.createElement('td')
        td.innerHTML = obj[i]
        tr.append(td)
    }

    return tr
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

function   TradeDetails() {
    

    let tradeTable = document.createElement('table')
    tradeTable.setAttribute('class','tradeTable')
    tradeTable.setAttribute('class','table table-bordered mx-5  mr-5 table-sm  table-responsive')
    
    tradeTable.append( createTableHead(['name' ,'buying price', 'selling price','date']))

   try {
     getDocuments('trade').then(
        obj => {
           
            Object.keys(obj).forEach(key=>{
             console.log(obj[key])
                tradeTable.append(createTableRow([obj[key]['name'] ,obj[key]['buyingPrice'], obj[key]['sellingPrice'] , obj[key]['date']]))
            })
            emptyElement(document.getElementsByClassName('tradeTable'))
            
        }
     )
   }
   catch {
    tradeTable.append(createTableRow([' ' ,' ', ' ']))
   }
   
 return tradeTable
}

export function  ViewTradeDetails(){

    
    let TradeDetail = document.createElement('div')
    let title = document.createElement('p')
    title.innerHTML = 'Trade   Details '
    title.setAttribute('class','shadow-sm p-3 mb-5 bg-body rounded')
    title.classList.add('mx-5')
    title.classList.add('mt-3')
    TradeDetail.append(title)
     
    let showButton = document.createElement('button')
    showButton.innerHTML = 'show trade details'
    showButton.setAttribute('class','btn mx-3  btn-outline-dark')

    showButton.addEventListener('click' , ()=>{
   
        
        TradeDetail.append(TradeDetails())
       
      

    })
    TradeDetail.append(showButton)
    return TradeDetail
}

async function drawChartDB() {
    // Set Data
     let dataAndAmount = [ 
        
        ['date' , 'buy price'],
       

    
    ]

    
    await getDocuments('trade').then(
           obj => {
              
               Object.keys(obj).forEach(key=>{
                dataAndAmount.push([ obj[key]['date']  , parseInt(obj[key]['buyingPrice']) ] )
               })
               
           }
        )
     
      if (dataAndAmount.length ==  1) {
        showErrorMessage('add data then graph will shown')
      }
   


    let data = google.visualization.arrayToDataTable(dataAndAmount);
    // Set Options
    var options = {
       title: 'date and buying price',
      hAxis: {title: 'date'},
      vAxis: {title: 'amount in rupees'},
       legend: 'none'
    };
    // Draw
    let chart = new google.visualization.ScatterChart(document.getElementById('chart'));
    chart.draw(data, options);
}

async function drawChartPB() {
    // Set Date
     let dataAndAmount = [ 
        
        ['selling Price' , 'buy price'],
       

    
    ]

    
    await getDocuments('trade').then(
           obj => {
              
               Object.keys(obj).forEach(key=>{
                dataAndAmount.push([ obj[key]['sellingPrice']  , parseInt(obj[key]['buyingPrice']) ] )
               })
               
           }
        )
     
      if (dataAndAmount.length ==  1) {
        showErrorMessage('add data then graph will shown')
      }
   


    let data = google.visualization.arrayToDataTable(dataAndAmount);
    // Set Options
    var options = {
       title: 'selling price and buying price',
      hAxis: {title: 'amount in rupees'},
      vAxis: {title: 'amount in rupees'},
       legend: 'none'
    };
    // Draw
    let chart = new google.visualization.ScatterChart(document.getElementById('chart'));
    chart.draw(data, options);
}

export function monthlyCharts(){

    let charts = document.createElement('div')

    let  showGraph = document.createElement('button')
    showGraph.innerHTML = 'show graph'
    showGraph.setAttribute('class' ,'btn mt-3  mx-3 btn-outline-dark')
    charts.append(showGraph)
    showGraph.addEventListener('click' ,()=> {
    let graph = document.createElement('div')
    graph.setAttribute('id','chart')
    charts.append(graph)
    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(drawChartDB);
    //google.charts.setOnLoadCallback(drawChartPB);

 })
    
 
    return charts
}
