## Journalyst Mini Analytics Dashboard**

### -> Setup Instructions:

Step 1: Clone the repository
  git clone https://github.com/VinayPatel553/journalyst-task.git
  cd journalist task

Step 2: Install Dependencies 
	->For Backend (server)
      cd server 
      npm install

  ->For Frontend (client)
      cd client
      npm install 
      
Step 3: Run backend
	node index.js
  
Step 4: Run Frontend
	npm start 


### -> Decisions I made 

For the mini analytics dashboard task I focused on building a clean, easy to understand to present trading metrics, charts and tables in a clear layout.

#### 1.Design and Layout:
I used Bootstrap Framework for styling instead of writing CSS. Using Bootstrap rows, columns, and card to maintain a neat, grid -based layout.

#### 2.Data Handling:
The Backend data made with Express for now for task purpose it returns a hardcoded mock-data. It keeps the output consistent every time so it makes it easier to test and verify if it correctly renders on frontend.

#### 3.Visualization:
I used Chart.js for displaying the performance curve for visual data representation. The chart shows trade performance of each company.

#### 4.Color Coding and UI/UX:
I added green color for positive values and red color for negative values to make the data more intuitive. Also added tooltips on chart and hover effects on table to make interactive.

#### 5.Responsiveness:
Using Bootstraps grid layout it automatically adjusts accordingly to the screen sizes, ensuring a smooth viewing experience on all types of devices.

