"use strict";

class App{
  constructor(){
    this.suits = [
    {
      "suitid":1,
      "suitname":"Navy Slim suit",
      "suitpic":"img/suit1.jpg",
      "suitdesc":`With suit separates you can choose coat, pant, and/or vest sizes separately for an ideal fit. This fine suit separates coat features a touch of stretch in a slim, trim silhouette.
      `,
      "color":" brown lighten-1",

    },
    {
      "suitid":2,
      "suitname":"Grey Skinny suit",
      "suitpic":"img/suit2.jpg",
      "suitdesc":`Ultra skinny fit
      Includes a single breasted jacket and matching trousers
      Model is 6 foot 1 and wears a 40 jacket and 32R trousers
      67% Polyester, 30% Viscose, 3% Elastane
      Dry clean only.`,
      "color":"grey lighten-1",

    },
    {
      "suitid":3,
      "suitname":"Bright Blue Twill suit",
      "suitpic":"img/suit3.jpg",
      "suitdesc":`Slim fit
      Crafted in a high quality cotton twill fabric, woven for visible texture
      Includes a single breasted jacket and matching trousers
      Model is 6 foot 1 and wears a size 40 suit jacket and 32R trousers
      79% Polyester, 21% Viscose
      Dry clean only`,
      "color":"blue-grey lighten-1",

    },
    {

      "suitid":4,
      "suitname":"Black Velvet suit",
      "suitpic":"img/suit4.jpg",
      "suitdesc":`Skinny fit
      Crafted in a high quality cotton twill fabric, woven for visible texture
      Includes a single breasted jacket and matching trousers
      Model is 6 foot 1 and wears a size 40 suit jacket and 32R trousers
      79% Polyester, 21% Viscose
      Dry clean only`,
      "color":"grey lighten-1",
    },
    {
      "suitid":5,
      "suitname":"Navy wool Skinny suit",
      "suitpic":"img/suit5.jpg",
      "suitdesc":`Skinny fit
      Crafted in warm handle fabric with a birdseye weave for a subtly textured finish
      Includes a single breasted jacket and matching trousers
      48% Wool, 33% Polyester, 10% Acrylic, 5% Nylon, 2% Cotton, 2% Viscose
      Dry clean only`,
      "color":"brown lighten-1",

    },
    {
      "suitid":5,
      "suitname":"Navy Skinny suit",
      "suitpic":"img/sui6.jpg",
      "suitdesc":`Skinny fit
      Crafted in a twill fabric, woven for visible texture
      Includes a single breasted jacket with peak lapel and stitch detailing and matching trousers
      81% Polyester, 18% Viscose, 1% Linen
      Dry clean only`,
      "color":"blue-grey lighten-1",

    },

    ];
    this.pictures =[
    {
      "image":"img/rr.jpg",
      "info":"You are always welcome here. Have a stay",

    },

    ];


    this.manage =[
    {
      "image1":"img/r1.jpg",
      "color":"  brown lighten-4",
      "info1":"View Suits here!!",
      "click":"component.suitslist()",
      "lname":"View Suits Market",

    },
    {
      "image1":"img/r2.jpg",
      "color":"  blue-grey lighten-4",
      "info1":"Additional info about this site.",
      "click":"component.addSuits()",
      "lname":"Add Suits",

    },

    ];



  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

  
  


}

class Component extends App{
  constructor(){

    super();
  }

  suitsdesign(){
    let html = `

    <nav>
    <div class="nav-wrapper blue-grey darken-3">
	<img src="img/logo.png" height="60px">
    <a href="#" onclick="component.suitslist()" class="brand-logo">Suit and Tie</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li>
    <li><a href="#" onclick="component.Home()">Home</a></li>
    <li><a href="#" onclick="component.suitslist()">View Suits</a></li>  
    <li><a href="#" onclick="component.addSuits()">Add Suits</a></li>


    </ul>
    </div>
    </nav>
    </div>

    `;




    html+=`

    <div id="Home"></div>
    <div id="recent"></div>
    <div id="viewSuits"></div>
    <div id="suitslist"></div>
    <div id="addSuits"></div>
    
    <footer class="page-footer   grey darken-2">
    </div>
    </div>
				<center>
					<div class="footer-copyright"> Copyright 2016</div>
					<nav3>All rights Reserved</nav3>
				</center>
    </footer>

    `;

    this.reRender(`
      ${html}

      `,document.getElementById("app"));
    this.recent();    
  }


  AllAboutSuits(){
    let suitname = document.getElementById('suite_2');
    let suitdesc = document.getElementById('suite_3');
    let suitpic = document.getElementById('suite_4');


    let suits = {      
      "suitname": suitname.value,
      "suitdesc": suitdesc.value,
      "suitpic": suitpic.value,


    };


    this.suits.push(suits);

    
    suitname.value = suitdesc.value = suitpic.value = ''; 
  } 



  recent(){

    let html = `



    `;

    for(let i=0;i<this.pictures.length;i++){
      html+=`

      <div class="row">
      <div class="col s12 m12">
      <div class="card ">
      <div class="card-image">
      <img src="${this.pictures[i].image}">
      <span class="card-title">Welcome to Suit and Tie</span>
      </div>
      <div class="card-content">
      <p>${this.pictures[i].info}</p>
      </div>
      <div class="card-action">
      <center> <a href="http://www.topman.com/en/tmuk/category/suits-1950628/mens-suits-140697"">Enter Topman Suit</center></a>
      </div>
      </div>
      </div>
      </div>

      </div>




      `;
    }




    for(let index=0;index<this.manage.length;index++)
    {
      html+=`
      <div class="row">

      <div class="col s6 m6">
      <div class="card ${this.manage[index].color}">
      <div class="card-image">
      <img src="${this.manage[index].image1}">
      </div>
      <div class="card-content">
      <p>${this.manage[index].info1}</p>
      </div>
      <div class="card-action">
      <a href="#"onclick="${this.manage[index].click}">${this.manage[index].lname}</a>
      </div>
      </div>
      </div>

      `;
    }




    html+=`

    `;


    html+=`
    <div class="row">
    `;

    let r = this.suits;
    let count = 0;
    for(let i=(r.length-1);i>=0;i--){
      if(count++ === 6)break;
      html+= `
      <div class="col s12 m4">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${r[i].suitpic}">
      <span class="card-title">${r[i].suitname}</span>
      </div>
      <div class="card-content">
      <p>${r[i].suitdesc}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewSuits(${r[i].suitid})">View Suits here.</a>
      </div>
      </div>
      </div>
      `;
    }

    html += `</div>`;

    this.render(`   
      ${html}
      `,document.getElementById("recent"));
  }

  viewSuits(suitid){
    let r = this.SearchId(suitid);

    let html = `

    <div class="row">       
    <div class="col s12 m12">
    <div class="card ">
    <div class="card-image">
    <img src="${r.suitpic}">
    </div>
    <div class="card-stacked">
    <div class="card-content">
    <h5 class="center-align">${r.suitname}</h5>
    <p>${r.suitdesc}</p>

    </div>
    <div class="card-action small">  
    <div class="center-align">             
    <button onclick="component.deleteSuit(${r.suitid})">Delete Suit</span>
    <button onclick="component.suitslist()">Back to Blackshop</span>
    </div>            
    </div>     
    </div>   

    </div>      
    </div>
    `;

    this.reRender(`   
      ${html}     
      `,document.getElementById("viewSuits"));
    $('#viewSuits').show();
    $('#recent').hide();
    $('#suitslist').hide();
    $('#addSuits').hide();
    $('#Home').hide();
  }

  suitslist(){
    let html = `




    </di>

    <br/>
    <nav>
    <div class="nav-wrapper  white">

    <div class="input-field">       
    <input onkeyup="component.suitInventory(this.value)" id="search" type="search" placeholder="Search" required>


    </div>

    </div>
    </nav>
    <br/>>

    `;

    html += `
    <div class="row" id="suitInventory">
    `;
    let r = this.suits;
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s6 m6">
      <div class="card large hoverable">
      <div class="card-image">
      <img src="${r[i].suitpic}">

      </div>
      <span class="card-title">${r[i].suitname}</span>
      <div class="card-content">
      <p>${r[i].suitdesc}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewSuits(${r[i].suitid})">Details</a>
      </div>
      </div>
      </div>
      `;
    }

    html += `</div>`;

    this.reRender(`
      ${html}
      `,document.getElementById("suitslist"));
    $('#suitslist').show();
    $('#viewSuits').hide();
    $('#recent').hide();
    $('#addSuits').hide();      
    $('#Home').hide();
  }

  suitInventory(suitname){
    let html = ``;
    let r = this.suitSearch(suitname);
    for(let i=0;i<r.length;i++){
      html+= `
      <div class="col s12 m4">
      <div class="card small hoverable">
      <div class="card-image">
      <img src="${r[i].suitpic}">
      <span class="card-title">${r[i].suitname}</span>
      </div>
      <div class="card-content">
      <p>${r[i].suitdesc}</p>

      </div>
      <div class="card-action">
      <a href="#" onclick="component.viewSuits(${r[i].suitid})">More</a>
      </div>
      </div>
      </div>
      `;
    }   
    this.reRender(`
      ${html}
      `,document.getElementById("suitInventory"));
    $('#suitslist').show();
    $('#viewSuits').hide();
    $('#recent').hide();  
    $('#addSuits').hide();
    $('#Home').hide();    
  }

  addSuits(){
    let html = `


    <br>

    <form>
    <div>

    <center><h1>Suits</h1></center>
    <center><img src="img/suiii.jpg"></center>
    <label for="suite_2">  <span>Suit Name:</span><input type="text" id="suite_2"/> </label>
    <label for="suite_4"><span>Suit Pic</span><input type="text" id="suite_4" /> </label>
    <label for="suite_3"><span>Suit Description </span><textarea id="suite_3" class="textarea-field"></textarea> </label>

    <div class="center-align">
    <br><button onclick="component.AllAboutSuits()" class="btn waves-effect waves-light">Save</button></br>
    </div>

    </div>
    </form>
    </br>





    `;

    this.reRender(`
      ${html}
      `,document.getElementById("addSuits"));
    $('#addSuits').show();
    $('#suitslist').hide();
    $('#viewSuits').hide();
    $('#recent').hide();  
    $('#Home').hide();    
  }



  deleteSuit(key){
    let r = this.suits;
    for(let i=0;i<r.length;i++){
      if(r[i].suitid == key){
        this.suits.splice(i,1);
        break;
      }
    }   
    this.suitslist();
  }

  SearchId(suitid){
    let r = this.suits;
    for(let i=0;i<r.length;i++){
      if(suitid==r[i].suitid){
        return r[i];
      }
    }
  } 

  suitSearch(suitname){
    let objects = [];
    let r = this.suits;
    for(let i=0;i<r.length;i++){
      let expr = (r[i].suitname.toUpperCase().indexOf(suitname.toUpperCase()) > -1);
      if(expr){
        objects.push(r[i]);
      }
    }
    return objects;
  }


  Home(){
    let html=`


    `;
    this.reRender(`
      ${html}
      `,document.getElementById("addSuits"));
    $('#addSuits').hide();
    $('#suitslist').hide();
    $('#viewSuits').hide();
    $('#recent').show(); 
    $('#Home').hide();  



  }


} 
let component = new Component();
component.suitsdesign();
