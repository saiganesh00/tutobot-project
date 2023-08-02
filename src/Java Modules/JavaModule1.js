import React from 'react'
import './JavaModule.css'
const JavaModule1 = () => {
  return (
    <div className='module1'>
      <div className='matter'>
            Java program is an object-oriented programming language, that means java is the collection of objects, and these objects communicate through method calls to each other to work together. Here is a brief discussion on the Classes and Objects, Method, Instance variables, syntax, and semantics of Java.
        <ol>
            <li>Class: The class is a blueprint (plan) of the instance of a class (object). It can be defined as a a logical template that share common properties and methods.</li> 
            <li> Object: The object is an instance of a class. It is an entity that has behavior and state.</li> 
            <li> Method: The behavior of an object is the method.</li> 
            <li> Instance variables: Every object has its own unique set of instance variables. The state of an object is generally created by the values that are assigned to these instance variables.</li> 
      </ol>
      
    <pre style={{fontSize:'18px'}}>
      {`
        Example:
        
            import java.util.*;
            public class GFG {
                public static void main(String[] args)
                {
                    System.out.println("GeeksforGeeks!");
                }
            }

      `}
      </pre>
      <strong>
            What is a Variable in Java?
      </strong>
      <p>
      Variable in Java is a data container that stores the data values during Java program execution. Every variable is assigned data type which designates the type and quantity of value it can hold. Variable is a memory location name of the data. The Java variables have mainly three types : Local, Instance and Static.
<br/>Types of variables
<br/>In Java, there are three types of variables:
<ol style={{listStyleType:'none'}}>
<li> Local Variables</li>
<li>Instance Variables</li>
<li>Static Variables</li>
</ol>
      </p>
        <dl>
            <dt>1)  Local Variables</dt>
            <dd>
                Local Variables are a variable that are declared inside the body of a method.
            </dd>
            <dt>2) Instance Variables</dt>
            <dd>
                Instance variables are defined without the STATIC keyword .They are defined Outside a method declaration. They are Object specific and are known as instance variables.
            </dd>
            <dt>3) Static Variables</dt>
            <dd>
                Static variables are initialized only once, at the start of the program execution. These variables should be initialized first, before the initialization of any instance variables.
            </dd>
        </dl>
        <pre style={{fontSize:'18px'}}>
      {`
       Example: Types of Variables in Java
        class tutoBot {
            static int a = 1; //static variable  
            int data = 99; //instance variable  
            void method() {
                int b = 90; //local variable  
            }
        }
      `}
      </pre>
      <strong>
        What is Data Types in Java?
      </strong>
      <p>
        Data Types in Java are defined as specifiers that allocate different sizes and types of values that can be stored in the variable or an identifier. Java has a rich set of data types. Data types in Java can be divided into two parts :
      </p>
        <dd>
            <dt>Primitive Data Types :</dt>
            <dd>which include integer, character, boolean, and float </dd>
            <dt>Non-primitive Data Types :</dt>
            <dd> which include classes, arrays and interfaces. </dd>
        </dd>
        <pre style={{fontSize:'18px'}}>
      {`
       Java  Data Types
       DataType | Default Value  |	Default size
       byte	|       0	 |          1 byte
       short	|   	0        |          2 bytes
       int	|       0	 |          4 bytes
       long	|       0L	 |          8 bytes
       float    |	0.0f	 |          4 bytes
       double	|       0.0d	 |          8 bytes
       boolean	|       false	 |          1 bit
       char	|       u000     | 	    2 bytes
      `}
      </pre>
      <strong>Java Variable Type Conversion & Type Casting</strong>
      <p>
        A variable of one type can receive the value of another type. Here there are 2 cases –
      </p>
      <ol>
        <li>
        Variable of smaller capacity is be assigned to another variable of bigger capacity. <br/>
Java Variables and Data Types<br/>
This process is Automatic, and non-explicit is known as Conversion
        </li>
        <li>
        Variable of larger capacity is be assigned to another variable of smaller capacity <br/>
            Java Variables and Data Types<br/>
        In such cases, you have to explicitly specify the type cast operator. This process is known as Type Casting.<br/>
        In case, you do not specify a type cast operator; the compiler gives an error. Since this rule is enforced by the compiler, it makes the programmer aware that the conversion he is about to do may cause some loss in data and prevents accidental losses.
        </li>
      </ol>
      </div>
    </div>
  )
}

export default JavaModule1
