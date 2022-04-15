var btn = document.getElementById('button-dis');
var num = 0;
transitionButton = () =>{
    btn.style.transition = 'all linear .5s'
    btn.style.top = Math.floor(Math.random() * (200 - (-200) + 1) ) + ((-200)) + 'px'
    btn.style.left = Math.floor(Math.random() * (500 - (-500) + 1) ) + ((-500)) + 'px'
    num++;
    if(num == 3)
        transitionThreeTimes()
    if(num == 5)
    transitionFiveTimes()
}
agreeButton = () =>{
    Swal.fire(
        'Cam on da dong y',
        'Minh bat dau hen ho nha!!!',
        'success'
      )
}
transitionThreeTimes = () =>{
    Swal.fire({
        position: 'top-end',
        icon: 'danger',
        title: 'Tai sao khong nhan dong y ???',
        showConfirmButton: false,
        timer: 3000
      })
}
transitionFiveTimes = () =>{
    Swal.fire({
        position: 'top-end',
        icon: 'danger',
        title: 'Nhan  dong y di !!!',
        showConfirmButton: false,
        timer: 3000
      })
}