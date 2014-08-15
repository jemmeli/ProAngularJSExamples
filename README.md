# ProAngularJSExamples
  
  <strong><u>NOTE</u>:</strong> This is a "work-in-progress" 
  !["Work In Progress"](./readme_images/wip.jpg?raw=true "Work In Progress"). Add To Cart needs implementation.
  
  - This module provides ProAngularJS examples obtained from "http://www.apress.com/9781430264484". 
  - It uses "deployd" -> "http://www.deployd.com/".  This is a rapid prototyping/deployment tool that is useful when building mongoDB, express, AngularS, node (MEAN) software stack applications
  - It is suggested you obtain a copy of "http://www.apress.com/9781430264484" to get the most out of this example.

## Table of Contents
1. Development Software Stack
2. File Structure
3. Installation
4. Examples
5. Developer(s)

### Development Software Stack
- Git
- Node (version 0.10 or above; should include NPM)
- IDE - (e.g., NodeEclipse, IntelliJ, ...etc.)
- deployd - "http://www.deployd.com/"
- bower - "https://github.com/bower/bower"

### File Structure

	* `.../ProAngularJSExamples/package.json` - dependencies
	* '.../ProAngularJSExamples/deployed' - rapid development tool
	* '.../ProAngularJSExamples/public' - application files 

### Installation

1.  Clone "ProAngularJSExamples" repository using a Git UI (e.g., SourceTree) or from command line.

	If from command line, change to the root folder in which you'd like to clone the repository, type "git clone git@github.com:Bridgevine/ProAngularJSExamples.git"
	
2. goto -> "http://www.deployd.com/" and install "deployd" for your OS.

3. Change to the "ProAngularJSExamples" dir/folder
	
4. From command line prompt, type "npm install -g bower"
	
5. From command line prompt, type "bower install"

6. From command line prompt, type "npm install".

7. Test development Environment:

	1. Start Web Server by typing "node app.js"
	
	2. From Browser goto -> "localhost:5000/test.html"  you should see:
	
	<b>If pass</b>:
	
	!["test pass"](./readme_images/test_pass.png?raw=true "Development Environment Test Passed")
	
	<b>If fail</b>:
	
	!["test fail"](./readme_images/test_fail.png?raw=true "Development Environment Test Failed")
	
### Examples

- First AngularJS App (TO DO LIST):

	1. Start Web Server by typing "node app.js"
	
	2. From Browser goto -> "localhost:5000/todo.html"  you should see:
	
	!["to do"](./readme_images/to_do_list.png?raw=true "To Do List")
	
- SportsStore App

	1.  Create "deployd" resources
		
		From "...\ProAngularJSExamples\deployd" folder command line prompt, type "dpd create sportsstore"
		
	2.  Start "deployed" server
		
		Change to ""...\ProAngularJSExamples\deployd" folder and type "dpd" 
		
		This should produce the following console output:
		
		`starting deployd v0.6.1...
		listening on port 2403
		type help for a list of commands
		dpd >
				
		Then at the deployd prompt "dpd >" type "dashboard" this should open a browser window that looks like this:
		
		!["dashboard"](./readme_images/dpd_dashboard.png?raw=true "dpd dashboard")
				
	3. Using "deployd" dashboard, add RESOURCES
		
		1. Add "ORDERS" "COLLECTION", "PROPERTIES", and "EVENTS"

			1. COLLECTION - Next to "RESOURCES", Select "+" then "Collection"
			!["ADD COLLECTION"](./readme_images/add_collection.png?raw=true "ADD COLLECTION")
			type "/orders" then, press "Create" button
			!["ORDERS COLLECTION"](./readme_images/orders_collection.png?raw=true "ORDERS COLLECTION")
		
			2. PROPERTIES
			!["ORDERS PROPERTIES"](./readme_images/orders_properties.png?raw=true "ORDERS PROPERTIES")
							
			3. EVENTS - cut and paste -> 
			
			`if(me===undefined || me.username!="admin"){cancel("No authorization", 401);}`
			
			into the following "EVENTS": "ON GET", "ON PUT" and "ON DELETE"
			!["ORDERS EVENTS"](./readme_images/orders_events.png?raw=true "ORDERS EVENTS")
		
		2. Add "PRODUCTS" "COLLECTION", "PROPERTIES", "DATA" and "EVENTS"

			1. COLLECTION - Next to "RESOURCES", Select "+" then "Collection"
			!["ADD COLLECTION SCREEN"](./readme_images/add_collection.png?raw=true "ADD COLLECTION SCREEN")
			type "/products" then, press "Create" button
			!["PRODUCTS COLLECTION"](./readme_images/products_collection.png?raw=true "PRODUCTS COLLECTION")
		
			2. PROPERTIES
			!["PRODUCTS PROPERTIES"](./readme_images/products_properties.png?raw=true "PRODUCTS PROPERTIES")

			3. DATA
			!["PRODUCTS DATA"](./readme_images/products_data.png?raw=true "PRODUCTS DATA")
							
			4. EVENTS - cut and paste ->
			
			`if(me===undefined || me.username!="admin"){cancel("No authorization", 401);}`
						
			into the following "EVENTS": "ON PUT" and "ON DELETE"
			!["PRODUCTS EVENTS"](./readme_images/products_events.png?raw=true "PRODUCTS EVENTS")
						
		3. Add "USERS" "COLLECTION", "PROPERTIES" and "DATA"

			1. COLLECTION - Next to "RESOURCES", Select "+" then "Users Collection"
			!["ADD COLLECTION SCREEN"](./readme_images/add_collection.png?raw=true "ADD COLLECTION SCREEN")
			press "Create" button
			!["USERS COLLECTION"](./readme_images/users_collection.png?raw=true "USERS COLLECTION")
		
			2. PROPERTIES - <strong><u>NOTE</u>:</strong> I had to include an email field to get login authentication to work.
			!["USERS PROPERTIES"](./readme_images/users_properties.png?raw=true "USERS PROPERTIES")

			3. DATA - Enter "username" = "admin", "password" = "secret" and "email" = "admin@test.com"
			!["USERS DATA"](./readme_images/users_data.png?raw=true "USERS DATA")

		4. Run Application
			
			1. Start application server
			
				From "...\ProAngularJSExamples" folder command line prompt, type "node app.js"
		
			2. Open unsecured browser window (I am using Chrome Version 36.0.1985.125 m)
			
				1. Create unsecured browser shortcut

					<strong><u>NOTE</u>:</strong> Because the data is obtained from a cross domain server, the application must be run in an unsecured browser instance.				
					If you run it in a secure Browser instance you most likely see something like this in the developer tools console -> 
					"XMLHttpRequest cannot load http://localhost:2403/products. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:5000' is therefore not allowed access."     
			
			 		1. Create a Chrome shortcut
			 		
			 		2. Open shortcut properties window
			 		
			 		!["Chrome Shortcut Properties Window"](./readme_images/chrome_shortcut.png?raw=true "Chrome Shortcut Properites Window")
			 		
			 		3. Although not something that you should do except for something like this, append "--user-data-dir="C:/Chrome dev session" --disable-web-security" to the "Target" text. 
			
				2. Launch the "unsecured" browser
				
				3. Open End User Window
				
					1. type "http://localhost:5000/app.html"
					
					!["End Users Window"](./readme_images/app.png?raw=true "End Users Window")
					
					2. filter results by selecting left buttons				
				 				
				4. Open "Administration" Login Window
					
					1. type "http://localhost:5001/admin.html"
					
			 		!["Login Window"](./readme_images/login.png?raw=true "Login Window")
					
					2. Enter "Username" = "admin" and "Password" = "secret"
					
					3. Press "Login" button
					
					!["After Login Window"](./readme_images/after_login.png?raw=true "After Login Window")
				
	!["Work In Progress"](./readme_images/wip.jpg?raw=true "Work In Progress") MORE TO COME

### Developer(s)

**Acknowledgments**: Adam Freeman "http://www.apress.com/9781430264484"

**Author**: Reed Clarke <reed.clarke@bridgevine.com>

**Contributors**:
