
(()=>{
class CommonNavBar extends HTMLElement {


    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
             <div class="mil-menu-frame">
            <!-- frame clone -->
            <div class="mil-frame-top">
                <a href="/" class="mil-logo">Sauti.</a>
                <div class="mil-menu-btn">
                    <span></span>
                </div>
            </div>
            <!-- frame clone end -->
            <div class="container">
                <div class="mil-menu-content">
                    <div class="row">
                        <div class="col-xl-5">

                            <nav class="mil-main-menu" id="swupMenu">
                                <ul>
                                    <li class="mil-has-children mil-active">
                                        <a href="/">Home</a>
                                        <!-- <ul>
                                            <li><a href="home-1.html">Landing page</a></li>
                                            <li><a href="home-2.html">Personal</a></li>
                                            <li><a href="portfolio-3.html">Portfolio slider</a></li>
                                        </ul> -->
                                    </li>
                                    <li class="mil-has-children">
                                        <a href="/portfolio">Portfolio</a>
                                        <!-- <ul>
                                            <li><a href="portfolio-1.html">Grid type 1</a></li>
                                            <li><a href="portfolio-2.html">Grid type 2</a></li>
                                            <li><a href="portfolio-3.html">Slider</a></li>
                                        </ul> -->
                                    </li>
                                    <li class="mil-has-children">
                                        <a href="/services.html">Services</a>
                                        <!-- <ul>
                                            <li><a href="services.html">Services List</a></li>
                                            <li><a href="service.html">Single service</a></li>
                                        </ul> -->
                                    </li>
                                    <li class="mil-has-children">
                                        <a href="/blog">Blog</a>
                                        <!-- <ul>
                                            <li><a href="blog.html">Blog List</a></li>
                                            <li><a href="publication.html">Publication</a></li>
                                        </ul> -->
                                    </li>

                                    <li class="mil-has-children">
                                        <a href="/contact">Contact</a>
                                        <!-- <ul>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="404.html">404</a></li>
                                        </ul> -->
                                    </li>


                                </ul>
                            </nav>

                        </div>
                        <div class="col-xl-7">

                            <div class="mil-menu-right-frame">
                                <div class="mil-animation-in">
                                    <div class="mil-animation-frame">
                                        <div class="mil-animation mil-position-1 mil-scale" data-value-1="2"
                                            data-value-2="2"></div>
                                    </div>
                                </div>
                                <div class="mil-menu-right">
                                    <div class="row">
                                        <div class="col-lg-8 mil-mb-60">

                                            <h6 class="mil-muted mil-mb-30">Projects</h6>

                                            <ul class="mil-menu-list">
                                                <li><a href="/portfolio" class="mil-light-soft">Gorrilla Hills Eco
                                                        Lodge</a></li>
                                                <li><a href="/portfolio" class="mil-light-soft">Gorilla Valley Lodge</a></li>
                                                <li><a href="/portfolio" class="mil-light-soft">Mountain View Hotel</a>
                                                </li>
                                                <li><a href="/portfolio" class="mil-light-soft">Ambala Clothing</a></li>
                                                <li><a href="/portfolio" class="mil-light-soft">Sisters Bridal</a></li>
                                                <li><a href="/portfolio" class="mil-light-soft">Fontis Residence Hotel</a></li>
                                                <li><a href="/portfolio" class="mil-light-soft">Farm Resorts Uganda</a></li>
                                                <!-- <li><a href="/portfolio" class="mil-light-soft"></a></li> -->

                                            </ul>

                                        </div>
                                        <div class="col-lg-4 mil-mb-60">

                                            <h6 class="mil-muted mil-mb-30">Useful links</h6>

                                            <ul class="mil-menu-list">
                                                <li><a href="./privacy.html" class="mil-light-soft">Privacy Policy</a>
                                                </li>
                                                <!-- <li><a href="#." class="mil-light-soft">Terms and conditions</a></li>
                                                <li><a href="#." class="mil-light-soft">Cookie Policy</a></li>
                                                <li><a href="#." class="mil-light-soft">Careers</a></li> -->
                                            </ul>

                                        </div>
                                    </div>
                                    <div class="mil-divider mil-mb-60"></div>
                                    <div class="row justify-content-between">

                                        <div class="col-lg-4 mil-mb-60">

                                            <h6 class="mil-muted mil-mb-30">Uganda</h6>

                                            <p class="mil-light-soft mil-up">Nakawa
                                            <span class="mil-no-wrap"> +256776007962</span>
                                            <span class="mil-no-wrap"> +256741936179</span>

                                            </p>

                                        </div>
                                        <div class="col-lg-4 mil-mb-60">

                                            <h6 class="mil-muted mil-mb-30">Innovation hub</h6>

                                            <p class="mil-light-soft">Kampala, Uganda, Nakawa New Portbell Road</span></p>

                                        </div> 
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("sauti-nav",CommonNavBar)

})()

