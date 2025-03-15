# Learning-Backend

/ Means Home Route

## Initialization

- First create a model of the database

- Install mongoose

```
npm i mongoose
```

Create a folder named _**Models**_

Inside in create the models file

E.g:

```
user.model.js
<modelName>.model.js
```

#### By default in mongoDB when the schema is made it modifies the name as give

Modifies User -> users

- By default converts to lower case and adds an 's' at the end of schema name

### Creating First Model

```
const userSchema = new mongoose.Schema(
  userName : String,
)

// More control over data

const userSchema = new mongoose.Schema(
  {
    userName : {
      type : String ,
      required : true,
      unique : true
    }
  }
)
```

Images, pdfs and other files are usually not stored in database in the form of buffers

They are stored in either an folder in server and its public url is used or either third party service is used like _**aws, supabase, cloudinary**_ etc
