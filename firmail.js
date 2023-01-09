
num_loc = "0";
extension = "0";
maps = "0";
//ejecutor de script
function ejecutar(){
	//constructor
	function firma(nombre, extension, puesto, num_cel, loc, car, maps) {
				this.nombre= nombre;
				this.puesto= puesto;
				this.num_cel= num_cel;
				this.loc = loc;
				this.car == "GDL";
				this.extension = extension;
				if(this.loc == "GDL" && this.extension > 0){
				 this.extension = " x" + extension;}
				 else if(this.loc == "CDMX" && this.extension > 0){
					this.extension = " x" + extension;}
					else{extension=""}
				//this.car = car;

				this.ofi = function(){
				//método asignación de oficina
					if(this.loc == "GDL"){
						this.loc = "Centro Logístico Jalisco";
						this.cp = "Acatlán MX 45713";
						this.calle = "Calle Beijing 100";
						num_loc = "387 690 6888";
						maps = "https://goo.gl/maps/JbYLETLVEK34UT8k6";
					}else if(this.loc == "CDMX"){
						this.loc = "Argentina Poniente";
						this.cp = "Ciudad de México, CX 11230 MX";
						this.calle = "Ingenieros Militares 70";
						num_loc = "55 3640 9950";
						maps = "https://goo.gl/maps/diGpMrs5sxyskb2G6";
					}else {this.loc = "";}

				};

				this.carTel = function(){
				//método asignación de característica telefónica
					if(this.car == "GDL"){
						this.num_cel = this.num_cel;
					}else if(this.car == "CDMX"){
						this.num_cel = this.num_cel;
					}
				};

				//método consulta y formato de firma.
				this.generar = function(){ 
					//consula por campos vacíos
					if((this.puesto == "Seleccionar")|(this.nombre == "") | (this.num_cel == "") | (this.loc =="Seleccionar") | (this.car == "Seleccionar")){
      				alert("Debe completar todos los campos");
      			}else{ 
      				//formato de firma
					document.getElementById("firma").innerHTML = `<font size='2'><table style="font-family:'helvetica neue',helvetica,sans-serif;padding:15px 15px 15px 15px" cellpadding="0" cellspacing="0" bgcolor='#FFFFFF'>
					<tbody>
					 <tr>
					  <td style="padding:0;font-family:'helvetica neue',helvetica,sans-serif;border-right:2px solid #333; padding-right:15px; text-align: right; vertical-align:top; " valign="top">
					   <table style="font-family:'helvetica neue',helvetica,sans-serif;margin-right:0; margin-left:auto;" cellpadding="0" cellspacing="0" >
						<tbody>
						 <tr>
						  <td style="padding:0;font-family:'helvetica neue',helvetica,sans-serif;height:45px; vertical-align:top; text-align:left;" valign="top" align="left" width="175">
						   <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:14pt; font-weight:bold;color:#003D6E;font-size:13pt;letter-spacing:1px;text-transform:uppercase">${ this.nombre }<span><br></span></span>
						   <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:10pt;font-weight:800;color:#737373;letter-spacing:1px;text-transform:uppercase">${ this.puesto }</span><span></span>
						  </td>
						 </tr>
			   
						 <tr>
						 <td style="padding:0;height:20px; font-family:'helvetica neue',helvetica,sans-serif;vertical-align:top;padding-top:0spx" valign="top" align="left"><br>
						 <a href="https://haitianmexico.com" target="_blank"><img nosend="1" alt="Logo" style="height:20px; width:89; border:0; " height="20" border="0""  src="./img/logo.png"></a>
						  </td>
						 </tr>
						 <tr>
						  <td style="padding:0;font-family:'helvetica neue',helvetica,sans-serif;height:20px; vertical-align:middle; text-align:right;padding-top:6px" valign="middle" align="right"><br>
						   <span><a href="https://www.facebook.com/haitian.mx/" target="_blank"><img nosend="1" border="0" width="20" alt="Facebook icon" style="border:0; height:20px; width:20px" src="./img/facebook.png"></a></span>
						   <span><a href="https://twitter.com/Haitian_Mexico/" target="_blank"><img nosend="1" border="0" width="20" alt="Twitter icon" style="border:0; height:20px; width:20px" src="./img/twitter.png"></a> </span>
						   <span><a href="https://www.linkedin.com/company/haitian-mexico/mycompany/" target="_blank"><img nosend="1" border="0" width="20" alt="Linkedin icon" style="border:0; height:20px; width:20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"></a> </span>
						   <span><a href="https://www.youtube.com/HAITIAN" target="_blank"><img nosend="1" border="0" width="30" alt="YouTube icon" style="border:0; height:35px; width:39px" src="./img/youtube.png"></a> </span>
						   </td>
						 </tr>
						</tbody>
					   </table>
					  </td>
					  <td style="padding:0;padding-left:15px;font-size:1pt; vertical-align:top; font-family:'helvetica neue',helvetica,sans-serif;" valign="top" width="150">
					   <table style="font-family:'helvetica neue',helvetica,sans-serif;" cellpadding="0" cellspacing="0">
						<tbody>
			   
			   
						 <tr>
						  <td style="padding:0;font-family:'helvetica neue',helvetica,sans-serif;height:40px; vertical-align:top; padding:0; text-align:left;" valign="top" align="left">
								
						  <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#eee;letter-spacing:1px;"><span style="font-weight:900;color:#003D6E">Haitian International Mexico S. de R.L. de C.V.</span> <span><br><br></span></span>
						  <span><a href="https://api.whatsapp.com/send?phone=521${this.num_cel}&text=Hello!" target="_blank"><img nosend="1" border="0" width="20" alt="Mobile icon" style="border:0; height:20px; width:20px" src="http://assets.stickpng.com/images/5a452598546ddca7e1fcbc80.png"></a> </span>
						  <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#eee;letter-spacing:1px"><span style="font-weight:700;color:#737373">+52 ${ this.num_cel }</span><br><br>
						  <img nosend="1" border="0" width="20" alt="Mobile icon" style="border:0; height:20px; width:20px" src="https://cdn2.iconfinder.com/data/icons/in-the-office-line/100/telephone-512.png"></a> </span>
           				  <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#eee;letter-spacing:1px"><span style="font-weight:700;color:#737373">+52 ${ num_loc + this.extension}</span><br><br>

						 </tr>
						 
						 <tr>
						  <td style="padding:0;height:80px; font-family:'helvetica neue',helvetica,sans-serif;vertical-align:top; padding:0;" valign="top">
						   <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#737373;letter-spacing:1px"><a target="_blank" href='${ maps }' style="color:#737373;text-decoration:none !important">${ this.calle }<span><br></span></span>
						   <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#737373;letter-spacing:1px">${ this.loc } <br>${ this.cp }</a></span>
						  </td>
						 </tr>

						 
						}

						<tr>
						  <td style="padding:0;height:10px; font-family:'helvetica neue',helvetica,sans-serif;vertical-align:middle;" valign="middle" align="left">
						   <a href="https://haitianmexico.com" target="_blank" style="color:#BD272D; font-size:8pt; font-family:'helvetica neue',helvetica,sans-serif;color:#003D6E;text-decoration:bold !important;letter-spacing:1px;">www.haitianmexico.com</a>
						  </td>
						 </tr>
						</tbody>
					   </table>
					  </td>
					 </tr>
					</tbody>
				   </table>`

				

    				
      				}
				};
			}

		//creación de objetos tomando datos del formulario.
		var firma = new firma(document.getElementById('nombre').value,
							  document.getElementById('extension').value,
		  					  document.getElementById('puesto').value,
		   					  document.getElementById('num_cel').value,
		    				  document.getElementById('loc').value);
		     				  //document.getElementById('car').value);
		//ejecución de métodos del objeto.
		firma.ofi();
		firma.carTel();
		firma.generar();

}

		
function clickcopy() {

	function copiar(doc){
		
			const docu = document.getElementById("firma").innerHTML;
			 doc.write(docu);
			 console.log(docu);
			
			 doc.execCommand("selectAll");
			 doc.execCommand("copy");
			 doc.close();
	}

	copiar();
}
		