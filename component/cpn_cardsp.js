Vue.component('card_sp', {
    props: ['obj'],
    template: `<div class="card_body">
        <img :src="obj.hinh" style="width : 100%" alt="">
        <div class="if_sp">
            <h4>{{sp.tensp}}</h4>
            <div class="gia_giam">
                <h4>{{giadagiam.obj}}</h4><span>vnđ</span>
            </div>                                  
            <div class="gia">
                <p>{{giachuagiam.obj}}</p><span>vnđ</span>
            </div>
        </div>
        <div class="btn_buy">
            <button type="button" class="btn btn-primary">Mua</button>
            <button type="button" class="btn btn-primary">Thêm</button>
        </div>
    </div>`
})


var vm = new Vue({
    el: '#app',
    data: {
        sanpham_iphone: [
            {
                hinh: 'https://placehold.co/250x300',
                ten: 'Iphone 15 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            }
        ]
    }

}
)