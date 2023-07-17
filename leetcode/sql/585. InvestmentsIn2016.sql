/*   https://leetcode.com/problems/investments-in-2016   */

/* Write your PL/SQL query statement below */

SELECT sum(tiv_2016) AS tiv_2016
    FROM Insurance
    WHERE tiv_2015 IN
                (SELECT tiv_2015
                    FROM Insurance
                        GROUP BY tiv_2015
                        HAVING count(*) > 1
                )
        AND CONCAT(lat, lon) IN
                (SELECT CONCAT(lat, lon)
                    FROM Insurance
                        GROUP BY lat, lon
                        HAVING count(*) = 1
                );