export default class StaticUtils {
   static round(value, decimals) {
      return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
   }
   
   static encodedUtf8ToByteArray(encoded) {
      const ar = [];
      
      for (let i = 0; i < encoded.length; i++) {
         ar.push(encoded.charCodeAt(i));
      }
      
      return ar;
   }
   
   static ensureBounds(value, min, max) {
      return Math.max(Math.min(value, max), min);
   }
   
   static pushAndReturnElement(array, element) {
      array.push(element);
      
      return element;
   }
   
   static quoteIfString(value) {
      return value.constructor == String ? `"${value}"` : value;
   }
   
   static safeQuoteIfString(value, quoteIfString) {
      return quoteIfString ? StaticUtils.quoteIfString(value) : value;
   }
   
   static objectToArray(object) {
      return Object.keys(object).reduce((p, c) => {
         p.push(object[c]);
         
         return p;
      }, []);
   }
   
   static escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
   }
   
   static replaceAll(string, find, replace) {
      return string.replace(new RegExp(StaticUtils.
         escapeRegExp(find), 'g'), replace);
   }
}
