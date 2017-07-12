	var cons = 0;
function crear_nota(){

	var midiv = document.createElement("textarea");
	var bt = document.createElement("input");
	var bt2 = document.createElement("input");
	var div2 = document.createElement("div");

		numero  =  cons 
		cons++
		div2.setAttribute("id",numero);
		div2.setAttribute("name","div2");


		bt2.setAttribute("id","bt2");
		bt2.setAttribute("name","bt2");
		bt2.setAttribute("type","button");
		bt2.setAttribute("value","Edit");
		bt2.setAttribute("onclick","disponible("+numero+");");

		bt.setAttribute("id","bt");
		bt.setAttribute("name","bt");
		bt.setAttribute("type","button");
		bt.setAttribute("value","X");
		bt.setAttribute("onclick","return boorrarNdo("+(numero)+");");

		midiv.setAttribute("id","mensaje"+numero);
		midiv.setAttribute("class","newT");
		midiv.setAttribute("name","mensaje");
		midiv.setAttribute("placeholder","Nota");
		midiv.setAttribute("onchange","disableEnvio("+(numero)+");");

		document.getElementById('areaContenido').appendChild(div2);
		document.getElementById(numero).appendChild(bt);
		document.getElementById(numero).appendChild(bt2);
		document.getElementById(numero).appendChild(midiv);
}

function disableEnvio(num){
	if($('#mensaje'+num).val() != ""){

		document.getElementById("mensaje"+num).disabled = true
		var mensaje2 = $('#mensaje'+num).val()
		var id_msj = num

	}
	    $.ajax({
            type: 'POST',
            url: 'http://localhost:5000/signUp',
            data: JSON.stringify({"mensaje" : mensaje2, "id_msj" : id_msj}),
            contentType:'aplication/json',
            dataType:'json',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
}
//RECORDAR VOLVER A DESABILITAR LUEGO DE EDITAR//

function disponible(num){
	if($('#mensaje'+num).val() != ""){
		document.getElementById("mensaje"+num).disabled = false
		var mensaje2 = $('#mensaje'+num).val()
		var id_msj = num
	}

	 $.ajax({
            type: 'PUT',
            url: 'http://localhost:5000/signUp',
            data: JSON.stringify({"mensaje" : mensaje2, "id_msj" : id_msj}),
            contentType:'aplication/json',
            dataType:'json',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });

}


$.getJSON("http://localhost:5000/signUp", function(anotaciones){
	createNodos(anotaciones)
})

function createNodos(anotaciones){
	anotaciones.forEach(function(anotacion){
		crearNodo(anotacion)	
	})
}

function crearNodo(anotacion){

	mostrartodo(anotacion)

}
function mostrartodo(anotacion){

	var midiv = document.createElement("textarea");
	var bt = document.createElement("input");
	var bt2 = document.createElement("input");
	var div2 = document.createElement("div");

		div2.setAttribute("id",anotacion['id']);
		div2.setAttribute("name","div2");


		bt2.setAttribute("id","bt2");
		bt2.setAttribute("name","bt2");
		bt2.setAttribute("type","button");
		bt2.setAttribute("value","Edit");
		bt2.setAttribute("onclick","disponible("+anotacion['id']+");");

		bt.setAttribute("id","bt");
		bt.setAttribute("name","bt");
		bt.setAttribute("type","button");
		bt.setAttribute("value","X");
		bt.setAttribute("onclick","return boorrarNdo("+(anotacion['id'])+");");

		midiv.setAttribute("id","mensaje"+anotacion['id']);
		midiv.setAttribute("class","newT");
		midiv.setAttribute("name","mensaje");
		midiv.setAttribute("onchange","disponible("+(anotacion['id'])+");");
		midiv.setAttribute("disabled","disabled");

		document.getElementById('areaContenido').appendChild(div2);
		document.getElementById(anotacion['id']).appendChild(bt);
		document.getElementById(anotacion['id']).appendChild(bt2);
		document.getElementById(anotacion['id']).appendChild(midiv);
		document.getElementById("mensaje"+anotacion['id']).value=anotacion['anotacion']
}

function boorrarNdo(num){
		var node = document.getElementById(num);
		node.parentNode.removeChild(node);

		$.ajax({
            type: 'DELETE',
            url: 'http://localhost:5000/signUp',
            data: JSON.stringify({"delnum" : num}),
            contentType:'aplication/json',
            dataType:'json',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
}
