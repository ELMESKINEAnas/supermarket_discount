const { createPromos, createRespRayon, deletePromo, getAllPromos, getAllRespRayons } = require("./adminCentre.service");

const { genSaltSync, hashSync } = require("bcrypt");

const createlog = require ("../logs/logs.controllers");
const { decode } = require("jsonwebtoken");

module.exports = {
    createRespRayon: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        createRespRayon(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
              success: false,
              message: "Database connection error",
            });
        }
        return res.status(200).json({
            success: true,
            data: results,
        });
    });
    },
    createPromo: (req, res) => {
    const body = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = decode(token);
    const id = decoded.result.id;
    
    let pourcentage =+ body.pourcentage;
    body.fidelite = pourcentage*10;
    console.log(decoded.result);

        createPromos(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: ",
                });
            }
            return res.status(200).json({
                success: true,
                data: results,
            });
        });
    },
    deletePromo : (req , res ) => {
          const data = req.body;
          deletePromo(data,(err, results) => {
              if(err) {
                  console.log(err);
                  return;
              }
              if(!results) {
                  return res.json({
                      success : false,
                      message : "Record Not Found"
                  })
              }
              return res.json({
                  succes : true,
                  message : "Promo deleted successfully"
              })
          }) 
    },
    getAllPromos : (req, res) => {
        getAllPromos((err, results) => {
            if(err){
                console.log(err);
                returrn;
            }
            return res.json({
                success: true,
                data: results
            })
        })
    },
    getAllRespRayons : (req, res) => {
        getAllRespRayons((err, results) => {
            if(err){
                console.log(err);
                returrn;
            }
            return res.json({
                success: true,
                data: results
            })
        })
    },

};