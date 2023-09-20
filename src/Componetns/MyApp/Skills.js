import React from 'react';
import Navbar from './Navbar';
import './Experience.css'; // Import the CSS file
import Footer from './Footer';
import './Skills.css'

function Skills() {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <h1>Skills</h1>
        <div className="skills-list">
          <h2>1. JAVA-J2EE</h2>

          <ul>

          <li><u>Core Java Proficiency</u></li><p>
            I have a solid foundation in core Java, encompassing essential concepts like data types, variables, operators, and control structures. My expertise extends to object-oriented programming, where I create and manipulate classes and objects, ensuring clean and maintainable code.
            </p>
            <br />
            <li><u>Java Expertise</u></li>
            <p>I possess a strong command of Java programming, spanning from foundational concepts to advanced techniques. My proficiency covers a wide spectrum of Java features and technologies, making me a versatile Java developer.
            </p>
            <br />

        <li><u>Exception Handling</u></li><p>
        Exception handling is a crucial aspect of Java development, and I excel at managing exceptions effectively. I use try-catch blocks to handle errors gracefully, ensuring that my applications remain stable and robust.
        </p>
        <br />
       <li><u>Java Collections</u></li><p>
       my expertise in Java Collections empowers me to design and implement efficient data structures, manipulate data effectively, and optimize code for various scenarios. Whether it's managing large datasets, implementing custom collections, or leveraging functional programming, I bring a wealth of collection knowledge to every Java project.
       </p><br />

    <li><u>Lambda Expressions</u></li><p>
    I leverage Java's lambda expressions to write concise and expressive code. Lambda functions enable me to implement functional programming paradigms, making my code more readable and efficient.
    </p><br />
  <li><u>Database Connectivity (JDBC)</u></li><p>
  My skills extend to database interaction using Java Database Connectivity (JDBC). I can establish connections, execute SQL queries, and handle data retrieval and manipulation, ensuring seamless communication with databases.
  </p><br />
  <li><u>Servlets and JSP</u></li><p>
  I am well-versed in Java Servlets and JavaServer Pages (JSP), which are fundamental technologies for web development. I can create dynamic web applications, process user requests, and generate dynamic content to deliver engaging user experiences.
  </p><br />

  <li><u>Strong Problem-Solving Skills</u></li><p>
  My Java skills are complemented by strong problem-solving abilities. I approach complex challenges systematically, breaking them down into manageable components and crafting effective solutions.
  </p><br />
  <li><u>Design Patterns and Best Practices</u></li><p>

  I adhere to industry best practices and design patterns, ensuring that my Java code is maintainable, scalable, and follows established conventions.
  </p><br />
  <li><u> Continuous Learning</u></li><p>

  The field of Java development is ever-evolving, and I am committed to continuous learning. I stay updated with the latest Java advancements, frameworks, and libraries to deliver cutting-edge solutions.

  Overall, my Java skills encompass a wide range of topics, from foundational concepts to advanced technologies, making me a valuable asset for Java-based projects. Whether it's building robust applications, handling databases, or crafting dynamic web experiences, I bring a wealth of expertise to the table.
        </p><br />

          </ul>
          <h2>2. Web Technology</h2>
          <ul>
            <li><u> HTML5</u></li>
            <li><u> CSS3</u></li>
            <li><u>Javascript</u></li>
            <li><u><strong>React</strong></u></li>
            <li><u>Angular(basics)</u></li>
          </ul><br />

          <ul>
         <h2>3.SQL</h2>
         <p>SQL Basics: Well-acquainted with SQL fundamentals, including data types, indexing, transactions, and creating and managing database objects (e.g., tables, views, procedures).
         SQL Proficiency: Proficient in SQL, with expertise in writing complex queries to extract, manipulate, and analyze data effectively.

        Statement Execution: Skilled at executing SQL statements for data retrieval, insertion, updating, and deletion.

        Joins: Experienced in using SQL JOIN operations to combine data from multiple tables, including INNER, LEFT, RIGHT, and FULL JOINs.

        Operators: Well-versed in using SQL operators (e.g., comparison, logical, arithmetic) to perform various operations on data.

        RDBMS Knowledge: Familiar with Relational Database Management Systems (RDBMS) principles and practices, ensuring data consistency and integrity.

        Subqueries: Proficient in writing subqueries to retrieve data from one query's result and use it in another query, enhancing data retrieval capabilities.

        Data Functions: Skilled in using SQL functions (e.g., aggregate, scalar, date, string) to perform calculations and transformations on data.

        Data Integrity: Knowledgeable about maintaining data integrity through constraints (e.g., PRIMARY KEY, FOREIGN KEY, UNIQUE) and validation rules.</p>
        </ul><br />  
        <ul>
        <li><h2>Continuous Learning</h2></li>
          </ul>
        </div>
      </div>
      <div className="logo">
        <img src="/Images/Rupesh.jpeg" alt="Logo" />
      </div>
      <div className="message-box">
        <p>Your Message Here...
        <Footer/></p>
      </div>
    </>
  );
}

export default Skills;
