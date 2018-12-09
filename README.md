### CalSurv Coding Challenge
(Requires Node to be installed. Run "node -v" in terminal to check if installed)
1. Clone repo to your computer
2 Navigate to the directory from terminal
3. Type "npm install" without the quotes and npm will begin installing the dependencies listed in "package.json"
4. Type "node index.js" and the app should be running
5. Visit localhost:3000 on your web browser

### Postgres Connection Info
I created a similar local Postgres database and imported truncated versions of the two .tsv files for quick testing
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

### Notes and Thoughts
* Successfully installed and started Postgres (macOS makes this simple)
* Created local database "coding_challenge"
* Learned \l and \connect and \dt commands for Postgres
* Connected to coding_challenge db from Postico macOS app (much more intuitive than the pgAdmin app)


* Source:		https://en.wikibooks.org/wiki/Guide_to_Unix/Commands/File_Compression#gzip
* Useful dash options for gzip:		https://www.gnu.org/software/gzip/manual/gzip.html
* Uncompresses a file to the current directory
* gzip -c title.basics2.tsv.gz > ./title.basics2.tsv

* Stuck on finding command for copying tab delimited file into a table via command line. Found Postico can do it in GUI via CSV import and selecting the tab delimited option. Documentation states tab delimited file headers only supported by CSV files via command line and IMDB's tsv files have headers on first line.

* Found module for Postgres implementation in Node.js
* Had trouble getting /api/movies/year/2018 because Postgres uses changes to all lowercase for SQL queries. Used double quotes to fix this issue.
* Had trouble selecting genre because it contains a string and uses two single quotes which required escaping a set of single quotes. Could be resolved by using actual appropriate database column data types.
* Thinking about using efficient, fast case-insensitive query for genre param that's passed into the SQL query because "ILIKE" may be slow as stated on a Stackoverflow post.

* Formatting SQL with different URL params and query strings for different API calls was troublesome. There must be a better way. Outputted SQL query on page for and executed it in Postico for testing.
