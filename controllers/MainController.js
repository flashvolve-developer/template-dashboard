const path = require('path');
module.exports = class MainController {
    static async home (req,res){
        res.sendFile(path.resolve(__dirname, '..', 'views','index.html'));
    }
}