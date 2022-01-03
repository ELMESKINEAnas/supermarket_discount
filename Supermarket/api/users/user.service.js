const pool = require("../../config/database");



module.exports = {
    create:(data,callback)=>{
        pool.query(`insert into admin_centre(nom, prenom, email, password) values (?,?,?,?)
        `,
        [
            data.nom,
            data.prenom,
            data.email,
            data.password
        ],
        (error, results, fields)=>{
            if(error){
            return    callback(error);
            }
            return callback(null, results);
        }
        );
    },
    getUsers: callback => {

        pool.query(
            `select * from admin_centre`,
            [],
            (error, results, fields)=>{
                if(error){
                   return callback(error);
                }
                return callback(null,results)
            }
        )
    },
    getUserByUserId : (id, callback)=>{
        pool.query(
            `select * from admin_centre where id = ?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results[0])
            }
        )
    },
    getUsersByUserEmail : (email, callback)=>{
        pool.query(
            `select * from admin_centre where email = ?`,
            [email],
            (error,results,fields)=>{
                if(error){
                    callback(error);
                }
                return callback(null,results[0]);
            }
        )
    },
    getAdminGenerale: (email,callback)=>{
        pool.query(
            `select * from admin_generale where email = ?`,
            [email],
            (error,results,fields)=>{
                if(error){
                    callback(error);
                }
                return callback(null,results[0]);
            }
        )
    }
}