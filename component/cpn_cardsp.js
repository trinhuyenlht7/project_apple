Vue.component('card_sp', {
    props: ['obj'],
    template: `<div class="card_body">
        <img :src="obj.hinh" style="width : 100%" alt="">
        <div class="if_sp">
            <h4>{{obj.tensp}}</h4>
            <div class="gia_giam">
                <h4>{{obj.giadagiam}}</h4><span>vnđ</span>
            </div>                                  
            <div class="gia">
                <p>{{obj.giachuagiam}}</p><span>vnđ</span>
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
        iphone: [
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 11 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 12 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 13 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 14 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },{
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 15 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 16 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 17 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 18 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 19 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'Iphone 20 promax',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
        ],

        mac : [
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'MACBOOK PRO',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'MACBOOK PRO',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'MACBOOK PRO',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
            {
                hinh: 'https://placehold.co/250x300',
                tensp: 'MACBOOK PRO',
                giadagiam : '19.000.000',
                giachuagiam : '30.000.000'
            },
        ]
    },
    method: {

    }

}
)