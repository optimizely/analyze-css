web: node index.js
worker: node worker.js app "curl https://app.optimizely.com/signin -s | grep -o /master-[0-9]*\.[0-9]*/ | head -1 | awk '{print \"https://app.optimizely.com\"\$1\"dist/css/app.css\"}'" && node worker.js p13n "curl https://app.optimizely.com/signin -s | grep -o /master-[0-9]*\.[0-9]*/ | head -1 | awk '{print \"https://app.optimizely.com\"\$1\"dist/css/p13n.css\"}'"
