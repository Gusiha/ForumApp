const dbConnection = require('../db')

class UserContoller
{
    async createUser(req,res)
    {
        
    }

    async deleteUser(req,res)
    {
        const id  = req.params.id
        dbConnection.query(`DELETE FROM user_account WHERE id = ${id}`, function (error, results, fields) {
            if (error) throw error;
        }
        )

        dbConnection.query(`SELECT * FROM user_account WHERE id = ${id}`, function (error, results, fields) {
            if (error) throw error;
            res = (`User[${id}] has been deleted`)})
    }
    
    async updateUser(req,res)
    {
        const {id, first_name, last_name} = req.body 
        dbConnection.query(`UPDATE user_account SET first_name = '${first_name}', last_name = '${last_name}' WHERE id = ${id}`, function (error, results, fields) {
            if (error) throw error;
        });

        dbConnection.query(`SELECT * FROM user_account WHERE id = ${id}`, function (error, results, fields) {
            if (error) throw error;
            res.json(results[0])
        }
        
        )
    }
    
    async getUsers(req,res)
    {
        dbConnection.query('SELECT * FROM user_account', function (error, results, fields) {
            if (error) throw error;
            res.json(results)
        });
    }
    
    async getUser(req,res)
    {
        const id  = req.params.id
        dbConnection.query(`SELECT * FROM user_account WHERE id = ${id}`, function (error, results, fields) {
            if (error) throw error;
            res.json(results[0])
        });
    }

}

module.exports = new UserContoller();