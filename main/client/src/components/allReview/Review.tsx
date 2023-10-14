import React, { useEffect } from "react";
import OneReview from "../OneReview/OneReview";
import { AppDispatch, RootState } from "../../redux/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview } from "../../redux/reviewSlice";



interface objtype{
  content:string,
  rating:string,
  HelpCount:number,
  DocReply:string,
  createdAt:Date

}
const AllReview = () => {
  const dispatch: AppDispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.review.data);
  useEffect(() => {
    dispatch(fetchReview());
  }, [dispatch]);

  return (
    <div>
      {reviews.map((review: objtype) => {
        return <OneReview review={review} />;
      })}
    </div>
  );
};

export default AllReview;
