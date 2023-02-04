// - Una cadena de texto con tu Nombre
let nombre = "Carlos"

// - Otra cadena de texto con tu Apellido
let apellido = "Coronado"

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = (estudiante.toUpperCase());
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = (estudiante.toLowerCase());
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let totalCaracteres = estudiante.length
console.log(totalCaracteres);

// - Una variable que contenga la primera letra del Nombre
let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

// - Otra variable que contenga la última letra del Apellido
let ultimaLetra = apellido.slice(-1);
console.log(ultimaLetra);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacios = estudiante.replace(/\s+/g, "");
console.log(sinEspacios);

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreContenido = estudiante.includes(nombre);
console.log(nombreContenido);