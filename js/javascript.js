
// function startdeadlinefunc() {
//    var n = $('.c').attr('id');
//    var c = n;
//    $('.c').text(c);
//    myVar = setInterval(function () {
//        c++
//        if (c <= 120) {
//            $('.c').html("زمان باقیمانده :  " + c + " ثانیه ");
//        }
//        if (c == 0) {
//            $('.c').text('0');
//        }

//    }, 1000);
// }

var swh=0;

function sc(){
console.log(pageYOffset);
var x=pageYOffset;
if(swh==0)
if(x>1950){
    swh=1;
   var h1 = $('.h').attr('id');
   var h = h1;
   $('.h').text(h);
   myVar = setInterval(function () {
       h++
       if (h <= 129) {
           $('.h').html( h+"K" );
       }
       if (h == 0) {
           $('.h').text('0');
       }

   }, 7);
//////////////////////////////////////////////////////////////////////
   var y1 = $('.y').attr('id');
   var y = y1;
   $('.y').text(y);
   myVar = setInterval(function () {
       y++
       if (y <= 10) {
           $('.y').html(y+"+" );
       }
       if (h == 0) {
           $('.y').text('0');
       }

   }, 70);

   //////////////////////////////////////////////////////////////////

   var m1 = $('.m').attr('id');
   var m = m1;
   $('.m').text(m);
   myVar = setInterval(function () {
       m++
       if (m <= 121) {
           $('.m').html(m+"+" );
       }
       if (m == 0) {
           $('.m').text('0');
       }

   }, 7);

   //////////////////////////////////////////////////////////////////

   var p1 = $('.p').attr('id');
   var p = p1;
   $('.p').text(p);
   myVar = setInterval(function () {
       p++
       if (p <= 150) {
           $('.p').html(p+"+" );
       }
       if (p == 0) {
           $('.p').text('0');
       }

   },6);

}
}

///////////////////////////////////