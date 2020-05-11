CREATE TABLE title_filters (
    title_filter_id INT PRIMARY KEY,
    title_filter_text TEXT,
    lifecycle as INT,
    error as TEXT,
    last_used as TEXT
);