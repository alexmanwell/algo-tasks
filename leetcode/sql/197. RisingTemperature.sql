/* https://leetcode.com/problems/rising-temperature/submissions/ */

/* # Write your MySQL query statement below */

SELECT t1.id FROM Weather as t1 JOIN Weather as t2 ON
                DATEDIFF(t1.recordDate, t2.recordDate) = 1
             WHERE t1.temperature > t2.temperature;