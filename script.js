

/* ROUE */

.wheel-folder{
margin-top:25px;
}

.wheel-card{
padding:30px;
border-radius:35px;
background:rgba(255,255,255,0.05);
}

.wheel-wrapper{
display:flex;
justify-content:center;
position:relative;
}

.wheel-pointer{
position:absolute;
top:-10px;
width:22px;
height:22px;
background:orange;
border-radius:50%;
z-index:5;
box-shadow:0 0 20px orange;
}

.wheel{
width:300px;
height:300px;
border-radius:50%;
border:10px solid orange;
position:relative;
background:
conic-gradient(
#101010 0deg 60deg,
#1a1a1a 60deg 120deg,
#242424 120deg 180deg,
#2e2e2e 180deg 240deg,
#383838 240deg 300deg,
#444 300deg 360deg
);
transition:5s cubic-bezier(.17,.67,.19,.99);
box-shadow:0 0 30px rgba(255,140,0,0.4);
}

.wheel-label{
position:absolute;
font-size:16px;
font-weight:bold;
color:white;
}

.l1{
top:25px;
left:115px;
}

.l2{
top:70px;
right:35px;
}

.l3{
top:150px;
right:10px;
}

.l4{
bottom:70px;
right:30px;
}

.l5{
bottom:25px;
left:105px;
}

.l6{
top:150px;
left:10px;
}

.wheel-center{
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:90px;
height:90px;
border-radius:50%;
background:orange;
display:flex;
justify-content:center;
align-items:center;
font-size:24px;
font-weight:bold;
box-shadow:0 0 20px orange;
}

.spin-btn{
width:100%;
margin-top:25px;
height:60px;
border:none;
border-radius:22px;
background:linear-gradient(
135deg,
#ffb300,
#ff6600
);
font-size:20px;
font-weight:bold;
color:white;
}

/* MARCHÉ */

.market-page{
margin-top:24px;
display:grid;
gap:20px;
}

.market-folder{
padding:25px;
border-radius:30px;
background:rgba(255,255,255,0.05);
}

.market-folder h2{
margin-bottom:12px;
font-size:24px;
}

.market-folder p{
opacity:0.8;
line-height:1.5;
}

.partner-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:15px;
margin-top:20px;
}

.partner-card{
padding:18px;
border-radius:22px;
background:rgba(255,255,255,0.04);
text-decoration:none;
color:white;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
transition:0.3s;
}

.partner-card:hover{
transform:translateY(-5px);
}

.partner-logo{
width:65px;
height:65px;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
font-size:28px;
font-weight:bold;
}

.admob{
background:#4285f4;
}

.unity{
background:#222;
}

.applovin{
background:#ff6600;
}

.simple-buttons{
display:grid;
gap:14px;
margin-top:20px;
}

.simple-buttons button{
height:58px;
border:none;
border-radius:18px;
background:rgba(255,140,0,0.08);
color:white;
font-size:16px;
font-weight:bold;
}

/* PROFIL */

.profile-page{
margin-top:24px;
}

.profile-avatar{
width:130px;
height:130px;
border-radius:50%;
background:rgba(255,140,0,0.08);
display:flex;
justify-content:center;
align-items:center;
font-size:40px;
margin:auto;
margin-bottom:20px;
border:2px dashed orange;
}

.profile-page h2{
text-align:center;
margin-bottom:25px;
font-size:28px;
}

.profile-form{
padding:25px;
border-radius:30px;
background:rgba(255,255,255,0.05);
display:flex;
flex-direction:column;
gap:15px;
}

.profile-form input{
height:58px;
border:none;
border-radius:18px;
padding:0 18px;
font-size:16px;
outline:none;
}

.verify-btn{
height:58px;
border:none;
border-radius:18px;
background:#1aa8ff;
color:white;
font-size:17px;
font-weight:bold;
}

.save-btn{
height:58px;
border:none;
border-radius:18px;
background:linear-gradient(
135deg,
#ffb300,
#ff6600
);
color:white;
font-size:18px;
font-weight:bold;
}

/* NAVIGATION */

.bottom-nav{
position:fixed;
bottom:15px;
left:15px;
right:15px;
height:100px;
border-radius:35px;
background:#0c1224;
display:flex;
justify-content:space-around;
align-items:center;
z-index:50;
box-shadow:0 0 25px rgba(255,140,0,0.12);
}

.nav-item{
background:none;
border:none;
display:flex;
flex-direction:column;
align-items:center;
gap:5px;
color:white;
font-size:13px;
}

.nav-item i{
font-size:24px;
}

.nav-item.active{
color:orange;
}

.center-nav{
width:105px;
height:105px;
border:none;
border-radius:50%;
background:linear-gradient(
135deg,
#ffb300,
#ff6600
);
margin-top:-60px;
display:flex;
justify-content:center;
align-items:center;
box-shadow:0 0 30px rgba(255,140,0,0.4);
overflow:hidden;
}

.center-circle{
width:88%;
height:88%;
border-radius:50%;
background:#091224;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
padding:10px;
}

.bcc-scroll{
white-space:nowrap;
animation:bccscroll 10s linear infinite;
font-size:13px;
font-weight:bold;
color:white;
}

@keyframes bccscroll{

0%{
transform:translateX(100%);
}

100%{
transform:translateX(-100%);
}

}

/* POPUP */

.popup{
position:fixed;
bottom:130px;
left:50%;
transform:translateX(-50%);
background:#111827;
padding:18px 26px;
border-radius:20px;
font-size:16px;
opacity:0;
pointer-events:none;
transition:0.3s;
z-index:100;
text-align:center;
max-width:85%;
}

.popup.show{
opacity:1;
}

/* RESPONSIVE */

@media(max-width:480px){

.balance-main h1{
font-size:65px;
}

.balance-main span{
font-size:30px;
}

.cfa-live h2{
font-size:30px;
}

.action-circle.modern{
width:68px;
height:68px;
font-size:22px;
}

.wheel{
width:260px;
height:260px;
}

.bottom-nav{
height:92px;
}

.center-nav{
width:95px;
height:95px;
}

  }
