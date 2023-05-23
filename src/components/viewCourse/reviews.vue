
   <template>
    <div class="reviews">
      <h2 class="reviews-heading">Comments</h2>
      <ul class="reviews-list">
        <li v-for="(review, index) in reviews" :key="index" class="review-item">
          <div class="comment-wrapper">
            <div class="profile-img">
              <!-- <img :src="review.profileImg" alt="Profile Image" class="img" /> -->
              <img src="../../assets/author.jpg" alt="">
            </div>

            <div class="comment-content">
              <p class="comment">{{ review.comment }}</p>
              <p class="author">By: {{ review.author }}</p>
            </div>
          </div>
          <hr class="divider" />
        </li>
      </ul>
  
      <h2 class="add-review-heading">Add a Review</h2>
      <form @submit.prevent="submitReview" class="add-review-form">

        <!-- <div class="form-group">
          <label for="author" class="label">Author:</label>
          <input type="text" id="author" v-model="newReview.author" class="input" required />
        </div> -->

        <div class="form-group">
          <label for="comment" class="label">Comment:</label>
          <textarea id="comment" v-model="newReview.comment" class="textarea" required></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <style>

  .reviews-heading {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .reviews-list {
    list-style: none;
    padding: 0;
  }
  
  .review-item {
    margin-bottom: 20px;
  }
  
  .comment-wrapper {
    display: flex;
    align-items: center;
  }
  
  .profile-img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  .profile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .comment-content {
    flex-grow: 1;
  }
  
  .comment {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .author {
    font-size: 14px;
    color: #888;
  }
  
  .divider {
    border: none;
    border-top: 1px solid #ccc;
    margin: 10px 0;
  }
  
  .add-review-heading {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .add-review-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .label {
    font-size: 16px;
    font-weight: bold;
  }
  
  .input,
  .textarea {
    width: 100%;
    padding: 5px;
    font-size: 16px;
  }
  
  .submit-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        reviews: [
          { author: "John Doe", comment: "Great course!", profileImg: "https://example.com/profile1.jpg" },
          { author: "Jane Smith", comment: "Highly recommended!", profileImg: "https://example.com/profile2.jpg" }
        ],
        newReview: {
          author: "Abdallah Ragab",
          comment: ""
        }
      };
    },
    methods: {
      submitReview() {
        this.reviews.push({ author: this.newReview.author, comment: this.newReview.comment, profileImg: "https://example.com/profile3.jpg" });
        this.newReview.author = "";
        this.newReview.comment = "";
      }
    }
  };
  </script>
  