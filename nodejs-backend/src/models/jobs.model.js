// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'jobs';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       companyname: { type: String, required: true, unique: true },
       addrescompany: { type: String, required: true },
       emailcompany: { type: String, required: true },
       phonenumber: { type: Number, unique: true },
       joboffer: { type: Boolean, required: true, default: true },
       numofstaff: { type: Number, required: true, unique: false, default: 1 },

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