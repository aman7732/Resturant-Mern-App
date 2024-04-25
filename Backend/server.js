import app  from "./app.js"

app.listen(process.env.PORT, () =>{
    console.log(`Port is running on that port number is ${process.env.PORT}`);
})