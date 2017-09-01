This is a collection of classes used for JS client-side development.

https://github.com/mathiasbynens/utf8.js/issues/17

 1. <a name="cusage"></a>[Usage](#usage)
 2. <a name="cversionHistory"></a>[Version history](#versionHistory)

### <a name="usage"></a>[Usage](#cusage)
 1. <a name="carrayStringifier"></a>[ArrayStringifier](#arrayStringifier)
 2. <a name="cdottedStringObject"></a>[DottedStringObject](#dottedStringObject)
 3. <a name="cstaticUtils"></a>[StaticUtils](#staticUtils)
 4. <a name="cutf8"></a>[utf8](#utf8)

#### <a name="arrayStringifier"></a>[ArrayStringifier](#carrayStringifier)

Given an array, produces its string representation.

 - constructor()

    Constructs a class instance.
    
        new ArrayStringifier(array);

    gives exactly the same result as
    
        new ArrayStringifier()
            .setArray(array)
            .setSeparator(", ");

 - process() / toString()

    Returns a string representation of the array.

The following methods return `this` for method chaining.

 - setPrefix()
    
    Sets a prefix to be added to the resulting string.
    
        arrayStringifier.setPrefix(
            prefix, // String.
            addIfArrayLength // Boolean. If true the prefix will be added ONLY if the array is not empty. Default: true.
        );

 - setArray()

    Sets an array to stringify.

        arrayStringifier.setArray(array);

 - setSeparator()

    Sets a separator to be used.
    
        arrayStringifier.setSeparator(
            separator // String
        );

 - setElementProcessor()

    Sets an element processor for fine-grained per-element processing. An element processor is a function the return value of which will be used to determine the value and optionally the separator for the current array element. If an element processor returns an object with methods `getElement()` and  `getSeparator()` they will be used to get the value and the separator for the current array element. If the method `getElement()` is not present in the return value, the latter will be used as the value for the current array element as is and the separator set by `setSeparator()` will be used.

        const arrayStringifier = new ArrayStringifier();
        
        arrayStringifier
            .setArray([1, 2, 3, 4])
            .setElementProcessor(element => element % 2 ? "Something odd" : element)
            .process(); // Something odd, 2, Something odd, 4
        
        arrayStringifier
	        .setArray([1, 2, 3, 4])
	        .setElementProcessor(element => !(element % 2) ? element : element == 1 ? {
	            getElement() {
	                return "";
	            },
	            getSeparator() {
	                return "";
	            }
	        } : "Something odd")
	        .process(); // 2, Something odd, 4

 - setPostfix()

    Sets a postfix to be added to the resulting string.
    
        arrayStringifier.setPostfix(
            postfix, // String.
            addIfArrayLength // Boolean. If true the postfix will be added ONLY if the array is not empty. Default: true.
        );

#### <a name="dottedStringObject"></a>[DottedStringObject](#cdottedStringObject)

Provides a way to get and set objects properties with dot separated strings. All methods are `static`.

 - getProperty()

    Gets a property value.

        DottedStringObject.getProperty(
            object, // Object.
            fullPropertyName, // String. A dot separated full property name.
            defaultValue // Object. This value is returned if the property doesn't exist.
        );

    Example:
        
        const const obj = {
            f1: 10,
            obj1: {
                f1: 20
            }
        };
        
        DottedStringObject.getProperty(obj, "f1"); // 10
        DottedStringObject.getProperty(obj, "f1", "aaa"); // 10
        DottedStringObject.getProperty(obj, "obj1.f1"); // 20
        DottedStringObject.getProperty(obj, "obj1.f2", "default"); // default

 - setProperty()

    Sets a property value.

        DottedStringObject.setProperty(
            object, // Object.
            fullPropertyName, // String. A dot separated full property name.
            value // Object. A value to set.
        );

    Example:

        const obj = {};
        
        DottedStringObject.setProperty(obj, "f1", 10); // { f1: 10 }
        DottedStringObject.setProperty(obj, "obj1", 20); // { f1: 10, obj1: 20 }
        DottedStringObject.setProperty(obj, "obj1", {}); // { f1: 10, obj1: {} }
        DottedStringObject.setProperty(obj, "obj1.f2", 30); // { f1: 10, obj1: { f2: 30 } }

#### <a name="staticUtils"></a>[StaticUtils](#cstaticUtils)

#### <a name="utf8"></a>[utf8](#cutf8)

### <a name="versionHistory"></a>[Version history](#cversionHistory)

Version number|Changes
-|-
v1.0.1|1.&nbsp;Readme updated.<br>2.&nbsp;`ArrayStringifier.toString()` is added. It's identical to `ArrayStringifier.process()`.
v1.0.0|Initial release.
<br><br>
> Written with [StackEdit](https://stackedit.io/).