import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

// const port = 4000

const randomUser = {
  "statusCode": 200,
  "data": {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Dhruv",
      "last": "Manjunath"
    },
    "location": {
      "street": {
        "number": 9005,
        "name": "Rajaji Salai"
      },
      "city": "Ichalkaranji",
      "state": "Nagaland",
      "country": "India",
      "postcode": 10883,
      "coordinates": {
        "latitude": "-20.9739",
        "longitude": "0.3789"
      },
      "timezone": {
        "offset": "0:00",
        "description": "Western Europe Time, London, Lisbon, Casablanca"
      }
    },
    "email": "dhruv.manjunath@example.com",
    "login": {
      "uuid": "65f4e02c-43fc-49fc-80d5-d3e9a8c3bc1e",
      "username": "angrygoose509",
      "password": "tequila",
      "salt": "HuTJIiDa",
      "md5": "ec05a74dc9b15e0b53b54a1ea611f8fe",
      "sha1": "4f74108ffc9bd0fb84f8e1a476b49288bda54333",
      "sha256": "d356f560d1dc613d03d7c949cc327394eec36d1ba2ad27d0ebbe8f224fbda9b3"
    },
    "dob": {
      "date": "1951-01-22T01:54:10.192Z",
      "age": 72
    },
    "registered": {
      "date": "2013-09-18T05:57:08.071Z",
      "age": 9
    },
    "phone": "9825493639",
    "cell": "9741493043",
    "id": 259,
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/2.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
    },
    "nat": "IN"
  },
  "message": "Random user fetched successfully",
  "success": true
}

app.get("/",(req,res) => {
    res.send("hey coder your server is ready")
})

app.get("/hey",(req,res) => {
    res.send("hey whatsupp")
})

app.get("/login",(req,res) => {
    res.send("<h1>Login to your gmail acc</h1>")
})

app.get("/user",(req,res) => {
    res.json(randomUser)
})

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`)
})