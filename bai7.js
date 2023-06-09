let a=+prompt();
let b=+prompt();
let c=+prompt();
let denta=b*b-4*a*c;
if (a==0){
    if (b==0){
        if (c==0){
            alert('Phương trình vô số nghiệm');
        }else{
            alert('Phương trình vô nghiệm');
        }
    }else{
        alert('Phương trình có nghiệm duy nhất '+(-b/a));
    }
}else if(a!=0){
    if (denta==0){
        alert('Phương trình có nghiệm kép là ' + -b/2*a);
    }else if (denta>0){
        alert('Phương trình có 2 nghiệm phân biệt là ' +(-b+Math.sqrt(denta)/2*a) + ' và' + (-b-Math.sqrt(denta)/2*a));
    }else{
        alert('Phương trình vô nghiệm')
    }
}