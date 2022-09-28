const db = require('../database/models');

module.exports = {
    list : (req, res)=>{
        db.Movie.findAll()
            .then((movies) => {
                return res.send(movies)
            })
            .catch(error => console.log(error))
    },
    new : (req,res) => {

    },
    recommended : (req,res)=> {

    },
    detail : (req,res) => {
        
    }
}