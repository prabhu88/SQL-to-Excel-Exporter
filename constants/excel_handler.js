var Excel = require('exceljs')
const {Promise} = require('bluebird')
const path = require('path')
const fs = require('fs')
const {GetAllUsers} = require('./sql_handler')
const exportData2Excel = () => {
    return new Promise(function(resolve,reject){
        try{
            GetAllUsers().then(v => {
                if(!v.error){
                    var workbook = new Excel.Workbook();
                    workbook.creator = 'sql-to-excel-exporter';
                    workbook.lastModifiedBy = 's.prabhu';
                    workbook.created = new Date();
                    workbook.modified = new Date();
                    workbook.lastPrinted = new Date();
                    const sheet = workbook.addWorksheet('User List',{
                        pageSetup:{paperSize: 9, orientation:'landscape'}
                    });
                    let iStartRow = 2;
                    v.data.forEach(user => {
                        var oSheetRow = sheet.getRow(iStartRow)
                        let colIndex = 1;
                        Object.keys(user).forEach(key=>{
                            oSheetRow.getCell(colIndex).value = user[key]
                            colIndex++
                        })                    
                        oSheetRow.commit();
                        iStartRow++
                    });
                    const myDate = new Date().toISOString().slice(0, 10)+'-'+new Date().getHours()+'-'+new Date().getMinutes()
                    let folder_path = path.join(__dirname, "/Downloaded_Report/")
                    if(!fs.existsSync(folder_path)){
                        fs.mkdirSync(folder_path,(err)=>{
                            if (err) {                            
                                reject(err)
                            }
                        })
                    }
                    folder_path = path.join(folder_path,'users_report_dated_'+myDate+'_.xlsx')
                    workbook.xlsx.writeFile(folder_path).then(function(){
                        resolve(folder_path)
                    })
                }            
            })
        }
        catch(err){
            reject(err)
        }
    })
}
module.exports =  {
    exportData2Excel : exportData2Excel
}
