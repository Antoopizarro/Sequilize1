const db = require('../database/models');

module.exports = {
    list : (req, res)=>{
        db.Movie.findAll()
            .then((movies) => {
                return res.render('moviesList', {
                    movies
                })
            })
            .catch(error => console.log(error))
    },
    new : (req,res) => {

    },
    recommended : (req,res)=> {

    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => res.render('moviesDetail'), {movie})
            .catch(error => console.log(error))
    }
}