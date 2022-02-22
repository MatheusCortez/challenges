const { v4: uuidv4 } = require('uuid');
const mock= require('./mock/mook.json')


const date = new Date()
const dateDayMonthYear=`${date.getDate()} de ${(date.toLocaleString('pt-br',{month:'long'}))} de ${date.getFullYear()}`;
const dateHoursMinuts= `${date.getHours()}:${date.getMinutes()} `

const formattedDate=`${dateDayMonthYear}  ${dateHoursMinuts} ` 

const book={
    requestId:uuidv4(),
    executedAt:formattedDate,
    data:mock

}


module.exports=book