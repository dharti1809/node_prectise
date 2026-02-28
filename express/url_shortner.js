import express from "express";

const app = express();

app.use(express.static("urlShortner"))

const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links));
}

app.get("/", async (req, res) => {

    try{
        const file = await fs.readFile(path.join("views", "urlForm.html"));
        const links = await loadLinks();

        const content = file.toString().replaceAll("{{ shortened_urls }}", )
    }catch(err){
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }

});

app.post("/", async (req, res) => {
    try{
        const { url, shortCode } = req.body;
        const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

        const links = await loadLinks();

        if(links[finalShortCode]) {
            return res.status(400).send("Short code already exists. Please choose another one.");
        }

        links[finalShortCode] = url;

        await saveLinks(links);
    }catch(err){
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
})
