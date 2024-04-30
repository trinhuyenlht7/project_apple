Vue.component('navigation', {
    // props: ['nav'],
    template: `<!-- top navigation -->
    <div class="topnav bg-dark">
        <div class="nav_logo">
            <a href="#"><img :src="https://placehold.co/250x75" alt="logo"></a>
        </div>
        <div class="nav_icon">
            <div class="icon-item">
                <form action="#" method="get">
                    <input id="search" class="search" placeholder="Bạn muốn tìm sản phẩm nào ạ ?" type="text">
                    <button type="button" id="search" name="search" class="bg-dark"><i class="fa fa-search"
                            aria-hidden="true"></i></button>
                </form>
            </div>
            <div class="icon-item btn_icon ">
                <a href="https://www.facebook.com/kid.trinh.3/" target="_blank">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </div>
            <div class="icon-item btn_icon">
                <a href="https://www.instagram.com/ruou_chuoihot/" target="_blank">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
    <!-- last navigation -->
    <div class="lastnav bg-dark">
        <div class="container">
            <div class="list_product ">
                <div class="product">
                    <a class="product_item" href="#">MAC</a>
                    <div class="dropdown"> 
                        <div class="row_dropdown">
                            <div class="column-dropdown">
                                <h3>MACBOOK PRO</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                            <div class="column-dropdown">
                                <h3>MACBOOK AIR</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a class="product_item" href="#">IPHONE</a>
                    <div class="dropdown"> 
                        <div class="row_dropdown">
                            <div class="column-dropdown">
                                <h3>MACBOOK PRO</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                            <div class="column-dropdown">
                                <h3>MACBOOK AIR</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                            <div class="column-dropdown">
                                <h3>MACBOOK PRO</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                            <div class="column-dropdown">
                                <h3>MACBOOK AIR</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a class="product_item" href="#">IPAD</a>
                    <div class="dropdown"> 
                        <div class="row_dropdown">
                            <div class="column-dropdown">
                                <h3>MACBOOK PRO</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                            <div class="column-dropdown">
                                <h3>MACBOOK AIR</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a class="product_item" href="#">APPLE WATCH</a>
                    <div class="dropdown"> 
                        <div class="row_dropdown">
                            <div class="column-dropdown">
                                <h3>MACBOOK PRO</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                            <div class="column-dropdown">
                                <h3>MACBOOK AIR</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a class="product_item" href="#">AIR POD</a>
                    <div class="dropdown"> 
                        <div class="row_dropdown">
                            <div class="column-dropdown">
                                <h3>MACBOOK PRO</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                            <div class="column-dropdown">
                                <h3>MACBOOK AIR</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <a class="product_item" href="#">OTHER</a>
                    <div class="dropdown"> 
                        <div class="row_dropdown">
                            <div class="column-dropdown">
                                <h3>MACBOOK PRO</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                            <div class="column-dropdown">
                                <h3>MACBOOK AIR</h3>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                                <a href="#">Trịnh Uyên</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="last_nav_icon">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>`
})

var vm = new Vue({
    el: '#app',
    data: {
        xinchao: 'xin chào các bạn'
    },
    methods:{

    }
})