ttl index delete doc auto after 300ms ex otp delete after 300ms

db.otp.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 300 }
);

<!--        What does $set, $push, $pull, $inc do?          -->

db.users.updateOne(
  { email: "a@gmail.com" },
  { $set: { name: "John", age: 25 } }
)

db.users.updateOne(
  { email: "a@gmail.com" },
  { $push: { hobbies: "cricket" } }
)

db.users.updateOne(
  { email: "a@gmail.com" },
  { $pull: { hobbies: "cricket" } }
)

db.users.updateOne(
  { email: "a@gmail.com" },
  { $inc: { loginCount: 1 } }
)


<!-- populate and select  -->

Post.find()
  .select("title content user")
  .populate("user", "name email");



<!-- lean  -->
## lean fkt js obj return kart hidden properties nay return kart ex save() tracks
## maji fkt data in js plane obj 

const user = await User.findOne({ email: "a@gmail.com" }).lean();

console.log(user);


<!--  save() -->

const user = await User.findById(id);
user.name = "John";
await user.save();

 ## ✔ What happens internally?

 ##         Runs validation

 ##         Runs pre('save') / post('save') middleware

 ##         Runs getters/setters

 ##         Only updates changed fields

 ##         Converts data using schema rules


<!--  vertual   -->

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

## db madi first name ani last ahe 
##  pan mala full name pahije find()  kelyv without fullname db madi store karta 

##  john doe find() kelyv pan db madi fkt first and last name hai seperate tar virtual use hot


<!-- custome validator -->

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return v.length >= 3;
      },
      message: "Username must be at least 3 characters"
    }
  }
});


<!-- insert many -->

const val = [
  { name : "spi" }
  { name : "spi2" }
  { name : "spi3" }
]

user.insertMany( val )


<!-- capped collection -->

db.createCollection("logs", {
  capped: true,
  size: 1024 * 1024,  // 1MB
  max: 5000           // optional: max number of documents
});
