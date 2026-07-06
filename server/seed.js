const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./models/posts");
const Story = require("./models/stories");
const Suggestion= require("./models/suggestion")
const posts = [
  {
    username: "arshad",
    profileImage: "https://i.pravatar.cc/150",
    postImage: "https://picsum.photos/600",
    caption: "Nature at its best!!!!",
    likes: 5,
    comments: [
      {
        username: "john_doe",
        text: "Awesome picture!"
      },
      {
        username: "emma",
        text: "Beautiful ❤️"
      }
    ]
  },
  {
    username: "arshad",
    profileImage: "https://i.pravatar.cc/150?img=1",
    postImage: "https://picsum.photos/601",
    caption: "Enjoying the weather ☀️",
    likes: 8,
    comments: [
      {
        username: "partha",
        text: "Super bro 🔥"
      },
      {
        username: "rohit",
        text: "Amazing 😍"
      }
    ]
  }
];

const stories = [
  {
    username: "arshad",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    username: "john_doe",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    username: "emma",
    image: "https://i.pravatar.cc/150?img=3"
  }
];
const suggestions = [
  {
    username: "john_doe",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    username: "emma",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    username: "alex",
    image: "https://i.pravatar.cc/150?img=6"
  },
  {
    
    username: "jason",
    image: "https://i.pravatar.cc/150?img=8"
  },
  {
    
    username: "partha",
    image: "https://i.pravatar.cc/150?img=7"
  },
  {
    
    username: "rohith",
    profileImage: "https://i.pravatar.cc/150?img=9"
  },
  {
    
    username: "mameyyy",
    image: "https://i.pravatar.cc/150?img=11"
  },
];
async function seedDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected");
        await Post.deleteMany({});
        await Story.deleteMany({});
        await Suggestion.deleteMany({});
        console.log("old data removed");
        await Post.insertMany(posts);
        await Story.insertMany(stories);
        await Suggestion.insertMany(suggestions);
        console.log("database seeded succesfully");
        process.exit();
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}
seedDB();