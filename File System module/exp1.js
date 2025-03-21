const fs = require('fs')  // read file sync
fs.readFileSync('text.txt','utf-8')
console.log ("File Readed Successfully")


fs.writeFileSync('new text.txt' , 'Hello, this is a new file!', 'utf-8') //write file sync
console.log ("File Created successfully")


fs.appendFileSync("new text.txt","\n Here comes the next line... ", "utf-8") // append
console.log("File Appened successfully")


fs.unlinkSync('Sample.txt', 'utf-8')  // unlink (permanent delete)
console.log('File deleted successfully')


fs.renameSync("new text.txt" , "file.txt", "utf-8") // rename
console.log("File renamed successfully")


if (fs.existsSync('file.txt')){                // file exist or not
    console.log('The file exists')
}else{
    console.log("The file does not exist")
}

let stats = fs.statSync("text.txt")   // stat (info)
console.log(stats)
