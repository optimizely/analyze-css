# Oct. 19, 2015
```
ALTER TABLE entries ADD stylesheet text;
UPDATE entries SET stylesheet = 'app' WHERE stylesheet IS NULL;
```
