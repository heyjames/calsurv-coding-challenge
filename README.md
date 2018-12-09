### CalSurv Coding Challenge
(Requires Node to be installed. Run "node -v" in terminal to check if installed)
1. Clone repo to your computer
2 Navigate to the directory from terminal
3. Type "npm install" without the quotes and npm will begin installing the dependencies listed in "package.json".
4. Type "node index.js" and the app should be running.
5. Visit localhost:3000 on your web browser

### Postgres Connection Info
* Host: localhost
* Port: 5432
* Database: coding_challenge
* Table names: untitled_table (titles), ratings
* no user/password setup

### To do
* Make sure async is used appropriately in certain areas of code
* Clean-up code and export sections of code in index.js into own JS modules and categorize them in appropriately-named folders
* Make a working front end to consume all API calls
* IMDB refreshes their .tsv database daily; update your local database daily with an automated script
* Change database table name from "untitled_table" to "titles" and import entire tsv files as opposed to truncated versions I created for quick database SQL testing, calls, import
* Choose to use Django framework in the first place
