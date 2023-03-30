'use-strict'
const {exportData2Excel} = require('./constants/excel_handler')
const path = exportData2Excel();
path.then(v=>{
    console.log(`folder path '${v}'`)
})