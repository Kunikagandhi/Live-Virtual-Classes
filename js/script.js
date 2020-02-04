

function Calculate()
{
       /*if (document.test.english.value=="") 
       {alert("Please Enter English Marks"); return false;}
       else if(document.test.gk.value=="")
       {alert("Please Enter GK Marks");return false; }
       else if (document.test.maths.value=="")
       {alert("Please Enter Maths Marks");return false;}
    */
    
    
        var val1 = parseInt(document.forms["test"]["english"].value,10);
        var val2 = parseInt(document.forms["test"]["gk"].value,10);
        var val3 = parseInt(document.forms["test"]["maths"].value,10);
    if (val1>100 || val2>100 || val3>100 || val1<0 || val2<0 || val3<0 || Number.isNaN(val1) || Number.isNaN(val2) || Number.isNaN(val3)) 
    {
        alert("Please enter marks between 0-100");
        location.reload();
        
    }
    else
    {
        var total;
         total= val1 + val2 + val3;
        var percent;
        percent=total/3;
        var high;
        if (val1>val2 && val1>val3)
        high=val1; 
        else if (val2>val1 && val2>val3)
        high=val2;
        else
        high=val3;
        
        document.getElementById("num4").value= total;
        document.getElementById("num5").value= percent;
        document.getElementById("num6").value= high;

    }

}
function set()
{
    location.reload();
}
function load()
{
    window.open("welcome.html","","top=400,left=400,width=300,height=200");
}
function func1()
{
    alert("You cannot edit this feild");
    document.getElementById("id").focus();
}
function myMoveFunction()
{
    alert("Did you like our add?");
}
function rename()
{
    if (check.FName.value=="")
    {
    alert("Please enter the First name first");
    document.getElementById("id").focus();

    }
    
}
function lastfun()
{
    var ans=document.getElementById("select").value;
    var x;
    if (ans=="Cancer")
    {
        x="Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. ";
    }
    else if(ans=="Aries")
    {
        x="Aries folk are born between March 21st and April 20th, and belong to the Fire element of the zodiac (along with Sagittarius and Leo). The Fire sign brigade are the *hooligans* of the stars - bold, brash, passionate, outspoken and likely to act before they think.";
    }
    else if (ans=="Gemini")
    {
        x="Geminis are the liveliest of the Air sign gang - versatile, youthful, curious and fun. They make great company, but they are hard to pin down in any way, so they’re notoriously easier to connect with as friends than partners.";
    }
    else if (ans=="Capricorn")
    {
        x="Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave.";
    }
    else if (ans=="Leo")
    {
        x="Leos are born between July 23 and August 22, and belong to the Fire element of the zodiac (along with Aries and Sagittarius). Fire signs are big, bouncy show-offs with equally big ideas and even bigger hearts. Lovable Leos are famously known for their exuberance, loyalty and self-confidence.";
    }
    document.getElementById("area").value=x;
}
function ankit()
{
    alert("Ahh! Double Click.")
}
function result()
{
    var x = quiz.op.value;
    var y = quiz.op1.value;
    if (x==""||y=="")
    alert("Please attempt both the questions");
    else
    {
    var marks=0;
    if (x=="opt1")
    marks=marks+2;
    if (y=="opt5")
    marks=marks+2;

    if (marks==4)
    alert("Congratulations! You got "+marks+" marks");
    else if (marks==2)
    alert("You got "+marks+" marks for one correct answer.");
    else if (marks==0)
    alert("OOPS! You got "+marks+" marks. Try Again");


    }

}
function hiuser()
{
    var person = prompt("Please enter your name", "");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
}
function vali()
{


    var boxesTicked = 0;
    for (i = document.getElementsByName('c').length - 1; i >= 0; i--) 
    { 
        if (document.getElementsByName('c')[i].checked) 
        { 
            boxesTicked++; 
        } 
    } 
    if (boxesTicked < 1) { 
    alert ("You must select atleast two languages to continue.") 
    return false; 
    } 
    else { 
    alert ("Form submitted successfully") 
    return true; 
    } 




}
function sea()
{
    var n = document.getElementById("xyz").value;
    
    window.open('http://google.com/search?q='+n);

}

function ekor(vali)
{
    var alpha = /^[a-zA-Z]+$/;
    if (!vali.match(alpha)){
        document.getElementById("pehla").innerHTML = "Invalid input, only alphabets";
        return false;

    }
    if (vali.match(alpha))
    {
        document.getElementById("pehla").innerHTML ="";
        return true;
    }
}