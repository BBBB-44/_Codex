## Class
a class is a blueprint or template for creating objects, encapsulating data (fields, properties and constants) and behavior (methods, events, constructors and nested types) into a single unit. 

Basic Syntax
Classes are defined using the class keyword, usually within a namespace. The basic structure includes an optional access modifier which determines the class type, the class keyword, an identifier (name), and a body enclosed in curly braces.
using System;

// A namespace to organize code
namespace AnimalWorld
{
    // A public class named Dog
    //<Access Modifier> <Optional Modifiers> <Class Keyword> <Identifier Name>
    public class Dog
    {
        // Fields, Properties, Methods, etc. go here <Body>
    }
}



## Access modifier
Access modifiers (public, private, protected, internal) control the visibility of classes and their members.

Visibility Notation
Visibility notations indicate the access level of attributes and methods. Common visibility notations include:
+ for public (visible to all classes)
- for private (visible only within the class)
# for protected (visible to subclasses)
~ for package or default visibility (visible to classes in the same package)

## Class types
Type of Class 
Description
Use Case
Concrete/Regular
Standard, fully implemented classes that can be instantiated directly using the “new” keyword.
Modeling most real-world entities and logic.
Abstract
Used as a base class; cannot be instantiated on its own. Can contain abstract methods (no implementation) that must be implemented by derived classes.
Enforcing a common structure and shared behavior among related classes.
Static
Cannot be instantiated or inherited, and can only contain static members.
Grouping utility or helper methods that don't need instance data or state (e.g., the System.Math class).
Sealed
Prevents other classes from inheriting from it.
Restricting further modification or extension of a class, often for security or performance reasons.
Partial
Allows a single class definition to be split across multiple source files, combined at compile time using the partial keyword.
Organizing large classes or integrating with auto-generated code.
Generic
Defined with type parameters, allowing a single class to work with various data types while maintaining type safety (e.g., List<T>).
Creating flexible, reusable data structures like collections.
Record
A special class (or struct, as of C# 10) type designed for data-centric scenarios, offering immutability and value-based equality with less boilerplate code.
Data Transfer Objects (DTOs) and immutable data models.

## Object
an object is a concrete instance of a class or struct (which acts as its blueprint) that exists in memory and combines data (fields/properties) with behavior (methods).


## Parameter 
Class
Object
Definition
A blueprint or template for creating objects.
A real-world instance created from a class.
Existence
A logical entity; defined in code but does not occupy memory on its own.
A physical entity; memory is allocated when it is created.
Data
Defines the structure, properties, and methods that an object will have.
Contains the actual data/values for its properties and can perform actions.



### 1. Class Definition
public class Car // This is the blueprint (class definition)
{
    // Properties (data/state)
    public string Color { get; set; }
    public int Weight { get; set; }

    // Method (behavior)
    public void Drive()
    {
        Console.WriteLine($"The {Color} car is driving.");
    }
}

### 2. Object Creation (Instantiation)
Next, you create an object (an instance) of that class using the new keyword.

class Program
{
    static void Main()
    {
        // Create an object named 'myCar' of the 'Car' class
        Car myCar = new Car(); 

        // Set the object's properties (state)
        myCar.Color = "Red";
        myCar.Weight = 1500;

        // Call a method (behavior) on the object
        myCar.Drive(); // Output: The Red car is driving.
    }
}

Each object of the Car class has its own unique state (e.g., one is "Red", another might be "Blue"), but they share the methods defined by the class.


# Class member
The term "class member" is an umbrella term that refers to all the components of a class. It encompasses both data members (variables also called fields or attributes) and member functions (methods).


# Fields
A field is a variable declared directly within a class or a struct that stores data or the state of an object. They are typically kept private to support the principle of encapsulation.

## Basic Syntax
public class Person
{
    // This is a private field (best practice)
    private int _age; 

    // This is a public property that provides controlled access to the field
    public int Age
    {
        get { return _age; } // Getter logic
        set
        {
            // Validation logic
            if (value < 0 || value > 120) 
            {
                throw new ArgumentOutOfRangeException("Age must be between 0 and 120");
            }
            _age = value; // Assigns the input value to the private field
        }
    }
}



Feature 
Field
Property
Purpose
Stores data directly (implementation detail).
Provides controlled access to data (public interface).
Implementation
A simple variable declaration.
A pair of accessors (get and set) which are essentially methods under the hood.
Access Control
Symmetric access (e.g., if public, both read and write are public).
Asymmetric access (e.g., a public getter and a private setter).
Logic/Validation
Cannot contain logic or validation rules.
Can contain complex logic, validation, or computation.




## Property
A property is a class member that provides a flexible way to read, write, or compute the value of private fields while hiding the implementation details. They function as "smart fields" and are the standard method for controlled data access, offering advantages like data validation, encapsulation, and clear syntax.

### Key Concepts

Encapsulation: Properties allow you to control how data is accessed and modified, enforcing rules and ensuring data integrity.
 	
Accessors: Properties use get and set (or init) accessors, which are special methods executed when the property is read or assigned a value, respectively.
 	
Syntax: From outside the class, a property is accessed using the same simple syntax as a field (e.g., object.Property = value;). 


## Basic syntax - Field-Backed Properties
For logic such as validation or computation, you explicitly declare a private field and provide custom logic within the accessors.

public class Person
{
    private int _age; // private backing field

    public int Age
    {
        get { return _age; }
        set
        {
            if (value < 0 || value > 120) // Validation logic
                throw new ArgumentOutOfRangeException(nameof(value), "Age must be between 0 and 120.");
            _age = value;
        }
    }
}

Example usage

var person = new Person();

// SET the property (calls the setter)
person.Age = 25;

// GET the property (calls the getter)
int age = person.Age;

Console.WriteLine(age); // 25


# Method
A method is a reusable block of code within a class that performs a specific task when called. Methods allow you to organize your code, improve readability, and avoid repetition by defining code once and using it many times.

## Basic Syntax
The structure of a method declaration (or signature) includes several components: 

<Access Modifier> <Optional Modifiers> <Return Type> <Method Name>(<Parameters>)
{
    // Method body (statements and logic)
}

Access Modifier: Defines the visibility of the method, e.g., public or private (private is the default).

Optional Modifiers: Such as static, which means the method belongs to the class itself rather than an instance of the class, or async for asynchronous operations.

Return Type: The data type of the value the method returns. If the method does not return a value, the void keyword is used.

Method Name: A unique, descriptive identifier, typically using PascalCase (e.g., CalculateSum).

Parameters: A list of input values the method accepts, enclosed in parentheses. Parameters are optional; an empty set of parentheses () means the method takes no input.


Example

using System;

class Program
{
    // This is the Main method, the entry point of the application
    static void Main(string[] args)
    {
        // Calling the AddNumbers method and storing the result
        int result = AddNumbers(5, 10);
        Console.WriteLine("Sum: " + result); //Sum: 15+
    }

    // This is a user-defined method named AddNumbers
    // <Access Modifier> <Optional Modifiers> <Return Type> <Method Name>(<Parameters>)
    public static int AddNumbers(int num1, int num2)
    {
        int sum = num1 + num2;
        // The 'return' keyword sends the value back to the caller
        return sum;
    }
}

## Key Concepts
Calling a Method: A method is executed by using its name followed by parentheses (). If it belongs to an object instance, you use the object name followed by a dot (e.g., myObject.DoSomething()).

Parameters vs. Arguments: Parameters are the variables defined in the method declaration, while arguments are the actual values passed when the method is called.

Return Values: The return statement is used to send a value back to the code that called the method. The data type of the returned value must match the method's declared return type.

Method Overloading: You can define multiple methods with the same name, as long as they have a different method signature (different parameter types, number, or order).


# Signature
A signature is the identity of a callable element.
It’s the set of characteristics the compiler uses to distinguish one method from another.

Think of it like a fingerprint, not a full description.

A signature answers one question for the compiler: “Which exact operation is this?”

a method’s signature is defined by

The name

The number of parameters

The types of parameters

The order of parameters

MethodName(ParameterType1, ParameterType2, ... in order)

return type is excluded
Because the compiler must choose a method before it knows what you’ll do with the return value.

Imagine this were allowed (it is NOT):

int    Add(int a, int b)
double Add(int a, int b)

Now look at this line:

Add(2, 3);

Which method should be called? The compiler doesn't know!

Now compare with parameter-based overloading (which is allowed):

int Add(int a, int b)
double Add(double a, double b)

Add(2, 3);       // int version
Add(2.0, 3.0);   // double version

Here, the compiler can decide immediately based on the arguments alone.
A method’s signature must be resolvable using only the call itself, not what you plan to do with the result afterward.

signature enables

Overloading
Same name, different signatures

Type safety
Prevents ambiguous calls

Clear contracts
Interfaces and overrides must match signatures
Namespace
a namespace is a logical container used to organize related types (classes, structs, interfaces, enums, delegates) and prevent naming conflicts. It provides a naming scope, much like folders in a file system organize files.
Basic Syntax
namespace Company.ProjectName
{
    class MyClass
    {
        // Class members
    }
}






# Interface
An interface in C# defines a contract that classes and structs can sign and agree to follow. It specifies what members (methods, properties, events, indexers) a type must provide. A class can implement multiple interfaces.

## Key Characteristics
Contract: An interface is a blueprint that guarantees an implementing class will have specific functionality. It acts like a "to-do list" the class must complete.

No Direct Instantiation: You cannot create an instance of an interface directly (e.g., new IMyInterface()), but you can use an interface variable to hold a reference to an object of a class that implements it.

Multiple Implementation: A class or struct can implement multiple interfaces, which is how C# achieves a form of multiple inheritance of behavior (unlike classes, which can only inherit from a single base class).

Abstraction: Interfaces help achieve loose coupling and abstraction by separating the definition of behavior from the concrete implementation, making code more modular and easier to maintain and test.

Naming Convention: By convention, interface names start with an uppercase "I" (e.g., IShape, IDisposable).

Members: Interface members are public by default and, in older C# versions, were all abstract (without a body). Beginning with C# 8.0, interfaces can define default implementations and static members.

No Fields or Constructors: Interfaces cannot contain instance fields or constructors because they define behavior, not state.


Example Usage
// 1. Declare the interface (the contract)
public interface IAnimal
{
    void MakeSound(); // Method signature without implementation
    int LegCount { get; set; } // Property signature
}

public interface IFlyable
{ void Fly(); }

// 2. A class implements the interface, providing concrete logic
public class Dog : IAnimal
{
    public int LegCount { get; set; }

    public Dog()
    { LegCount = 4; }

    // Must implement all interface methods
    public void MakeSound()
    { Console.WriteLine("Bark!");}
}

// A class can implement multiple interfaces
public class Bird : IAnimal, IFlyable
{
    public int LegCount { get; set; } = 2;
    public void MakeSound() => Console.WriteLine("Chirp!");
    public void Fly() => Console.WriteLine("Flap flap!");
}


// 3. Usage
class Program
{
    static void Main()
    {
        IAnimal myDog = new Dog(); // Reference by the interface type
        myDog.MakeSound(); // Output: Bark!
        Console.WriteLine($"Legs: {myDog.LegCount}"); // Output: Legs: 4
    }
}

Feature
Interface
Inheritance
Purpose
Define a contract
Share code & behavior
Implementation
None (just signatures)
Base class can have code
Multiple?
Yes, a class can implement multiple interfaces
No, single inheritance only
Relationship
“Can do this”
“Is a type of this”
When to use
Different classes share capabilities (flyable, serializable, etc.)
Classes naturally form a hierarchy and share common code




Class diagram
A class diagram is a type of static structure diagram that describes the structure of a system by showing the system's classes, their attributes, operations (or methods), and the relationships among objects.

ClassType :  only specify if it affects design (abstract, interface, final).

ClassVisibility : only specify if you need to show module/package-level access.

For most normal UML diagrams in a project, just the class name, properties, and methods are enough.


Graphic
ClassName
PropertyVisibility PropertyName: PropertyType
MethodVisibility MethodName(parameters): ReturnType


Car
-make: String
-model: String
-year: Int
+start(): void
+Stop(): void



PlantUML
class Player {
-string Name
+int Health
+Attack(int)
}




Parameter Directionality
In class diagrams, parameter directionality refers to the indication of the flow of information between classes through method parameters.
It helps to specify whether a parameter is an input, an output, or both. This information is crucial for understanding how data is passed between objects during method calls.

PlantUML
Type
Symbole
Objectif
Extension
<|--
Spécialisation d'une classe dans une hiérarchie
Implémentation
<|..
Réalisation d'une interface par une classe
Composition
*--
La partie ne peut exister sans le tout
Agrégation
o--
La partie peut exister indépendamment du tout
Dépendance
-->
L'objet utilise un autre objet
Dépendance
..>
Une forme plus faible de dépendance


