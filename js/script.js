$(document).ready(function (){

    // Menu open end close functions
    $(".buton1Block").click(function(){
        $(".menu").slideDown(500)
        $("body").css({
            overflow:"hidden"
        })
        $(".menuBlock").addClass("active")
    })
    
    $(".buton2Block").click(function(){
        $(".menu").slideDown(500)
        $("body").css({
            overflow:"hidden"
        })
        $(".menuBlock").addClass("active")
    })

    $('.closeBtn').click(function(){
        $(".menu").slideUp(500)
        $("body").css({
            overflow:"visible "
        })
        $(".menuBlock").removeClass("active")
    })

    $("body").keydown(function(e){
        if(e.which == 27){
            $("body").css({
                overflow:"visible"
            })
            $(".menu").slideUp(500)
           $(".menuBlock").removeClass("active")
        }
    })

    // Skilss animation
    $(document).scroll(function(){
        let x = Math.floor($(this).scrollTop())
        if (x > 1000){
           $(".skil_per").addClass("anim1");
        } else {
            $(".skil_per").removeClass("anim_skil");
            $(".skil_per").removeClass("anim1");
        }
    })

    // Zoom function1
   $(".image_block_item img").click(function (){
       let srcImg = $(this).attr("src")

       $(".sec3_imgZoom_block").css("display", "block");
       $("body").css("overflow", "hidden");

       $(".zomm_block img").attr("src", srcImg)
   })

    $(".zoom_closeBtn i").click(function (){
        $(".sec3_imgZoom_block").css("display", "none");
        $("body").css("overflowY", "scroll");
    })

    // Menu mobile open end close
    $(".mobile_menu_btn").click(function(){
        $(this).toggleClass("clicked");
        $(".mbile_menu").slideToggle()
    })


    // input chek
    let num = 0
    $(".chek_btn").click(function(){
        let nameInpVal = $(".nameInp").val();
        let emailInpVal = $(".emailInp").val();
        let subjectInpVal = $(".seubjectInp").val();
        let textareaVal = $(".textarea").val();
        
        $(".loader").css("opacity", "1");
        
        let int = setInterval(() => {
            num++ 
            if(num > 1){
                 if(nameInpVal == "" || emailInpVal == "" || subjectInpVal == "" ||textareaVal == ""){
                    $(".erorr").css("display", "block")
                    $(".sucses").css("display", "none   ")
                 } else {
                    $(".erorr").css("display", "none")
                    $(".sucses").css("display", "block")

                 }   
                 $(".loader").css("opacity", "0");
                 clearInterval(int)
            }
            // console.log(num)
        }, 1000);
    })

    // top buton
    $(document).scroll(function (){
        let x = parseInt($(document).scrollTop());
        if(x > 15){
            $(".topBtn").css("opacity", "1")
        } else {
            $(".topBtn").css("opacity", "0")
        }
    })

    // Zoom function2
    $(".blogs_img").click(function (){
        let x = $(this).attr('src')

        $(".zoom_block").fadeIn();
        $(".img_zoom").attr("src", x);
        $("body").css("overflow", "hidden");
    })

    $(".blogs_zoom_img_close").click(function (){
        $(".zoom_block").fadeOut();
        $("body").css("overflow", "visible")
    })

    // chek form blogs
    $(".form_btn1").click(function (){
        let textAreaValue = $(".textArea").val();
        let nameInpValue = $(".nameInp").val();
        let emailInpValue = $(".emailInp").val();
        let lastInpValue = $(".lastInp").val()

        if(textAreaValue === "" || nameInpValue === "" || emailInpValue === "" || lastInpValue === ""){
            setTimeout(function (){
                $(".noneDiv").hide()
                $(".eroorBlock").show()
                $(".span1").html(" Please fill the required fields.")
            },500)
        } else {
            let mailReg= /^[^@\s\t\r\n]+@[^\s\t\r\n]+\.[^@\s\t\r\n]/
            if(!mailReg.test(emailInpValue)){
                setTimeout(function (){
                    $(".noneDiv").hide()
                    $(".eroorBlock").show()
                    $(".span1").html(" Please enter a valid email address.")
                }, 500)
            } else {
                alert("Sucsesfull")
            }
        }
    })

    $(".backBtn").click(function (){
        $(".noneDiv").show()
        $(".eroorBlock").hide()
    });



    $(".next").click(function (){
        let activeSlide = $(".activeSlide1");
        var prevSlide = activeSlide.prev();
        console.log(prevSlide)

        activeSlide.removeClass("activeSlide1");
        prevSlide.addClass("activeSlide1");
    })


    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        sliderPerView: 1,
        spaceBetween: 0,
        mousewheel: true,

        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
    })



})
