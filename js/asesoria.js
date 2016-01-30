var $nombre
var $apellido
var $email
var $telefono
var $direccion
var $texto_pqrs
var $link
var nodemailer = required('nodemailer')

$(	function() {

	function borrarDatos() {
		$('.nombre').val('')
		$('.apellido').val('')
		$('.email').val('')
		$('.telefono').val('')
		$('.direccion').val('')
		$('.comentarios').val('')
	}

	function getDatos() {
		$nombre = $('.nombre').val()
		$apellido = $('.apellido').val()
		$email = $('.email').val()
		$telefono = $('.telefono').val()
		$direccion = $('.direccion').val()
		$texto_pqrs = $('.comentarios').val()

		var $datos = [$nombre,$apellido,$email,$telefono,$direccion,$texto_pqrs]
		
		return $datos
	}

	$('.enviar')
		.on('click', function(event) { 
			// evita recargue de página
			event.preventDefault()			

			alert('Datos a enviar: \n\n'+ 'Nombre: '+getDatos()[0] +
				'\n'+ 'Apellido: '+getDatos()[1]+
				'\n'+ 'Correo electrónico: '+getDatos()[2] +
				'\n'+ 'Teléfono: '+getDatos()[3] +
				'\n'+ 'Dirección: '+getDatos()[4] +
				'\n'+ 'PQRS: '+getDatos()[5]
				)

			alert('Correo enviado')
		});

	$('.borrar').on('click', function(event) { 
		borrarDatos();
		// evita recargue de página
		event.preventDefault()
	});


	}
)

