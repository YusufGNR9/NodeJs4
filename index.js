const { log } = require('console');
const fs = require('fs');

//DOSYA OLUSTURUP VERİLERİ İÇİNE YAZMA

// fs.writeFile("employees.json",'{"name": "Employee 1 Name", "salary" : "2000"}', 'utf-8',(err) => {
//     if(err) console.log(err);
//     console.log("Dosya oluşturulup veriler içine yazıldı!")
// });


//DOSYADAN OKUMA İŞLEMİ GERÇEKLEŞTİRİDL

// fs.readFile("employees.json", 'utf-8', (err, data) =>{
//     if(err) console.log(err);
//     console.log(data);
//     console.log("dosyadan okuma başarılı");
// });


//DOSYA GÜNCELLEME İŞLEMİ YAPALIM

// fs.appendFile('employees.json', '\n{"name:"employee 2 name" ,"salary":5000}', (err) => {
//     if(err) console.log(err);
//     console.log("veriler güncellendi");
// });


fs.unlink("employees.json", (err) => {
    if(err) console.log(err);
    console.log("dosya silme işlemi başarıyla gerçekleştirildi");
});