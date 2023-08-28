const getAllProducts=(req,res)=>{
    const products=[
        {name:"milk",price:"20"},
        {name:"bread",price:"30"},
        {name:"soap",price:"40"},
        {name:"porridge",price:"50"},
    ]
    return res.status(200).json({products});
}

export  {getAllProducts};