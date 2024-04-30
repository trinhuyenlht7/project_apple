Vue.component('card_sp',{
    props: ['sp'],
    template : `<div class=" col-6 col-md-3 card_sp">
    <div class="card_body">
            <img :src="sp.hinh" style="width : 100%" alt="">
        <div class="if_sp">
            <h4>{{sp.ten}}</h4><br>
            <p>thongtin.sp</p>
        </div>
        <div class="btn_buy">
            <button type="button" class="btn btn-primary">Mua</button>
            <button type="button" class="btn btn-primary">Thêm</button>
        </div>
    </div>
</div>`
})