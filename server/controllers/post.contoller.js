const dbConnection = require('../db')


class PostController{

    async createPost(req,res)
    {
        const {title, user_id, details, post_type} = req.body
        dbConnection.query(`CALL add_thread('${title}', ${user_id}, '${details}', ${post_type})`, function (error, results, fields) {
            if (error) throw error;
        });

        dbConnection.query(`SELECT * FROM post WHERE user_account_id = ${user_id}`, function (error, results, fields) {
            if (error) throw error;
            res.json(results[0])
        });
    }

    async deletePost(req,res)
    {
        
    }
    
    async updatePost(req,res)
    {
       

    }
    
    async getPost(req,res)
    {
        
    }
    
    async getPosts(req,res)
    {
        
    }


}

module.exports = new PostController();