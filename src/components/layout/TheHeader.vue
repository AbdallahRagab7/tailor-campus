<template>
  <section>
   <div class="header-topbar topbar-style-1">
        <div class="container ">
            <div class="row justify-content-between align-items-center">
                <div class="col-xl-8 col-lg-8 col-sm-6">
                   <div class="header-contact text-center text-sm-start text-lg-start">
                        <a href="#" class="">1010 Moon ave, New York, NY US</a>
                   </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-sm-6">
                    <div class="header-socials text-center text-lg-end">
                        <ul class=" list-inline align-items-center">
                            <li class="list-inline-item mx-2"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="list-inline-item mx-2"><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li class="list-inline-item mx-2"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li class="list-inline-item mx-2"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                            <li class="list-inline-item mx-2"><a href="#"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


  </section>
</template>

<style>
.header-topbar {
  background-color: #031f42;
  /* padding: 0.0rem; */

}
.header-contact a {
    text-decoration: none;
      color: #fff;
      font-family: 'Jost';
      font-size: 1rem;
      cursor: pointer;
      position: relative;
      bottom: .1rem;
}
.header-socials {
    position: relative;
    top: .4rem;
}
.topbar-style-1 .header-socials a:hover {
  color: var(--theme-primary-color);
}

</style>
