
CREATE TABLE proxies (
    proxy_id INT PRIMARY KEY,
    proxy_address TEXT,
    proxy_port,
    lifecycle as INT,
    error as TEXT,
    last_used as TEXT
);