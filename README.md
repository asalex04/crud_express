# crud_express

This repository is created as an educational project

db.books.insertMany([  
{  
title: "title_1",
description: "description_1",
authors: "authors_1"  
},  
{  
title: "title_2",
description: "description_2",
authors: "authors_2"  
}  
])

db.books.find( { title: "title_2" } )

db.books.updateOne(
{ _id: 2 },
{ $set: { description: "description_3", authors: "authors_3" } }
)