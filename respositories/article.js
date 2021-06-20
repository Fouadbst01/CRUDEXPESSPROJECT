const { Article} = require('../models')

module.exports ={
    getAllArtticleIdCreatDat(){
        return Article.findAll({attributes:['id','createdAt'],raw:true});
    },
    getAllartcile(){
        return Article.findAll({raw:true})
    },
    getArticle(id){
        return Article.findAll({
            where:{
              id:idu
            },
            raw:true
          });
    }
}
