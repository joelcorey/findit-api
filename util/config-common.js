function categories() {
    return [
        // preferred:
        "sof",  // software <-- desirable
        "web",  // web / info design <-- desirable
        "cpg",  // gigs - computer <-- desirable
        // other:
        "acc",  // accounting
        "bus",  // business / management
        "etc",  // et cetera
        "crg",  // gigs - creative
        "med",  // art / media / design
        "npo",  // non profit
        "rej",  // real estate
        "sad",  // sys admin and network
        "tch",  // tech support
        "sls",  // sales
        "wri"   // writing editing and translation
    ];
}
     
function keywords() {
    return [
        "api",
        "integration",

        "app",
        "associate",
        "automation",

        "html",
        "css",
        
        "javascript",
        "node",
        
        "react",
        "vue",
        "gatsby",

        "laravel",
        "php",

        "remote",
        "telecommute",

        "script",  
        "ubuntu",
        "linux",

        "sheets",
        "google",
        "airtable",

        "contentful",
        "wordpress",
        "square", // squarespace
        "wix",
        "weebly",

        "scratch",
        "godot",
    ];
}

module.exports = {
    categories: categories(),
    keywords: keywords()
}

