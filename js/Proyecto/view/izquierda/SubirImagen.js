Ext.define('Proyecto.view.izquierda.SubirImagen' ,{
           extend: 'Ext.form.Panel', 
		alias : 'widget.SubirImage',
			id: 'subImage',
		title: 'subImage',
		
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
		    title: 'Hello'
			}
		);

		me.items = [
		{
            xtype: 'filefield',  
        buttonOnly: true,
        hideLabel: true,	
		buttonText :'Elija su Imagen...',

		
        width:160,		
        id: 'form-file',
        emptyText: 'Select an image',
        fieldLabel: 'photo',
        name: 'photo',
        buttonConfig: {
                iconCls: 'icosubfotos'
            },
           listeners: {
            'change': function(fb, v){
                var form = this.up('form').getForm();
                if(form.isValid()){
                    form.submit({
					                    params: {
                    'idusuario': Ext.get('idusuario').dom.getAttribute('value')
					
                },
                        url: 'datos/file-upload.php',
                        waitMsg: 'Cargando foto...',
                        success: function(fp, o) {
						     me.ownerCt.getComponent('galeria').getStore().load({  //puedo usar update pero no devuelve valores por lo que no me interesa para este caso
								params: {
									idusuario: Ext.get('idusuario').dom.getAttribute('value')
								},
								callback: function(records, operation, success) {
								},
								scope: this
							 });									 
                            msg('suceso', 'Imagen subida con ' + o.result.file);
                        },
                         failure : function(fp, o) {
                            msg('suceso', 'No concluyo el proceso hubo "' + o.result.file + '" en el servidor');
                        }

                    });
                }
            }
		 }
			
        }];
		
		me.callParent(arguments);
    }		
  });
    var msg = function(title, msg) {
        Ext.Msg.show({
            title: title,
            msg: msg,
            minWidth: 200,
            modal: true,
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });
    };
