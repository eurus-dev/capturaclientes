/**
 *
 * @param x: NOmbre del Cleinte
 * @param y: RUT del cliente
 */
function validar(x, y) {
  if (x === '' || x === undefined) {
    alert('El campo de NOmbre es obligatorio');
    return;
  }
  if (Number.isInteger(y)) {
    alert('RUT no es valido');
  }
}
