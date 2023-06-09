let a =+prompt('Nhập a');
let b =+prompt('Nhập b');
if (a==0){
    if (b==0){
        alert('Phương trình vô số nghiệm');
    }else{
        alert('Phương trình vô nghiệm');
    }
}else{
    alert('Phương trình có nghiệm duy nhất '+(-b/a));
}
