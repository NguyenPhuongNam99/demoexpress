module.exports ={
    multipleMongoose: function(mongoose){
        return mongoose.map((mongose)=>mongoose.toObject())
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}