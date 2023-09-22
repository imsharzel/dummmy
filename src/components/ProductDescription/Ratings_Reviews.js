import React from "react";
import "./Ratings_Reviews.css";
import StarIcon from "@mui/icons-material/Star";
import { ratings } from "../../data";
import { reviews } from "../../data";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function Ratings_Reviews() {
  return (
    <div className="containers">
      <h3>Ratings & Reviews</h3>
      <div className="ratings-box">
        <div className="total-ratings">
          <p className="rating_number">4.4</p>
          <div className="ratings-details">
            <div>
              <StarIcon style={{ color: "gold" }} />
              <StarIcon style={{ color: "gold" }} />
              <StarIcon style={{ color: "gold" }} />
              <StarIcon style={{ color: "gold" }} />
              <StarIcon style={{ color: "gold" }} />
            </div>
            <p className="ratings-totals">4.4 rating of 750 reviews</p>
            <button>write a review</button>
          </div>
        </div>
        <div className="ratings-graph">
          <h4>Ratings</h4>
          {ratings.map((rate, index) => (
            <li key={index}>
              <div className="ratings_5">
                <div className="ratings_5_details">
                  <span>{rate.width}%</span>
                  <span>{rate.reviews} reviews</span>
                </div>
                <div className="ratings_5_n">
                  {Array.from({ length: rate.noOfRate }, (_, i) => (
                    <StarIcon
                      key={i}
                      style={{ color: "gold", margin: "0 2px" }}
                    />
                  ))}
                </div>
              </div>
              <div className="ratings-color-div">
                <p style={{ width: `${rate.width}%` }}></p>
              </div>
            </li>
          ))}
        </div>
      </div>
      <div className="reviews-containers">
        <h3>Reviews</h3>
        <div className="reviews-filter-containers">
          <div className="reviews-filter">
            <select name="filter" id="filter">
              <option value="most-recent">Most Recent</option>
              <option value="most-ratings">Most Ratings</option>
            </select>
          </div>
          <div className="reviews-ratings">
            <select name="ratings" id="ratings">
              <option value="ratings">Ratings</option>
              <option value="reviews">Reviews</option>
            </select>
          </div>
        </div>
      </div>
      <div className="reviews-info-containers">
        {reviews.map((review, index) => (
          <div key={index} className="review-detail">
            <div className="review-name-containers">
              <div className="review-logo">
                <img src={review.img} />
                <div className="review-name-time">
                  <h4>{review.name}</h4>
                  <span>{review.time}</span>
                </div>
              </div>
              <div className="review-ratings">
                {Array.from({ length: review.rating }, (_, i) => (
                  <StarIcon
                    key={i}
                    style={{ color: "gold", margin: "0 2px" }}
                  />
                ))}
              </div>
            </div>
            <div className="review-desc">{review.review}</div>
            <div className="review-reaction">
              <ThumbUpOutlinedIcon style={{cursor:"pointer"}}/>
              <span>{review.likes}</span>
              <ThumbDownAltOutlinedIcon style={{cursor:"pointer"}}/>
              <span>{review.comments}</span>
              <ChatBubbleOutlineOutlinedIcon style={{cursor:"pointer"}}/>
              <span>{review.share}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ratings_Reviews;
