$(document).ready(function(){
    $("#formRecu").validetta({
        bubblePosition: 'bottom',
        bubbleGapTop: 10,
        bubbleGapLeft: -5,
        onValid:function(evnt){
            evnt.preventDefault();
            var tipoAlerts = new Array("red","blue");
            var iconos = new Array("fas fa-exclamation","fas fa-check fa-2x");
            $.ajax({
                method:"POST",
                url:"./../pages/recu.php",
                data:$("#formRecu").serialize(),
                cache:false,
                success:function(respAX){
                    var AX = JSON.parse(respAX);
                    $.alert({
                        title:"PostKarte",
                        content: AX.msj,
                        icon:iconos[AX.val],
                        type:tipoAlerts[AX.val],
                        onDestroy:function(){
                            if(AX.val == 1){
                                window.location.replace("./../pages/login.php");
                            }
                        }
                    });
                }
            });
        }
    });
});