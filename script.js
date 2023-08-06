document.getElementById('price-pair-1').addEventListener("click",()=>{
    document.getElementById('bottom-1').style.display="flex";
    document.getElementById('bottom-2').style.display="none";
    document.getElementById('bottom-3').style.display="none";
    document.getElementById('btn-1').style.backgroundColor="green"
    document.getElementById('btn-2').style.backgroundColor="transparent"
    document.getElementById('btn-3').style.backgroundColor="transparent"
    
    document.getElementById('price-pair-1').style.backgroundColor="#F4FBF9";
    document.getElementById('price-pair-1').style.border="1px solid green";
    document.getElementById('price-pair-2').style.backgroundColor="transparent";
    document.getElementById('price-pair-3').style.backgroundColor="transparent";
    document.getElementById('price-pair-2').style.border="1px solid #C8C8C8";
    document.getElementById('price-pair-3').style.border="1px solid #C8C8C8";
})

document.getElementById('price-pair-2').addEventListener("click",()=>{
    document.getElementById('bottom-2').style.display="flex";
    document.getElementById('bottom-1').style.display="none";
    document.getElementById('bottom-3').style.display="none";
    document.getElementById('btn-2').style.backgroundColor="green"
    document.getElementById('btn-1').style.backgroundColor="transparent"
    document.getElementById('btn-3').style.backgroundColor="transparent"

    document.getElementById('price-pair-2').style.backgroundColor="#F4FBF9";
    document.getElementById('price-pair-2').style.border="1px solid green";
    document.getElementById('price-pair-1').style.backgroundColor="transparent";
    document.getElementById('price-pair-3').style.backgroundColor="transparent";
    document.getElementById('price-pair-1').style.border="1px solid #C8C8C8";
    document.getElementById('price-pair-3').style.border="1px solid #C8C8C8";
    
})

document.getElementById('price-pair-3').addEventListener("click",()=>{
    document.getElementById('bottom-3').style.display="flex";
    document.getElementById('bottom-2').style.display="none";
    document.getElementById('bottom-1').style.display="none";
    document.getElementById('btn-3').style.backgroundColor="green"
    document.getElementById('btn-2').style.backgroundColor="transparent"
    document.getElementById('btn-1').style.backgroundColor="transparent"

    document.getElementById('price-pair-3').style.backgroundColor="#F4FBF9";
    document.getElementById('price-pair-3').style.border="1px solid green";
    document.getElementById('price-pair-1').style.backgroundColor="transparent";
    document.getElementById('price-pair-2').style.backgroundColor="transparent";
    document.getElementById('price-pair-1').style.border="1px solid #C8C8C8";
    document.getElementById('price-pair-2').style.border="1px solid #C8C8C8";
})