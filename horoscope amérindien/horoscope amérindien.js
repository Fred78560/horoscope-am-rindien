exports.action = function(data){

JarvisAskMe('tu es né quand ...',function(result){
    console.log("donc vous êtes né le : "+result.trim())

   
function getpet (result) {

var mois = ""
    if (result.search('janvier')    >-1){ var mois="1"}
    if (result.search('février')    >-1){ var mois="2"}
    if (result.search('mars')       >-1){ var mois="3"}
    if (result.search('avril')      >-1){ var mois="4"}
    if (result.search('mai')        >-1){ var mois="5"}
    if (result.search('juin')       >-1){ var mois="6"}
    if (result.search('juillet')    >-1){ var mois="7"}
    if (result.search('aout')       >-1){ var mois="8"}
    if (result.search('septembre')  >-1){ var mois="9"}
    if (result.search('octobre')    >-1){ var mois="10"}
    if (result.search('novembre')   >-1){ var mois="11"}
    if (result.search('décembre')   >-1){ var mois="12"}
if(mois=="")    {console.log(mois);return false}

   var day=result.replace(new RegExp('[^0-9]', 'ig'),"")//on garde que les chiffres
console.log('on garde ceci : '+day) 
   //var mois=result.replace(/Janvier/gi, '1').replace(/Février/gi, '2').replace(/Mars/, '3').replace(/Avril/, '4').replace(/Mai/, '5').replace(/Juin/, '6').replace(/Juillet/, '7').replace(/Août/, '8').replace(/Septembre/, '9').replace(/Octobre/, '10').replace(/Novembre/, '11').replace(/Décembre/, '12');
//console.log('on garde ceci : '+mois) 
if(day.length<1){JarvisIASpeech("je n'ai pas compris");return false}

            console.log(mois);
            console.log("jour : "+day+" mois "+mois);


 var msg = "";{
if( ((mois==1)&&(day>=6))  || ((mois==2)&& (day<=1)) ) {var msg="un Ours"}
if( ((mois==2)&&(day>=2))  || ((mois==3)&& (day<=3)) ) {var msg="un Orignal !"}
if( ((mois==3)&&(day>=4))  || ((mois==3)&& (day<=31))) {var msg="une Marmotte !"}
if( ((mois==4)&&(day>=1))  || ((mois==4)&& (day<=28))) {var msg="un Lièvre !"}
if( ((mois==4)&&(day>=29)) || ((mois==5)&& (day<=26))) {var msg="une Oie blanche !"}
if( ((mois==5)&&(day>=27)) || ((mois==6)&& (day<=23))) {var msg="un Saumon !"}
if( ((mois==6)&&(day>=24)) || ((mois==7)&& (day<=22))) {var msg="un Chevreuil !"}
if( ((mois==7)&&(day>=23)) || ((mois==8)&& (day<=16))) {var msg="un Aigle !"}
if( ((mois==8)&&(day>=17)) || ((mois==9)&& (day<=16))) {var msg="une Tortue !"}
if( ((mois==9)&&(day>=17)) || ((mois==10)&& (day<=14))) {var msg="une Bernache !"}
if( ((mois==10)&&(day>=15)) || ((mois==11)&& (day<=11))) {var msg="un Castor !"}
if( ((mois==11)&&(day>=12)) || ((mois==12)&& (day<=9))) {var msg="un Renard !"}
if( ((mois==12)&&(day>=10)) || ((mois==1)&& (day<=5))) {var msg="une Loutre !"}
 

            
            console.log(msg);
        JarvisIASpeech("Alors... dans l'astrologie Amérindienne tu es "+msg);
}
}
  getpet (result)
return  
})//fin ask
}