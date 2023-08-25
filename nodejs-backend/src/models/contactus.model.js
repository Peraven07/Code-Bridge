// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'contactus';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       firstname: { type: String,required: true},
       lastname: { type: String,required: true},
       contactnumber: { type: String,required: true},
       emailaddress: { type: String,required: true},
       company: { type: String,required: true},
       position: { type: String},
       message: { type: String,required: true},

    }
          // ~cb-read-end~
          , 
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };