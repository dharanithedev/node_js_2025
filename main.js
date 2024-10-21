import express from 'express';

const app = express();

const PORT = 6969;

// R - To Read
app.get('/',(req, res) => {
    res.send({
        "name" : "Asha",
        "age" : 25,
        "city" : "Bangalore"
    });
})

// C - To Create
app.post('/',() => {});

// U - To Update
app.put('/',() => {});

// D - To Delete
app.delete('/',() => {});


app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});