<template>
     <div class="course-sidebar">

      <div class="course-thumb">
        <img src="../../assets/vuejs2.png" alt="course-img" />
      </div>

      <div class="price-header">
        <h2 class="course-price">$120.00 <span>$150</span></h2>
        <span class="course-price-badge">39% off</span>
      </div>
   

    <!-- <div class="course-details"> -->
      <ul class="course-sidebar-list">
        <li>
          <span><i class="fa-solid fa-sliders"></i> Level </span>
          Beginnner
        </li>

        <li>
          <span><i class="fas fa-play-circle"></i> Lectures</span>
          2
        </li>
        <li>
          <span><i class="far fa-user"></i> Students</span>
          20
        </li>
        <li>
          <span><i class="far fa-clock"></i> Duration</span>
          6 hours
        </li>
        <li>
          <span><i class="fa-solid fa-globe"></i> Language</span>
          English
        </li>

        <li>
          <span><i class="far fa-calendar"></i> Updated</span>
          October 15, 2022
        </li>
      </ul>
    <!-- </div> -->
    <div class="buy-btn">
            <button class="enroll-course-btn ">
                <i class="fa-solid fa-cart-shopping"></i> Enroll Course 
            </button>
        </div>

        <div class="course-material">
            <h4>Material Includes</h4>
            <ul class="course-meterial-list">
                <li><i class="fa-solid fa-arrow-right-long"></i> Videos</li>
                <li><i class="fa-solid fa-arrow-right-long"></i> Files For Development</li>
                <li><i class="fa-solid fa-arrow-right-long"></i> Documentation Files</li>
            </ul>
        </div>
     </div>
</template>

<style scoped>

.course-sidebar {
  display: flex;
  flex-direction: column;
  box-shadow: 0 30px 50px 0 rgba(51, 51, 51, 0.08);
  padding: 30px 35px 30px;
  border: 1px solid rgba(1, 90, 189, 0.1);
  max-height: 900px;
}

.course-thumb {
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden; /*to make img take same border-radius*/
  max-width: 294px;
}
.course-thumb img{
object-fit: cover;
width: 100%;
}

.price-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

 .course-price {
    font-size: 2.1rem;
    line-height: 34px;
    color: var(--theme-primary-color);
    font-weight: 700;
}

.course-price span {
    color: #777;
    font-weight: 600;
    margin-left: 6px;
    text-decoration: line-through;
    font-size: 24px;
    line-height: 24px;
}
.course-price-badge {
    border: 2px solid #eee;
    border-radius: 5px;
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;
    padding: 0 10px;
    text-align: center;
    color: var(--theme-secondary-color);
    margin-left: 10px;
    background: #eee;
}


.course-sidebar-list {
    margin: 20px 0px;
    padding-left: 0px;
    font-family: var(--theme-secondary-font);
    font-weight: 400;
    color: var(--theme-text-color);

}

.course-sidebar-list li {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
}

.enroll-course-btn {
  width: 100%;
  border-color: var(--theme-secondary-color);
  color: #fff;
  background: var(--theme-secondary-color);
  font-weight: 600;
  position: relative;
  text-transform: capitalize;
  padding: .8rem 1.8rem;
  font-size: 1rem;
  border: 2px solid transparent;
  transition: all 0.6s ease;
}

.enroll-course-btn:hover {
  background: var(--theme-primary-color);
  border-color: var(--theme-primary-color);
}
.course-material {
  margin-top: 2.5rem;
}

.course-material li {
    padding: 5px 0;
    color: var(--theme-text-color);
    font-family: var(--theme-secondary-font);
    font-size: 1rem;
}
</style>