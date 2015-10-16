/*
Los controladores son como el pegamento que une todas las partes de la aplicación entre si.
Todo lo que realmente hacen es escuchar los eventos (por lo general de vistas)
 y realizar algunas acciones cuando lleguen. 
*/

Ext.define('Proyecto.controller.Imagenes', {
 extend: 'Ext.app.Controller',
 models: ['Imagenes', 'Comentarios'],  
 stores: ['Imagenes', 'Comentarios'],  
 views: [
    'izquierda.Panel',  
	'izquierda.Galeria',
	'izquierda.Comentarios',
    'izquierda.Imagen',		
    'izquierda.SubirImagen',		
	'derecha.Panel',		
	'derecha.Hoja1',		
	'derecha.Hoja2',
	'derecha.Contenedor', 
	'derecha.ContenedorTexto'
 ],
 init: function() {
   this.control({
     'viewport > panel verGaleria':{
  		 refresh: this.creoGaleria
	 },
     'viewport > panel verComentarios':{
  		 refresh: this.creoComentario
	 },
	 'objImagen':{
		 move:  this.mover, 
		 resize:  this.redimension
		 
	 },
	 
  });
 }, 
 
 
 redimension: function( me, ancho, alto, oldAncho, oldAlto, objeto ) {

	if ( ((me.x+ancho)<20)  || ((me.x)>(ancho-20)) ) 
	   {
	     me.setWidth(oldAncho);
	   }
	   
	if ( ((me.y+alto)<20)  || ((me.y)>(alto-20)) ) 
	   {
	     me.setHeight(oldAlto);
	   }
	   
	   
	   //me.setPosition(((x+me.width)-me.width)+20, y ) 
	//Ext.getCmp('PnlDerecha').setTitle( me.id+' alto:'+me.x);
 
 //setWidth(oldWidth)
 //setHeight(oldHeight)
 
 },
 mover: function (me,x,y,objeto){
/*
	var vista = Ext.getCmp('hoja1');
    var posPadre = vista.getBox( ); //posiciones del padre del objeto
	Ext.getCmp('PnlDerecha').setTitle( me.id+'  X:'+(x)+' Y:'+ (y)+' AnchoX:'+me.width+' AnchoY:'+me.height
	+' /// Padre: x'+me.ownerCt.el.dom.offsetLeft+' Padre: y'+me.ownerCt.el.dom.offsetTop
	+' Padre: ancho'+me.ownerCt.width+' Padre: alto'+me.ownerCt.height
	);*/
	
	xn=x;
	yn=y;
	if (x>(me.ownerCt.width-20)) 
	  { 
		me.setPosition( (me.ownerCt.width-20), y ) 
		//xn=(me.ownerCt.width-50);
	  }
	if (y>(me.ownerCt.height-60)) 
	  { 
		me.setPosition( x, (me.ownerCt.height-60)) 
		//yn=(me.ownerCt.height-50);
		
	  }

	if ((x+me.width)<20) 
	  { 
	      me.setPosition(((x+me.width)-me.width)+20, y ) 
		  //xn= (x+me.width)-me.width;
	  }

	if ((y+me.height)<20) 
	  { 
		me.setPosition(x, ((y+me.height)-me.height)+20 ) 
		//yn=(y+me.height)-me.height;
	  }
	/*  
	  if ((xn!=x) || (yn!=y))
	   {
	      me.setPosition(xn,yn);
	   } 
*/	   
		
 },
 creoGaleria: function( me, eOpts ) {
   var srcNuevo='';
  var overrides = {
    b4StartDrag : function() {  
      if (!this.el) {  
        this.el = Ext.get(this.getEl());
      }
        this.originalXY = this.el.getXY();
    },
    onInvalidDrop : function() {
	   this.invalidDrop = true;
    },
    endDrag : function() {
       if (this.invalidDrop === true) { 
           this.el.removeCls('dropOK'); 
	 	   var animCfgObj = {
              easing   : 'elasticOut',
                duration : 1,
                scope    : this,
                callback : function() {
                    this.el.dom.style.position = '';
                }
           };
           this.el.moveTo(this.originalXY[0], this.originalXY[1], animCfgObj);
           delete this.invalidDrop;
       }
    },
    onDragDrop : function(evtObj, targetElId) {
       var dropEl = Ext.get(targetElId);
	   var ContenedorOriginal = this.el.dom.parentNode.id;
	   var contOriginal = Ext.dd.DragDropManager.getDDById(ContenedorOriginal);
	   var ContenedorFinal = targetElId;
	   var contFinal = Ext.dd.DragDropManager.getDDById(ContenedorFinal);
	   if (this.el.dom.parentNode.id != targetElId) {  
            dropEl.appendChild(this.el);
            this.onDragOut(evtObj, targetElId);
            this.el.dom.style.position ='';
            this.el.dom.style.top = '';
            this.el.dom.style.left = '';
		    if ((ContenedorFinal != 'galeria') )	{
			   contFinal.removeFromGroup( 'carsDDGroup' );
			   var vista = Ext.getCmp(ContenedorFinal);
 			   if ((Ext.getCmp(ContenedorFinal).height) >= (Ext.getCmp(ContenedorFinal).width)){
			       alto = Ext.getCmp(ContenedorFinal).height;
 			       ancho =Ext.getCmp(ContenedorFinal).width+ (Ext.getCmp(ContenedorFinal).height-Ext.getCmp(ContenedorFinal).width); 
			   }
 			   else {
 			      ancho = Ext.getCmp(ContenedorFinal).width;
 			      alto =Ext.getCmp(ContenedorFinal).height+ (Ext.getCmp(ContenedorFinal).width-Ext.getCmp(ContenedorFinal).height); 
			   };

			  // console.log(this.el.dom.children[0].getAttribute('src'));
			   var imgSrc = this.el.dom.children[0].getAttribute('src');
			   //console.log('este-'+imgSrc);
			   var picar = imgSrc.split("/");
			   var imgSrc = picar[picar.length-1];
					//console.log(imgSrc);
					//console.log(imgSrc);
					//(this.el.dom.children[0].getAttribute('src').split("/"))[2];

			   var imag = Ext.create('Proyecto.view.izquierda.Imagen', {
 				  width:ancho, 
				  height: alto, 	
				  items: [{
				 	  type: "image",
					  src: 'images/original/'+imgSrc,  //this.el.dom.children[0].getAttribute('src'), 
					  x:0,
					  y:0,
 					  width:ancho, 
					  height: alto, 	
					  rotate: { 
						  degrees: 0  //anguilo 
					  }
				  }],
				  cls:'contimagen',
				  id:'Elem_'+ContenedorFinal, 
				  itemId:'Elem_'+ContenedorFinal 
			   });
			   var vista = Ext.getCmp(ContenedorFinal).add(imag); 
			   var thisImagen = this.el.dom.children[0];

			/*
			   Ext.Function.defer(function(){
				//alert('a')
							   Ext.getCmp(ContenedorFinal).doLayout( ); 

				//imag.show(true);
				
				}, 500);
				
				*/

			   
			  // console.log(imgSrc);
				
				Ext.Ajax.request({  
				   url:'datos/mover-fichero.php',
				   method: 'POST',  
				   params: {origen: imgSrc, //thisImagen.getAttribute('src'),
				   destino:'images/imgPlantilla/', 
				   contenedor: ContenedorFinal,idusuario:Ext.get('idusuario').dom.getAttribute('value')}, 
				   success: function(response){
				   var srcActual = Ext.decode(response.responseText).file;
					 thisImagen.setAttribute('src',srcActual); 
					 imag.items[0].src = srcActual;  
				   }
			   });  
		 	};
	    }
	    else {
	 	 this.onInvalidDrop(); }
     },
	 onDragEnter : function(evtObj, targetElId) {
		 if (targetElId != this.el.dom.parentNode.id) {
            this.el.addCls('dropOK'); 
         }
         else {
             this.onDragOut();
         }
     },
     onDragOut : function(evtObj, targetElId) {
        this.el.removeCls('dropOK');  
     }
 };	
		var carElements = Ext.get('galeria').select('.thumb'); 
	  Ext.each(carElements.elements, function(el) {
          var dd = Ext.create('Ext.dd.DD', el, 'carsDDGroup', {
             isTarget  : false 
          });
	
          Ext.apply(dd, overrides);
      });
	  
	  //console.log((Ext.getCmp('ver1').items.length==0));
	  
      var carsDDTarget = Ext.create('Ext.dd.DDTarget', 'galeria','carsDDGroup'); //aqui
	  if (Ext.getCmp('ver1').items.length==0){
	     var rentedDDTarget = Ext.create('Ext.dd.DDTarget', 'ver1', 'carsDDGroup'); };
	  if (Ext.getCmp('ver2').items.length==0){
	     var rentedDDTarget = Ext.create('Ext.dd.DDTarget', 'ver2', 'carsDDGroup');};
	  if (Ext.getCmp('ver3').items.length==0){   
         var rentedDDTarget = Ext.create('Ext.dd.DDTarget', 'ver3', 'carsDDGroup'); };
		 
	}, 
creoComentario: function( me, eOpts ) {
  var srcNuevo='';
  var overrides = {
		b4StartDrag : function() {  
            if (!this.el) {  
                this.el = Ext.get(this.getEl());
            }
            this.originalXY = this.el.getXY();
        },
		 onInvalidDrop : function() {
				this.invalidDrop = true;
        },
        endDrag : function() {
            if (this.invalidDrop === true) { 
                this.el.removeCls('dropOK'); 
				var animCfgObj = {
                    easing   : 'elasticOut',
                    duration : 1,
                    scope    : this,
                    callback : function() {
                        this.el.dom.style.position = '';
                    }
                };
                this.el.moveTo(this.originalXY[0], this.originalXY[1], animCfgObj);
                delete this.invalidDrop;
            }
        },
        onDragDrop : function(evtObj, targetElId) {
            var dropEl = Ext.get(targetElId);
			var ContenedorOriginal = this.el.dom.parentNode.id;
			var contOriginal = Ext.dd.DragDropManager.getDDById(ContenedorOriginal);
			var ContenedorFinal = targetElId;
			var contFinal = Ext.dd.DragDropManager.getDDById(ContenedorFinal);
			if (this.el.dom.parentNode.id != targetElId) {  
                dropEl.appendChild(this.el);
                //console.log(this.el);
                this.onDragOut(evtObj, targetElId);
                this.el.dom.style.position ='';
                this.el.dom.style.top = '';
                this.el.dom.style.left = '';
				{
				var vista = Ext.getCmp(ContenedorFinal);
				var texto = Ext.create('Proyecto.view.izquierda.SpriteTexto', {
							tpl:this.el.dom.children[0].innerHTML,
							data:{},
							cls:'textoarea', 
							id:'Elem_'+ContenedorFinal, 
							itemId: 'Elem_'+ContenedorFinal
				 });
				 var vista = Ext.getCmp(ContenedorFinal).add(texto); 				
                 var textoMovido = this.el.dom.children[0];	
				

				 Ext.getCmp('comentarios').getStore().load({  
					params: {
						idusuario:Ext.get('idusuario').dom.getAttribute('value'), //textoMovido.getAttribute('idusu'),
						idcomentario: textoMovido.getAttribute('idcom'),
						contenedor:ContenedorFinal 
				},
				callback: function(records, operation, success) {
				}
				});
				};
				
            }
            else {
                this.onInvalidDrop();
            }
        },
		onDragEnter : function(evtObj, targetElId) {
		   if (targetElId != this.el.dom.parentNode.id) {
                this.el.addCls('dropOK'); //Poner el color verde
            }
            else {
                this.onDragOut();
            }
        },
        onDragOut : function(evtObj, targetElId) {
            this.el.removeCls('dropOK');  
        }
    };	
		var carElements = Ext.get('comentarios').select('.caja'); 
	  Ext.each(carElements.elements, function(el) {
          var dd = Ext.create('Ext.dd.DD', el, 'grupoTexto', {
             isTarget  : false 
          });
          Ext.apply(dd, overrides);
      });
      var carsDDTarget = Ext.create('Ext.dd.DDTarget', 'comentarios','grupoTexto'); 
      var rentedDDTarget = Ext.create('Ext.dd.DDTarget', 'text1', 'grupoTexto'); 
      var rentedDDTarget = Ext.create('Ext.dd.DDTarget', 'text2', 'grupoTexto'); 
      var rentedDDTarget = Ext.create('Ext.dd.DDTarget', 'text3', 'grupoTexto'); 
      var rentedDDTarget = Ext.create('Ext.dd.DDTarget', 'text4', 'grupoTexto'); 
	}, 
});
