Workplace Injury Reporting App



A demo web application built using Express.js and Pug templates to simulate the reporting and documentation process for workplace injury claims. It includes:

Worker Progress Report


Medical & Travel Expense Request


Dynamic form rendering from backend data
CSS styling for both screen and print



Demo-ready data switching with no on-screen data entry


🚀 Features


📄 Printable, form-style views using Pug templating
💅 Clean and print-friendly CSS styles
🔁 Switch between two sample backend datasets
🖨️ Auto-adjust layout for multiple printed pages
⚙️ Organized into separate routes and views for clarity



🧪 Simulated Datasets
The app includes two example datasets used to simulate data being loaded from a backend:

| View | URL | Dataset File | | Medical Report | /medical/dataset1 | data/dataset1.json | | Worker Report | /report/dataset2 | data/dataset2.json |

Each route dynamically reads and injects data into the template at render time. No manual form input is required for demo purposes.

📁 Project Structure
project-root/
├── app.js
├── routes/ │
  ├── medical.js │ 
  └── report.js 
├── views/ │ 
  ├── layout.pug │ 
  ├── medical.pug │
  ├── report.pug │ 
  └── mixins/ │ 
    └── tables.pug 
    ├── public/ │
      └── css/ │ 
         ├── styles.css │ 
         └── report.css
         ├── data/ │
           ├── dataset1.json │ 
           └── dataset2.json
🛠️ Setup Instructions
Clone the repo
https://github.com/Spandana928/assignment2
cd injury-report-app
Install dependencies

npm install
Run the app

npm start
Open in browser

http://localhost:3000



demo video : https://drive.google.com/file/d/1WdpqmbdRT52xBTwHGq-ClOz7YTCyT4bu/view?usp=drive_link

🧰 Technologies Used
Node.js

Express

Pug templating

Vanilla CSS (no frameworks)

JavaScript for route handling

📄 License
MIT License – feel free to use and adapt.
