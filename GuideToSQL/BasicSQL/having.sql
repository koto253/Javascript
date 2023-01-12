-- We are familiar with the WHERE clause that can be used to filter rows. 
-- In the same way, the HAVING clause allows us to filter groups. 
-- At times, the HAVING clause can be used to filter rows to display 
-- but that is not the intended use and can make the query slower. 

-- Query 1
SELECT MaritalStatus, AVG(NetworthInMillions) AS NetWorth 
FROM Actors 
GROUP BY MaritalStatus 
HAVING NetWorth > 450 OR NetWorth < 250;

-- Query 2
SELECT MaritalStatus, AVG(NetworthInMillions) AS NetWorth 
FROM Actors 
GROUP BY MaritalStatus 
HAVING MaritalStatus='Married';

-- Usually, the HAVING clause is used with aggregate functions. 
-- If you find yourself writing a HAVING clause that uses a column 
-- or expression that isn’t in the SELECT clause, it is likely you 
-- should be using the WHERE clause instead. For instance, consider 
-- the following query, which uses the marital status column in the 
-- HAVING clause.

-- The same query using the WHERE clause can be rewritten as 
-- follows:

-- Query 3
SELECT MaritalStatus, AVG(NetworthInMillions) AS NetWorth 
FROM Actors WHERE MaritalStatus='Married' 
GROUP BY MaritalStatus;