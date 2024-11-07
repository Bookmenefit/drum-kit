
//document.querySelector("button").addEventListener("click", handleClick)

//function handleClick (){   
//    alert("ปุ่มกด")
//}

// Anonymous Function => Arrow Function
//document.querySelectorAll("button")[1].addEventListener("click", () => alert("ปุ่ม a ถูกกด")   )


        document.addEventListener("keydown", function(event) {
            var keyPressed = event.key;
            playSound(keyPressed);
        });
        function playSound(key) {
            switch (key) {
                case 'w':
                    var audio = new Audio('sounds/tom-1.mp3');
                    audio.play();
                    break;
                case 'a':
                    var audio = new Audio('sounds/tom-2.mp3');
                    audio.play();
                    break;
                case 's':
                    var audio = new Audio('sounds/tom-3.mp3');
                    audio.play();
                    break;
                case 'd':
                    var audio = new Audio('sounds/tom-4.mp3');
                    audio.play();
                    break;
                case 'j':
                    var audio = new Audio('sounds/crash.mp3');
                    audio.play();
                    break;
                case 'k':
                    var audio = new Audio('sounds/kick-bass.mp3');
                    audio.play();
                    break;
                case 'l':
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
                default:
                    console.log("ไม่มีเสียงสำหรับคีย์นี้");
            }
        }

    for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            var b = this.innerHTML;
            playSound(b);
        });
    }
