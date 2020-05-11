CREATE TABLE city_urls (
    useragent_id INT PRIMARY KEY,
    useragent_text TEXT,
    lifecycle as INT,
    error as TEXT,
    last_used as TEXT
);