import React from 'react'
import './JavaModule.css'
const JavaModule2 = () => {
  return (
    <div className='module2'>
      <div className='matter'>
        <strong>Operators in Java</strong>
        <p>
          Operator in Java is a symbol that is used to perform operations. For example: +, -, *, / etc.
        </p>
        <p>
        There are many types of operators in Java which are given below:
        <br/>
        Unary Operator,<br/>
        Arithmetic Operator, <br/>
        Shift Operator, <br/>
        Relational Operator, <br/>
        Bitwise Operator, <br/>
        Logical Operator, <br/>
        Ternary Operator and <br/>
        Assignment Operator.
        </p>
        <b> 
          Java Operator Precedence
        </b>
        <pre>
          {`
Operator Type	        Category	        Precedence
---------------------------------------------------------------
  Unary	                postfix	                   expr++ expr--
                        prefix	                   ++expr --expr +expr -expr ~ !
  Arithmetic	        multiplicative	           * / %
                        additive	           + -
  Shift	                shift	                   << >> >>>
  Relational	        comparison                 < > <= >= instanceof
                        equality	           == !=
  Bitwise	        bitwise AND	           &
                        bitwise exclusive OR	   ^
                        bitwise inclusive OR	   |
  Logical              	logical AND	           &&
                        logical OR	           ||
  Ternary	        ternary	                   ? :
  Assignment	        assignment	           = += -= *= /= %= &= ^= |= <<= >>= >>>=

          `}
        </pre>
        <strong>
          Java Arithmetic Operators
        </strong>
        <pre>
          {`
public class OperatorExample{  
        public static void main(String args[]){  
              int a=10;  
              int b=5;  
              System.out.println(a+b);//15  
              System.out.println(a-b);//5  
              System.out.println(a*b);//50  
              System.out.println(a/b);//2  
              System.out.println(a%b);//0  
        }
}  
Output:
    15
    5
    50
    2
    0
 `}
        </pre>
      <strong>
        Java Control Statements | Control Flow in Java
      </strong>
      <p>
        Java compiler executes the code from top to bottom. The statements in the code are executed according to the order in which they appear. However, Java provides statements that can be used to control the flow of Java code. Such statements are called control flow statements. It is one of the fundamental features of Java, which provides a smooth flow of program.
      </p>
      <p>
        Java provides three types of control flow statements.
      </p>
      <pre>
        {`
        Decision Making statements
          if statements
          switch statement
          Loop statements
          Jump statements
          break statement
          continue statement
        `}
        <ul>
          <li>
            <strong>If Statement:</strong>
            <p>
              In Java, the "if" statement is used to evaluate a condition. The control of the program is diverted depending upon the specific condition. The condition of the If statement gives a Boolean value, either true or false. In Java, there are four types of if-statements given below.
            </p>
            <ul>
              <li>
                <strong>Simple if statement:</strong>
                <p>
                  It is the most basic statement among all control flow statements in Java. It evaluates a Boolean expression and enables the program to enter a block of code if the expression evaluates to true.
                </p>
                <p>
                  Syntax of if statement is given below.
                </p>
                <pre>
                  {
                    `
        if(condition) {    
          statement 1; //executes when condition is true   
          }  
                    `
                  }
                </pre>
              </li>
              <li>
                <strong>if-else statement : </strong>
                <p>
                The if-else statement is an extension to the if-statement, which uses another block of code, i.e., else block. The else block is executed if the condition of the if-block is evaluated as false.
                </p>
                <p>
                  Syntax :
                </p>
                <pre>
                  {
                    `
      if(condition) {    
        statement 1; //executes when condition is true   
        }  
        else{  
        statement 2; //executes when condition is false   
        }   
                    `
                  }
                </pre>
              </li>
              <li>
                <strong>if-else-if ladder:</strong>
                <p>
                The if-else-if statement contains the if-statement followed by multiple else-if statements. In other words, we can say that it is the chain of if-else statements that create a decision tree where the program may enter in the block of code where the condition is true. We can also define an else statement at the end of the chain.
               </p>
                <p>
                  Syntax :
                </p>
                <pre>
                  {
                    `
      if(condition 1) {    
        statement 1; //executes when condition 1 is true   
        }  
        else if(condition 2) {  
        statement 2; //executes when condition 2 is true   
        }  
        else {  
        statement 2; //executes when all the conditions are false   
        }   
                    `
                  }
                </pre>
              </li>
              <li>
                <strong>Nested if-statement : </strong>
                <p>
                In nested if-statements, the if statement can contain a if or if-else statement inside another if or else-if statement.
                </p>
                <p>
                  Syntax :
                </p>
                <pre>
                  {
                    `
      if(condition 1) {    
            statement 1; //executes when condition 1 is true   
            if(condition 2) {  
                  statement 2; //executes when condition 2 is true   
            }  
            else{  
                  statement 2; //executes when condition 2 is false   
            }  
        }  
                    `
                  }
                </pre>
              </li>
            </ul>
          </li>
          <li>
          <strong>Switch Statement:</strong>
          <p>
            In Java, Switch statements are similar to if-else-if statements. The switch statement contains multiple blocks of code called cases and a single case is executed based on the variable which is being switched. The switch statement is easier to use instead of if-else-if statements. It also enhances the readability of the program.
          </p>
          <dl>
            <dt> Points to be noted about switch statement: </dt>
            <dd>
            The case variables can be int, short, byte, char, or enumeration. String type is also supported since version 7 of Java Cases cannot be duplicate <br/>
            Default statement is executed when any of the case doesn't match the value of expression. It is optional. <br/>
            Break statement terminates the switch block when the condition is satisfied. <br/>
            It is optional, if not used, next case is executed. <br/>
            While using switch statements, we must notice that the case expression will be of the same type as the variable. However, it will also be a constant value.
            </dd>
          </dl>
          <p>Syntax</p>
          <pre>
            {
              `
              switch (expression){  
                case value1:  
                    statement1;  
                    break;  
                    .  
                    .  
                    .  
                case valueN:  
                    statementN;  
                    break;  
                default:  
                    default statement;  
            }  
              `
            }
          </pre>
          </li>
          <li>
            <strong> Loop Statements </strong>
            <p>
              In programming, sometimes we need to execute the block of code repeatedly while some condition evaluates to true. However, loop statements are used to execute the set of instructions in a repeated order. The execution of the set of instructions depends upon a particular condition.
            </p>
            <p>
              In Java, we have three types of loops that execute similarly. However, there are differences in their syntax and condition checking time.
            </p>
            <pre>
              {`
  for loop 
  while loop
  do-while loop
                `}
            </pre>
            <ul>
              <li>
                <strong>For loop : </strong>
                <p>
                  In Java, for loop is similar to C and C++. It enables us to initialize the loop variable, check the condition, and increment/decrement in a single line of code. We use the for loop only when we exactly know the number of times, we want to execute the block of code.
                </p>
                <p>Syntax</p>
                <pre>
                  {`
    for(initialization, condition, increment/decrement) {    
            //block of statements    
      }
      
                  `}
                </pre>
              </li>
              <li>
                <strong>For-each : </strong>
                <p>
                  Java provides an enhanced for loop to traverse the data structures like array or collection. In the for-each loop, we don't need to update the loop variable. The syntax to use the for-each loop in java is given below.
                 </p>
                <p>Syntax</p>
                <pre>
                  {`
    for(data_type var : array_name/collection_name){    
          //statements    
      } 
      
                  `}
                </pre>
              </li>
              <li>
                <strong>while loop : </strong>
                <p>
                The while loop is also used to iterate over the number of statements multiple times. However, if we don't know the number of iterations in advance, it is recommended to use a while loop. Unlike for loop, the initialization and increment/decrement doesn't take place inside the loop statement in while loop.
                 </p>
                 <p>
                 It is also known as the entry-controlled loop since the condition is checked at the start of the loop. If the condition is true, then the loop body will be executed; otherwise, the statements after the loop will be executed.
                </p>
                <p>Syntax</p>
                <pre>
                  {`
    while(condition){    
            //looping statements    
      } 
      
                  `}
                </pre>
              </li>
              <li>
                <strong>do-while loop : </strong>
                <p>
                The do-while loop checks the condition at the end of the loop after executing the loop statements. When the number of iteration is not known and we have to execute the loop at least once, we can use do-while loop.
              </p>
                 <p>
                 It is also known as the exit-controlled loop since the condition is not checked in advance. The syntax of the do-while loop is given below.
                 </p>
                <p>Syntax</p>
                <pre>
                  {`
    do     
    {    
          //statements    
    } while (condition);   
      
                  `}
                </pre>
              </li>
            </ul>
          </li>
        </ul>
      </pre>
      <ul>
            <li>
              <strong>
                  Jump Statements
              </strong>
              <p>
                Jump statements are used to transfer the control of the program to the specific statements. In other words, jump statements transfer the execution control to the other part of the program. There are two types of jump statements in Java, i.e., break and continue.
              </p>
            </li>
            <li>
              <strong>
                Java break statement
              </strong>
              <p>
                As the name suggests, the break statement is used to break the current flow of the program and transfer the control to the next statement outside a loop or switch statement. However, it breaks only the inner loop in the case of the nested loop.
              </p>
              <p>
                The break statement cannot be used independently in the Java program, i.e., it can only be written inside the loop or switch statement.
              </p>
              <p>
                Consider the following example in which we have used the break statement with the for loop.
              </p>
              <pre>
                {`
      public class BreakExample {  
          public static void main(String[] args) {
            for(int i = 0; i<= 10; i++) {  
              System.out.println(i);  
              if(i==6) {  
                break;  
              }  
            }  
          }  
        }  
        Output:
        0
        1
        2
        3
        4
        5
        6
                `}
              </pre>
            </li>
            <li>
              <strong>Java continue statement</strong>
              <p>
                Unlike break statement, the continue statement doesn't break the loop, whereas, it skips the specific part of the loop and jumps to the next iteration of the loop immediately.
              </p>
              <p>
                Consider the following example to understand the functioning of the continue statement in Java.
              </p>
              <pre>
                {`
      public class ContinueExample {  
            public static void main(String[] args) {  
              for(int i = 0; i<= 2; i++) {  
                for (int j = i; j<=5; j++) {  
                  if(j == 4) {  
                      continue;  
                  }  
                  System.out.println(j);  
                }  
              }  
            }  
        }  
        Output:
        0
        1
        2
        3
        5
        1
        2
        3
        5
        2
        3
        5  
                `}
              </pre>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default JavaModule2
