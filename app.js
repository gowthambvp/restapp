const express= require('express')
const mysql=require('mysql')
const http =require('http')

const app=express()

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'restdb'
})

app.get('/items',(req,res)=>{  
    connection.query('select * from items',(err,rows,fields)=>{
        console.log("Fetched users Successfully")
        res.json(rows)
    })
})

app.get('/',(req,res)=>{
    console.log("Responding to root route")
    res.send("Hello from Roooot...")
})

app.get('/users',(req,res)=>{
    console.log("Responding to root route")
    res.send("Hello from Roooot...Users")
})

//const host="192.168.43.109";
const server=http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
})

app.listen(3000,()=>{
    console.log("Server is up and listening 3000..")
})
