const { Tag } = require('../models')

module.exports = {
    getTagsid(){
        return Tag.findAll({attributes:['id'],raw:true});
    },
}