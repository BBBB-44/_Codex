---
---

c# array

# single dimension array

In C#, an array is a structure that stores a fixed-size sequential collection of elements of the same type. You can think of it as a container that holds a specific number of "slots" for data, like a row of lockers.

Starts at 0, ends at Length - 1.

## Fixed Size (Empty): Use this when you know how many items you need but don't have the data yet.
```csharp
int[] numbers = new int[5]; // Creates an array with 5 slots, all initialized to 0.
```
## With Initial Values: Use curly braces {} to set values immediately.

```csharp
string[] fruits = { "Apple", "Banana", "Orange" };
```

## Multidimensional Arrays

A multidimensional array is basically an array of arrays.

To create a 2D array, add each array within its own set of curly braces, and insert a comma (,) inside the square brackets:

```chsarp
int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
```

in the above example, the row 0 will contain 1,4,2 and the column 0 will contain 1 and 3.

|   | COLUMN 0 | COLUMN 1 | COLUMN 2 |
| - | - | - | - |
| ROW 0 | 1 | 4 | 2 |
| ROW 1 | 3 | 6 | 8 |

|       | COLUMN 0 | COLUMN 1 | COLUMN 2 |
| :---: | :------: | :------: | :------: |
| ROW 0 | 1        | 4        | 2        |
| ROW 1 | 3        | 6        | 8        |

Access Elements of a 2D Array

To access an element of a two-dimensional array, you must specify two indexes: one for the array, and one for the element inside that array. Or better yet, with the table visualization in mind; one for the row and one for the column (see example below).

```csharp
int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
Console.WriteLine(numbers[0, 2]);  // Outputs 2
```
