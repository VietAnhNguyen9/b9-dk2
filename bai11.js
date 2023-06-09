let thunhap = +prompt('Thu nhập');
let tienthue1 = thunhap*1/10;
let tienthue2 = thunhap*1/5;
if ((thunhap>0)&&(thunhap<=10000000)){
    alert('Thuế thu nhập cá nhân của bạn là ' + tienthue1);
}else if(thunhap>10000000){
    alert('Thuế thu nhập cá nhân của bạn là ' + tienthue2);
}else{
    alert('Con đỗ nghèo khỉ');
}