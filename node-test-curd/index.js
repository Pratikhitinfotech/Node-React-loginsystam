let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let bodyParser = require("body-parser");
const authRouter = require("./routers/authUser")


const app = express();

// const url = `mongodb+srv://pratikhitinfotech:Pratik123S@cluster0.rvbjrik.mongodb.net/node_reactcrud`;

// const connectionParams = {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true
// }

// mongoose.connect(url, connectionParams).then(() => {
//     console.log('Connected to the database ')
// }).catch((err) => {
//     console.error(`Error connecting to the database. n${err}`);
// })


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://pratikhitinfotech:Pratik123S@cluster0.rvbjrik.mongodb.net/node_reactcrud');
    console.log('Connected to the database ')
}


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/api/auth', authRouter)

let  port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log('Server starte on port 2024');
})