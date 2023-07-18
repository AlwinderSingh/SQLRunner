# [AtlanSQL Web Application](https://atlansqldevrunner.netlify.app/)

## Overview

This project is a web-based application called AtlanSQL, designed to run SQL queries and display the results within the application. The application accepts user-input SQL queries, executes them, and presents the corresponding table of data in response to each query. It provides a user-friendly interface for users to interact with the SQL queries and view the associated data.

### Features:
- SQL Query Execution: Users can enter SQL queries into the application, and the application will execute them and display the results in the form of a table.

- Sorting: Users can sort the table data based on column values, allowing for easy data analysis.

- CSV Download: The application allows users to download query results in CSV format, facilitating data analysis outside the application.

- History: Users can view a history of previous queries executed, making it convenient to revisit and re-run queries.

- Create New SQL Queries: Users can create and execute new SQL queries using a space provided in the application. This feature allows for flexibility and custom queries.

- Edit Previous SQL Queries: The application maintains a history of executed SQL queries, and users can edit and re-run any of the previous queries from the history. This allows for easy modifications and re-execution of queries.

- Count Rows: Users can count the number of rows in the displayed table, providing a quick summary of the data size.

- Next and Previous Navigation: Users can easily navigate between pages of the table to view more rows without having to reload the entire table.

## Technologies Used

- ReactJS: The JavaScript framework used for building the front-end of the web application.
- HTML and CSS: Used for structuring and styling the user interface.

### Major plugins or packages used in the project:

- react-bootstrap: This package is used for UI components in conjunction with ReactJS. It provides a set of pre-styled and customizable components that integrate seamlessly with React applications, making the UI development process faster and more efficient.

- papaparse: The papaparse library is utilized for parsing CSV data in the application. It simplifies the process of reading and parsing CSV files, allowing the application to process and display the data efficiently.

The combination of ReactJS, PapaParse, and React Bootstrap allows for efficient development and provides the necessary tools to build a responsive and interactive web application.

## Page Load Time

The page load time of the AtlanSQL web application has been optimized to ensure a smooth user experience. The performance was evaluated using the [PageSpeed Insights](https://pagespeed.web.dev/analysis/http-atlansqldevrunner-netlify-app/ptkz8ps9br?form_factor=desktop) tool.

- Performance: 95
- Accessibility: 90
- Best Practices: 100
- SEO: 100

The application has a solid performance score, providing users with a fast and efficient browsing experience.

## Optimization Techniques

To decrease the load time and increase performance, the following optimizations were implemented:

**Pagination**: The application employs pagination to display query results in smaller, manageable portions, reducing the initial load time and improving user experience when dealing with large datasets.

## SnapShots
![image](https://github.com/AlwinderSingh/SQLRunner/assets/100020772/73d5f937-c795-49ca-8e57-8a3cc2f2600d)

## Additional Notes

- This project is a dummy application and does not have a backend or a query engine. It's meant for demonstration and learning purposes.
- Syntax validation and query validation were intentionally omitted to keep the focus on the primary functionality of the application.
- The application uses dummy data sources for demonstration purposes, and the data and query do not need to be in sync.
- The application allows users to execute multiple predefined queries and view corresponding tables of data.
- Users can also edit and save previous queries for future reference.

Feel free to reach out if you have any questions or need further assistance with the AtlanSQL web application! 🚀
