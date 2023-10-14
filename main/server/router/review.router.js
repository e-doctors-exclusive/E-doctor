const express = require ("express")
 const reviewRouter = express.Router()

const {getAllReview,addReview,deleteReview,updateReview}  = require ("../controller/review.controller.js")

reviewRouter.get("/review/getAllReview",getAllReview)
reviewRouter.post("/review/addReview",addReview)
reviewRouter.delete("/review/deleteReview/:id",deleteReview) 
reviewRouter.put("/review/updateReview/:id",updateReview)


module.exports	= reviewRouter
 
