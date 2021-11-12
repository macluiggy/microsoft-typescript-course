// para los generics no es buena idea hacer operaciones que tengan el mismo typo que el generic, ya que como su nombre lo indica es una generico, no se save el typo hasta que le demos un valor entonces una funcion como la siguiente seria un ejemplo de este inconveniente
// function indentity<T, U>(value: T, message: U): T {
//     let result: T = value + value; //error
//     console.log(message);
//     return result
    
// }

