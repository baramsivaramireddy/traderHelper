import { 
    addDocumentToCollection , 
    getDocuments
   } from './database.js'

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
           "sellingPrice": sellingPrice.value,
           "buyingPrice" :buyingPrice.value,
           'name':nameOfStock.value,
           'date' : date.value,
            
        }
        )
    })

    addTradeDetails.append(form)
    return addTradeDetails

}


function createTableHead(obj){
 
    let th = document.createElement('th')

    for (let i = 0 ;i< obj.length ; i++) {
        let td = document.createElement('td')
        td.innerHTML = obj[i]
        th.append(td)
    }

    return th
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
    
    tradeTable.append( createTableHead(['name' ,'buying price', 'selling price','date']))

   try {
     getDocuments('trade').then(
        obj => {
           
            Object.keys(obj).forEach(key=>{
                console.log(obj[key])
                tradeTable.append(createTableRow([obj[key]['name'] ,obj[key]['buyingPrice'], obj[key]['sellingPrice'] , obj[key]['date']]))
            })
            
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
    TradeDetail.append(title)
     
    let showButton = document.createElement('button')
    showButton.innerHTML = 'show trade details'

    showButton.addEventListener('click' , ()=>{
        TradeDetail.append(TradeDetails())
    })
    TradeDetail.append(showButton)
    return TradeDetail
}

async function drawChart() {
    // Set Data
     let dataAndAmount = [ 
        
        ['Price', 'Size'],
    
    ]

    
    await getDocuments('trade').then(
           obj => {
              
               Object.keys(obj).forEach(key=>{
                dataAndAmount.push([ obj[key]['date']  , parseInt(obj[key]['buyingPrice']) ] )
               })
               
           }
        )
     
      
   

        
 console.log(dataAndAmount)
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

export function monthlyCharts(){
    let graph = document.createElement('div')
    graph.setAttribute('id','chart')

    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);

 
    return graph
}
