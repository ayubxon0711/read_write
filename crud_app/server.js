import  fs from "fs"
import  path from "path"

export function read_file(folder_name,file_name) {
try {
    return JSON.parse(fs.readFileSync(path.join(path.join(process.cwd(),folder_name,file_name))))
}
catch (err){
    console.log('err read_file ' + err.message)
}
}
export function write_file(folder_name,file_name,data) {
    try {
        fs.writeFileSync(path.join(path.join(process.cwd(),folder_name,file_name)),JSON.stringify(data,null,4))
    }
    catch (err){
        console.log("eror wtire file " +err.message)
    }
}