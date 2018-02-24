function(instance, properties, context) {

try {
var result = math.eval(properties.expression);
} catch(err) {
  console.log(err.toString());
  instance.triggerEvent('error', function(err) {});
  instance.publishState('error_string', err.toString());
}
  
  
if (result) {
  var resultString = result.toString();
  var resultFloat = parseFloat(result);
}
instance.publishState('result_text', resultString);
instance.publishState('result_number', resultFloat);

			
  
  
  
}