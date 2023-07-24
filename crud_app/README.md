Node.js - read_write
================

Why?
----

Writing `write_file(folder_name,file_name)` and then  reading_file`read_file(folder_name,file_name)` enclosed in `try/catch` blocks became annoying.



Installation
------------

    npm install 



API
---

* [`write_file(folder_name,file_name)`](#folder_name,file_name)
* [`read_file(folder_name,file_name)`](#folder_name,file_name)

----


### read_file(folder_name,file_name)
```
js
const {read_file} from "read_file"

let data = read_file("./data/data.json")

//data info is json format 

console.log(data)

```

### write_file(folder_name,file_name)
```
js
const {write_file} from "read_file"

write_file("./database/data.json",data)


```



