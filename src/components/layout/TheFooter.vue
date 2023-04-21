<template>
    <section class="footer ">
	<div class="footer-mid">
		<div class="container">
			<div class="row">
				<div class="col-xl-3 me-auto col-sm-8">
					<div class="footer-logo mb-3">
						<!-- <img src="assets/images/logo-white.png" alt="" class="img-fluid"> -->
                        <h5>Tailor Campus</h5>
					</div>
					<div class="widget footer-widget mb-5 mb-lg-0">				
						<p>Tailor Campus is e-learning platform for online courses
							education websites support multiple courses</p>
					</div>
				</div>

				<div class="col-xl-2 col-sm-4">
					<div class="footer-widget mb-5 mb-lg-0">
						<h5 class="widget-title">Explore</h5>
						<ul class="list-unstyled footer-links">
							<li><a href="#" >About us</a></li>
							<li><a href="#">Contact us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Support</a></li>
						</ul>
					</div>
				</div>

				<div class="col-xl-2 col-sm-4">
					<div class="footer-widget mb-5 mb-lg-0">
						<h5 class="widget-title ">Categories</h5>
						<ul class="list-unstyled footer-links">
							<li><a href="#">SEO Business</a></li>
							<li><a href="#">Digital Marketing</a></li>
							<li><a href="#">Graphic Design</a></li>
							<li><a href="#">Social Marketing</a></li>
						</ul>
					</div>
				</div>


				<div class="col-xl-2 col-sm-4">
					<div class="footer-widget mb-5 mb-lg-0">
						<h5 class="widget-title">Address</h5>
						<ul class="list-unstyled footer-links">
							<li><h6 class="text-white">Phone</h6><a href="#">+1234 567 8910</a></li>
							<li><h6 class="text-white">Email</h6><a href="#">support@tcampus.com</a></li>
						</ul>
						<div class="footer-socials mt-4">
							<a href="#"><i class="fab fa-facebook-f"></i></a>
							<a href="#"><i class="fab fa-twitter"></i></a>
							<a href="#"><i class="fab fa-linkedin-in"></i></a>
							<a href="#"><i class="fab fa-pinterest"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="footer-btm">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-xl-6 col-sm-12 col-lg-6">
					<p class="mb-0 copyright text-sm-center text-lg-start">© 2023 Tailor Campus All rights reserved by <a href="#" rel="nofollow">MoSalah</a> </p>
				</div>
				
			</div>
		</div>
	</div>
</section>
</template>


<style scoped>
.footer {
  background: #120F2D;
  padding: 4rem;
  margin-top: 10rem;
}

h5 {
    font-family: var(--theme-heading-font);
    text-transform: capitalize;
    font-size: 18px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: 600;
}

.footer .footer-links a {
    font-family: var(--theme-secondary-font);
    color: rgba(255, 255, 255, 0.7);
    position: relative;
    /* padding-bottom: 1rem; */
    margin-bottom: 5px;
    transition: all .4s ease;
}


.footer-links li {
    margin-bottom: 10px;
}

.footer .footer-links a:hover {
    color: #fff;

}

.test {
    margin-bottom: 5px;
    padding-bottom: 10px;
}

.footer-widget p , .copyright{
    font-family: var(--theme-secondary-font);
    color: rgba(255, 255, 255, 0.7);
}

.footer-socials {
    display: flex;
    justify-content: space-around;
}
</style>