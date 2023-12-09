import { User } from "../Model/userSchema.js";

export const createUser = async(req, res) => {
    const { name , email, password, image } = req.body;

    const newUser = await new User({
        name,
        email,
        password,
        image,
    });

    await newUser.save()
   
   res.status(201).json({
        success: true,
        message: 'User has been created',
        user : newUser
   }); 
}

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});

    res.status(200).json({
      status: true,
      message: "Users found",
      users: allUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};



export const getUser = async(req,res) => {
    const { id } = req.params;

    const UserData = await User.findById(id);

    if (!UserData) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    res.status(201).json({
        status: true,
        message: "User found",
        user : UserData,
    });
}

export const updateUser  = async ( req, res) =>{
    const { id } = req.params;
    const { name , email , password} = req.body;
    const getUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );

    res.status(201).json({
        success: true,
        message: "User Updated Successfully"
    })
}

export const deleteUser = async(req, res) => {
    const { id } = req.params;
    
    const deluser = await User.findByIdAndDelete(id)

    if(!deluser){
        return res.status(404).json({
        success: false,
        message: "Food Item not found",
        });
    }

    res.status(201).json({
       success: true,
       message: `User ${deluser.name} deleted`,
     });
}