Inner join, left outer join, and right outer join are different types of SQL joins used to combine rows from two or more tables based on a related column between them. Here's a brief explanation of each:

1. **Inner Join:**
   - An inner join returns only the rows where there is a match in both tables based on the specified join condition.
   - Rows from the tables that do not meet the join condition are excluded from the result set.

   **Syntax:**
   ```sql
   SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;
   ```

2. **Left Outer Join (or Left Join):**
   - A left outer join returns all the rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for columns from the right table.
   - The left table is the table specified before the `LEFT JOIN` keyword.

   **Syntax:**
   ```sql
   SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;
   ```

3. **Right Outer Join (or Right Join):**
   - A right outer join returns all the rows from the right table and the matched rows from the left table. If there is no match, NULL values are returned for columns from the left table.
   - The right table is the table specified before the `RIGHT JOIN` keyword.

   **Syntax:**
   ```sql
   SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;
   ```

In summary:
- Inner join returns only the matched rows from both tables.
- Left outer join returns all rows from the left table and matched rows from the right table.
- Right outer join returns all rows from the right table and matched rows from the left table.

The choice of which join to use depends on the specific requirements of your query and the relationship between the tables you are working with.