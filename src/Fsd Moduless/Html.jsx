import React from "react";

let Html = () =>{
    return(
        <>
            <div className='module1'>
                <div className='matter'>
                    <p>All HTML documents must start with a document type declaration: {`<!DOCTYPE html>`}.<br/>
                    The HTML document itself begins with {'<html>'} and ends with {'</html>'}.<br/>
                    The visible part of the HTML document is between {'<body>'} and {'</body>'}.
                    
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        Example
                        <!DOCTYPE html>
                        <html>
                        <body>
                        
                        <h1>My First Heading</h1>
                        <p>My first paragraph.</p>
                        
                        </body>
                        </html>
                    `}
                    </pre>
                    <p><strong>The {'<!DOCTYPE>'} Declaration:</strong><br/>
                    The {'<!DOCTYPE>'} declaration represents the document type, and helps browsers to display web pages correctly.<br/>
                    It must only appear once, at the top of the page (before any HTML tags).<br/>
                    The {'<!DOCTYPE>'} declaration is not case sensitive.<br/>
                    The {'<!DOCTYPE>'} declaration for HTML5 is:<br/>
                    {'<!DOCTYPE html>'}
                    </p>
                    <strong>HTML Headings:</strong>
                    <p>HTML headings are defined with the {'<h1>'} to {'<h6>'} tags.<br/>
                    {'<h1>'} defines the most important heading. {'<h6>'} defines the least important heading: <br/>
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <h1>This is heading 1</h1>
                        <h2>This is heading 2</h2>
                        <h3>This is heading 3</h3>  
                       
                    `}
                    </pre>
                    <p><strong>HTML Paragraphs</strong><br/>HTML paragraphs are defined with the {'<p>'} tag:</p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        Example:
                       <p>This is a paragraph.</p>
                       <p>This is another paragraph.</p>                        
                       
                    `}</pre>
                    <strong>HTML Links</strong>
                    <p>HTML links are defined with the {'<a>'} tag:</p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <a href="https://www.w3schools.com">This is a link</a>
                        The link's destination is specified in the href attribute.
                    `}</pre>
                    <strong>HTML Images</strong>
                    <p>HTML images are defined with the {'<img>'} tag.<br/>
                    The source file {'(src)'}, alternative text {'(alt)'}, width, and height are provided as attributes:<br/>
                    Example:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">                       
                    `}</pre>
                    <strong>HTML Elements:</strong>
                    <p>An HTML element is defined by a start tag, some content, and an end tag.</p>
                    <p>The HTML element is everything from the start tag to the end tag:
                    {'<tagname>'}Content goes here...{'</tagname>'}<br/>Examples of some HTML elements:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <h1>My First Heading</h1>
                        <p>My first paragraph.</p>
                        Start tag	Element content	End tag
                        <h1>	My First Heading	</h1>
                        <p>	My first paragraph.	</p>
                        <br>	none	none
                    `}</pre> 
                    <strong>HTML Attributes</strong>
                    <p>HTML attributes provide additional information about HTML elements.</p>
                    <p>
                   <strong> HTML Attributes</strong><br/>
                    All HTML elements can have attributes<br/>
                    Attributes provide additional information about elements<br/>
                    Attributes are always specified in the start tag<br/>
                    Attributes usually come in name/value pairs like: name="value"<br/></p>
                    <strong>The style Attribute</strong>
                    <p>
                    The style attribute is used to add styles to an element, such as color, font, size, and more.<br/>Example
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <p style="color:red;">This is a red paragraph.</p>
                    `}</pre>
                    <strong>The lang Attribute</strong>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <!DOCTYPE html>
                        <html lang="en">
                        <body>
                        ...
                        </body>
                        </html>
                       
                    `}</pre>
                    <p>
                    Country codes can also be added to the language code in the lang attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.
                    </p>
                    <strong>The title Attribute</strong>
                    <p>The title attribute defines some extra information about an element.<br/>
                    The value of the title attribute will be displayed as a tooltip when you mouse over the element:<br/>
                    Example:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <p title="toolup">hello</p>
                       
                    `}</pre>
                    <strong>HTML Text Formatting:</strong>
                    <p>HTML contains several elements for defining text with a special meaning.</p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <b> - Bold text
                        <strong> - Important text
                        <i> - Italic text
                        <em> - Emphasized text
                        <mark> - Marked text
                        <small> - Smaller text
                        <del> - Deleted text
                        <ins> - Inserted text
                        <sub> - Subscript text
                        <sup> - Superscript text
                        HTML <b> and <strong> Elements
                       
                    `}</pre>
                    <strong>HTML Links</strong>
                    <p>
                    HTML Links - Hyperlinks <br/>
                    HTML links are hyperlinks.<br/>
                    You can click on a link and jump to another document.<br/>
                    When you move the mouse over a link, the mouse arrow will turn into a little hand.<br/>
                    Example:<br/>
                    HTML Links - Syntax<br/>The HTML{'<a>'}  tag defines a hyperlink. It has the following syntax:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        
                        <a href="url">link text</a>
                        <a href="https://www.w3schools.com/">Visit W3Schools.com!</a>
                    `}</pre>
                    <strong>HTML Tables</strong>
                    <p>
                    <strong>Table Cells</strong>
                    Each table cell is defined by a{'<td>'}  and a {'</td>'} tag.<br/>td stands for table data.<br/>
                    Everything between {'<td>'} and {'</td>'} are the content of the table cell.<br/>
                    <strong>Table Rows</strong><br/>
                    Each table row starts with a {'<tr>'} and ends with a {'</tr>'} tag.<br/>
                    tr stands for table row.<br/>
                    You can have as many rows as you like in a table; just make sure that the number of cells are the same in each row.<br/>
                    Note: There are times when a row can have less or more cells than another. <br/>
                    <strong>Table Headers</strong>
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        table, th, td {
                            border: 1px solid black;
                          }
                          Example
                            table, th, td {
                            border: 1px solid black;
                            border-collapse: collapse;
                            }
                       
                    `}</pre>
                    <p>
                        HTML Table Colspan & Rowspan<br/>
                        HTML Table - Colspan<br/>
                        To make a cell span over multiple columns, use the colspan attribute:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        <table>
                        <tr>
                          <th colspan="2">Name</th>
                          <th>Age</th>
                        </tr>
                        <tr>
                          <td>Jill</td>
                          <td>Smith</td>
                          <td>43</td>
                        </tr>
                        <tr>
                          <td>Eve</td>
                          <td>Jackson</td>
                          <td>57</td>
                        </tr>
                      </table>
                       
                    `}</pre>
                    <strong>HTML List</strong>
                    <p><strong>Unordered HTML List</strong><br/>
                    An unordered list starts with the {'<ul>'} tag. Each list item starts with the {'<li>'} tag.<br/>
                    Example:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                      <ul>
                      <li>Coffee</li>
                      <li>Tea</li>
                      <li>Milk</li>
                    </ul>  
                       
                    `}</pre>
                    <p><strong>ordered HTML List</strong><br/>
                    An ordered list starts with the {'<ol>'} tag. Each list item starts with the {'<li>'} tag.<br/>
                    Example:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                      <ol>
                      <li>Coffee</li>
                      <li>Tea</li>
                      <li>Milk</li>
                    </ol>  
                       
                    `}</pre>
                    <p><strong>discription HTML List</strong><br/>
                    An ordered list starts with the {'<dl>'} tag. Each list item starts with the {'<dd>'} tag.<br/>
                    Example:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                     <dl>
                     <dt>Coffee</dt>
                     <dd>- black hot drink</dd>
                     <dt>Milk</dt>
                     <dd>- white cold drink</dd>
                   </dl>
                       
                    `}</pre>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        HTML List Tags
                        Tag	Description
                        <ul>	Defines an unordered list
                        <ol>	Defines an ordered list
                        <li>	Defines a list item
                        <dl>	Defines a description list
                        <dt>	Defines a term in a description list
                        <dd>	Describes the term in a description list
                       
                    `}</pre> 
                    <strong>HTML Iframes</strong>
                    <p>
                    An HTML iframe is used to display a web page within a web page.<br/>HTML Iframe Syntax:<br/>The HTML {'<iframe>'} tag specifies an inline frame.<br/>An inline frame is used to embed another document within the current HTML document.
                    <br/>syntax:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                      <iframe src="url" title="description"></iframe>                       
                    `}</pre>
                    <strong>HTML Layout Elements and Techniques</strong>
                    <p>
                    HTML has several semantic elements that define the different parts of a web page:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        HTML5 Semantic Elements	
                        <header> - Defines a header for a document or a section
                        <nav> - Defines a set of navigation links
                        <section> - Defines a section in a document
                        <article> - Defines an independent, self-contained content
                        <aside> - Defines content aside from the content (like a sidebar)
                        <footer> - Defines a footer for a document or a section
                        <details> - Defines additional details that the user can open and close on demand
                        <summary> - Defines a heading for the <details> element
                    `}</pre>
                    <strong>Frameworks</strong>
                    <p>
                    If you want to create your layout fast, you can use a CSS framework<br/><strong>CSS Float Layout</strong><br/>It is common to do entire web layouts using the CSS float property.<br/> Float is easy to learn - you just need to remember how the float and clear properties work.<br/>
                     Disadvantages: Floating elements are tied to the document flow, which may harm the flexibility.<br/><strong>CSS Flexbox Layout</strong><br/>
                    Use of flexbox ensures that elements behave predictably when the page layout must accommodate different screen sizes and different display devices.
                    <br/><strong>CSS Grid Layout</strong><br/>
                    The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                    </p>
                    <strong>Semantic Elements</strong>
                    <p>Semantic elements = elements with a meaning.</p>
                    <strong>What are Semantic Elements?</strong>
                    <p>
                    A semantic element clearly describes its meaning to both the browser and the developer.<br/>
                    Examples of non-semantic elements: {'<div>'} and{' <span>'} - Tells nothing about its content.<br/>
                    Examples of semantic elements: {'<form>'}, {'<table>'}, and {'<article>'} - Clearly defines its content.<br/>
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                      Tag	Description
                      <article>	Defines independent, self-contained content
                      <aside>	Defines content aside from the page content
                      <details>	Defines additional details that the user can view or hide
                      <figcaption>	Defines a caption for a <figure> element
                      <figure>	Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
                      <footer>	Defines a footer for a document or section
                      <header>	Specifies a header for a document or section
                      <main>	Specifies the main content of a document
                      <mark>	Defines marked/highlighted text
                      <nav>	Defines navigation links
                      <section>	Defines a section in a document
                      <summary>	Defines a visible heading for a <details> element
                      <time>	Defines a date/time
                       
                    `}</pre>
                    <strong>HTML Entities</strong>
                    <p>Some characters are reserved in HTML.<br/>
                    If you use the less than {' (<)'} or greater than{' (>)'} signs in your text, the browser might mix them with tags.<br/>
                    Character entities are used to display reserved characters in HTML.<br/>A character entity looks like this:
                    </p>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        &entity_name;
                        OR
                        &#entity_number;
                        To display a less than sign (<) we must write: &lt; or &#60;
                        Advantage of using an entity name: An entity name is easy to remember.
                        Disadvantage of using an entity name: Browsers may not support all entity names, but the support for entity numbers is good.
                       
                    `}</pre> 
                    <pre style={{fontSize:'18px'}}>
                    {`
                        Some Useful HTML Character Entities
                        Result	Description	Entity Name	Entity Number	Try it
                        non-breaking space	&nbsp;	&#160;	
                        <	less than	&lt;	&#60;	
                        >	greater than	&gt;	&#62;	
                        &	ampersand	&amp;	&#38;	
                        "	double quotation mark	&quot;	&#34;	
                        '	single quotation mark (apostrophe)	&apos;	&#39;	
                        ¢	cent	&cent;	&#162;	
                        £	pound	&pound;	&#163;	
                        ¥	yen	&yen;	&#165;	
                        €	euro	&euro;	&#8364;	
                        ©	copyright	&copy;	&#169;	
                        ®	registered trademark	&reg;	&#174;
                  `}</pre>
                  <strong>forms</strong>
                  <p>
                  The HTML {'<form>'} element is used to create an HTML form for user input:
                  <br/>{'<form>'}</p>
                  <pre style={{fontSize:'18px'}}>
                    {`
                        <input type="text">	Displays a single-line text input field
                        <input type="radio">	Displays a radio button (for selecting one of many choices)
                        <input type="checkbox">	Displays a checkbox (for selecting zero or more of many choices)
                        <input type="submit">	Displays a submit button (for submitting the form)
                        <input type="button">	Displays a clickable button     
                        Example
                        A form with input fields for text:
                        <form>
                            <label for="fname">First name:</label><br>
                            <input type="text" id="fname" name="fname"><br>
                            <label for="lname">Last name:</label><br>
                            <input type="text" id="lname" name="lname">
                        </form>                  
                    `}</pre>
                    <strong>Radio Button</strong>
                    <pre style={{fontSize:'18px'}}>
                    {`
                      The <input type="radio"> defines a radio button.
                      Radio buttons let a user select ONE of a limited number of choices.
                      Example
                      A form with radio buttons:                      
                      <p>Choose your favorite Web language:</p>
                      <form>
                            <input type="radio" id="html" name="fav_language" value="HTML">
                            <label for="html">HTML</label><br>
                            <input type="radio" id="css" name="fav_language" value="CSS">
                            <label for="css">CSS</label><br>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                            <label for="javascript">JavaScript</label>
                      </form> 
                    `}</pre>
                    <strong>The Submit Button</strong>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        The <input type="submit"> defines a button for submitting the form data to a form-handler.
                        The form-handler is typically a file on the server with a script for processing input data.
                        The form-handler is specified in the form's action attribute.
                        Example
                        A form with a submit button:
                        <form action="/action_page.php">
                          <label for="fname">First name:</label><br>
                          <input type="text" id="fname" name="fname" value="John"><br>
                          <label for="lname">Last name:</label><br>
                          <input type="text" id="lname" name="lname" value="Doe"><br><br>
                          <input type="submit" value="Submit">
                        </form>                       
                    `}</pre>
                    <strong>The Name Attribute for {'<input>'}</strong>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        
                        Notice that each input field must have a name attribute to be submitted.
                        
                        If the name attribute is omitted, the value of the input field will not be sent at all.
                        
                        Example
                        This example will not submit the value of the "First name" input field: 
                        
                        <form action="/action_page.php">
                          <label for="fname">First name:</label><br>
                          <input type="text" id="fname" value="John"><br><br>
                          <input type="submit" value="Submit">
                        </form>
                    `}</pre>
                     <strong> HTML Form Elements</strong>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        =>The HTML <form> Elements
                        The HTML <form> element can contain one or more of the following form elements:
                        
                        <input>
                        <label>
                        <select>
                        <textarea>
                        <button>
                        <fieldset>
                        <legend>
                        <datalist>
                        <output>
                        <option>
                        <optgroup>
                        The <input> Element
                        One of the most used form element is the <input> element.
                        
                        The <input> element can be displayed in several ways, depending on the type attribute.
                        
                        Example
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname">
                        All the different values of the type attribute are covered in the next chapter: HTML Input Types.
                        
                        =>The <label> Element
                        The <label> element defines a label for several form elements.
                        The <label> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.
                        The <label> element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <label> element, it toggles the radio button/checkbox.
                        The for attribute of the <label> tag should be equal to the id attribute of the <input> element to bind them together.
                        
                        =>The <select> Element
                        The <select> element defines a drop-down list:
                        
                        Example
                        <label for="cars">Choose a car:</label>
                        <select id="cars" name="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="fiat">Fiat</option>
                          <option value="audi">Audi</option>
                        </select>
                        The <option> elements defines an option that can be selected.
                        By default, the first item in the drop-down list is selected.
                        To define a pre-selected option, add the selected attribute to the option:
                        
                        Example
                        <option value="fiat" selected>Fiat</option>
                        Visible Values:
                        Use the size attribute to specify the number of visible values:
                        
                        Example
                        <label for="cars">Choose a car:</label>
                        <select id="cars" name="cars" size="4" multiple>
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="fiat">Fiat</option>
                          <option value="audi">Audi</option>
                        </select>
                        The <textarea> Element
                        The <textarea> element defines a multi-line input field (a text area):
                        
                        Example
                        <textarea name="message" rows="10" cols="30">
                        The cat was playing in the garden.
                        </textarea>
                    `}</pre>
                    <strong> 
                    The {'<button>'} Element
                    </strong>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        The <button> element defines a clickable button:
                        Example
                        <button type="button" onclick="alert('Hello World!')">Click Me!</button>
                        This is how the HTML code above will be displayed in a browser:
                        
                        Click Me!
                        Note: Always specify the type attribute for the button element. Different browsers may use different default types for the button element.
                       
                    `}</pre>
                    <strong>Canvas Graphics</strong>
                    <pre style={{fontSize:'18px'}}>
                    {`
                       The HTML <canvas> element is used to draw graphics on a web page.
                       The graphic to the left is created with <canvas>. It shows four elements: a red rectangle, a gradient rectangle, a multicolor rectangle, and a multicolor text.                      
                    `}</pre>
                    <strong>What is HTML Canvas?</strong>
                    <pre style={{fontSize:'18px'}}>
                    {`
                        What is HTML Canvas?
                        The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript.
                        The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics.
                        Canvas has several methods for drawing paths, boxes, circles, text, and adding images.
                        Canvas Examples
                        A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content.                       
                    `}</pre>

                    <pre style={{fontSize:'18px'}}>
                    {`
                        <canvas id="myCanvas" width="200" height="100"></canvas>
                        Note: Always specify an id attribute (to be referred to in a script), and a width and height attribute to define the size of the canvas. To add a border, use the style attribute.
                        Add a JavaScript
                        After creating the rectangular canvas area, you must add a JavaScript to do the drawing.

                        Here are some examples:

                        =>Draw a Line
                        Example
                        <script>
                        var c = document.getElementById("myCanvas");
                        var ctx = c.getContext("2d");
                        ctx.moveTo(0, 0);
                        ctx.lineTo(200, 100);
                        ctx.stroke();
                        </script>

                        =>Draw a Circle
                        Example
                        <script>
                        var c = document.getElementById("myCanvas");
                        var ctx = c.getContext("2d");
                        ctx.beginPath();
                        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
                        ctx.stroke();
                        </script>
                       
                    `}</pre>
                </div>
            </div>

        </>
    );
}
export default Html;