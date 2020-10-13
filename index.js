const express = require('express');
const app = express();
const db = require("./db");

app.use(express.json()) //->request body

// ROUTE//
// get all data
    app.get("/siswa",async (req,res)=>{
        try {
            console.log(req.params);
            const allSiswa = await db.query("SELECT * FROM siswa");
            res.json(allSiswa.rows);
        } catch (err) {
            console.error(err.message)
        }
    });

// get id data
    app.get("/siswa/:id",async (req,res)=>{
        const {id} = req.params;
        try {
            const getSiswa = await db.query("SELECT * FROM siswa WHERE id_siswa = $1",[id]);
            res.json(getSiswa.rows[0]);
        } catch (err) {
            console.error(err.message)
        }
    });

// create data
    app.post("/siswa",async (req,res)=>{
        try {
            // console
            console.log(req.body);

            // 
            const {nama_siswa} = req.body;
            const newSiswa = await db.query("INSERT INTO siswa (nama_siswa) VALUES ($1) RETURNING *",[nama_siswa]);
            res.json(newSiswa.rows[0]);
        } catch (err) {
            console.error(err.message);
        }
    });

// update data
    app.put("/siswa/:id",async (req,res)=>{
        try {
            const {id} = req.params;
            const {nama_siswa} = req.body;
            const updateSiswa = await db.query("UPDATE siswa SET nama_siswa = $1 WHERE id_siswa = $2",[nama_siswa,id]);
            res.json("data siswa berhasil di update.");
        } catch (err) {
            console.error(err.message)
        }
    });

// delete data
    app.delete("/siswa/:id",async (req,res)=>{
        try {
            const {id} = req.params;
            const deleteSiswa = await db.query("DELETE FROM siswa WHERE id_siswa = $1",[id]);
            res.json("data siswa berhasil di delete.");
        } catch (err) {
            console.error(err.message)
        }
    })


app.listen(5000, () => console.log('listening pn port 5000'));