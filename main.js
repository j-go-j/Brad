var myImage = document.querySelector('img');

myImage.onmouseup = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/Brad_Strong_Man-removebg.png') {
      myImage.setAttribute ('src','Images/Screaming-Brad-2018-removebg.png');
    } else {
      myImage.setAttribute ('src','Images/Brad_Strong_Man-removebg.png');
    }
}
/*

$( '#myId' ).on( 'mouseup', function() {
	// do something
} );

$( myImage ).attribute( 'src', 'new src' );*/