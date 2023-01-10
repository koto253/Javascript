Which query/queries will print the version of MySQL?
   SHOW VARIABLES LIKE "%version%";


How can we get the current time and date in MYSQL?
   SELECT CURRENT_TIMESTAMP();


Imagine you have a table that consists only of country names. You are asked to write a query that randomly selects ten countries. Identify the correct query from the following?
   SELECT CountryName 
   FROM Countries 
   ORDER BY RAND() LIMIT 10;

Imagine you have table named Contacts and the following query is run:
   DELETE FROM Contacts WHERE EXISTS (SELECT "Constant")
   what will be the outcome of the query?

   All the rows int the contacts table are delete.
   The subquery will always return one row and EXISTS will
   return true for every row.
