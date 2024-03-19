/*
Intellisense breakdown


.Map()

(method) Array<string>.map<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any): U[]

(method) - indicates that .map is a method. It's a function associated with an object.

 Array<string>.map - this specificies that the .map belongs to arrays containing strings.
 It is used to create a new array by applying a function to each element in the original array.

 <U> - This indicates a generic type, denoted by <U>. This means that .map can transform elements of one type into elements of another type.
 In this case the type transformed is represented by <U>

(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any)
- This is the callback function that will be applied to each element in the array
- value Represents the current element being processed in the array, which is of type string
- index represents current index
- array represents the array that .map was called on
- this arg (optional) - represents the value to use as this when executing the function

:U[] Indicates the return type of the method. It says that map will return a new array of containing elements of type U. As determinted by the callback function
*/


